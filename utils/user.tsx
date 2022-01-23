import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { User, Session } from "@supabase/supabase-js";
import axios from "axios";
import supabase from "./supabase";
import { Profile } from "../types";

type UserContextType = {
  session: Session | null; // Supabase session
  user: User | null; // Supabase auth.user object
  profile: Profile | null; // Profile db table
  userLoaded: boolean; // display loading screen
  login: () => void; // login function
  logout: () => void; // logout function
};

const UserContext = createContext<UserContextType>(undefined as any);

const UserProvider = (props: { children: any }) => {
  const { children } = props;
  const router = useRouter();

  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [userLoaded, setUserLoaded] = useState(false);

  // Get session and listener from beginning
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

  // Fetch user profile data on login
  useEffect(() => {
    async function fetchProfile(user: User) {
      if (user) {
        const { data: profile } = await supabase
          .from("profile")
          .select("*")
          .eq("id", user.id)
          .single();

        setProfile(profile);
        setUserLoaded(true);
      }
    }
    if (user) {
      setUserLoaded(false);
      fetchProfile(user);
    }
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

    setSession(null);
    setUser(null);
    setProfile(null);
    setUserLoaded(false);

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
