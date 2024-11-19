'use client'
import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../services/AuthService";
import { IUser } from "../types";

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

interface IUserProviderValues {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    try {
      // Fetch user data
      const currentUser = await getCurrentUser();
      // console.log("Current user:", currentUser);
      setUser(currentUser);
      setIsLoading(false); 
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null); 
    } 
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]); 

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook to use user data
export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within the UserProvider context");
  }

  return context;
};

export default UserProvider;
