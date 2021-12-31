import { createContext, useState, useEffect, useContext } from "react";
import supabase from "./supabase";
import { useRouter } from "next/router";
import axios from "axios";
import { User, Session } from "@supabase/supabase-js";
import { Profile } from "../types";

type UserContextType = {
  session: Session | null;
  user: User | null;
  profile: Profile | null;
  userLoaded: boolean;
  login: () => void;
  logout: () => void;
};

// type UserProvider = {
//   user: User | null;
//   login: () => Promise<void>;
//   logout: () => Promise<void>;
//   isLoading: boolean;
// };

const UserContext = createContext<UserContextType>(undefined as any);

const UserProvider = (props: { children: any }) => {
  const { children } = props;

  const [userLoaded, setUserLoaded] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  // const [user, setUser] = useState(supabase.auth.user());
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  // const getUserProfile = async () => {
  //   // Get user data from user table
  //   const sessionUser = supabase.auth.user();

  //   if (sessionUser) {
  //     // Get data from profile table
  //     const { data: profile } = await supabase
  //       .from("profile")
  //       .select("*")
  //       .eq("id", sessionUser.id)
  //       .single();

  //     // Merge supabase user table with profile table
  //     setUser({
  //       ...sessionUser,
  //       ...profile,
  //     });

  //     setIsLoading(false);
  //   }
  // };

  const getUserProfile = async () => {
    // Get user profile data
    if (user) {
      const { data: profile } = await supabase
        .from("profile")
        .select("*")
        .eq("id", user.id)
        .single();

      setProfile(profile);
      setUserLoaded(true);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, [user]);

  // useEffect(() => {
  //   axios.post("/api/set-supabase-cookie", {
  //     event: user ? "SIGNED_IN" : "SIGNED_OUT",
  //     session: supabase.auth.session(),
  //   });
  // }, [user]);

  const login = async () => {
    await supabase.auth.signIn({
      provider: "github",
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/");
  };

  const exposed = {
    session,
    user,
    profile,
    login,
    logout,
    userLoaded,
  };

  return (
    <UserContext.Provider value={exposed}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider.`);
  }
  return context;
};

export default UserProvider;
