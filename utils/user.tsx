import { createContext, useState, useEffect, useContext } from "react";
import supabase from "./supabase";
import { useRouter } from "next/router";
import axios from "axios";
import { User } from "@supabase/supabase-js";

type UserProvider = {
  user: User | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
};
const UserContext = createContext<UserProvider>(undefined as any);

const UserProvider = (props: { children: any }) => {
  const { children } = props;

  const [user, setUser] = useState(supabase.auth.user());
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getUserProfile = async () => {
      // Get user data from user table
      const sessionUser = supabase.auth.user();

      if (sessionUser) {
        // Get data from profile table
        const { data: profile } = await supabase
          .from("profile")
          .select("*")
          .eq("id", sessionUser.id)
          .single();

        // Merge supabase user table with profile table
        setUser({
          ...sessionUser,
          ...profile,
        });

        setIsLoading(false);
      }
    };

    getUserProfile();

    supabase.auth.onAuthStateChange(() => {
      getUserProfile();
    });
  }, []);

  useEffect(() => {
    axios.post("/api/set-supabase-cookie", {
      event: user ? "SIGNED_IN" : "SIGNED_OUT",
      session: supabase.auth.session(),
    });
  }, [user]);

  useEffect(() => {
    if (user) {
      const subscription = supabase
        .from(`profile:id=eq.${user.id}`)
        .on("UPDATE", (payload) => {
          setUser({ ...user, ...payload.new });
        })
        .subscribe();

      return () => {
        supabase.removeSubscription(subscription);
      };
    }
  }, [user]);

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
    user,
    login,
    logout,
    isLoading,
  };

  return (
    <UserContext.Provider value={exposed}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
