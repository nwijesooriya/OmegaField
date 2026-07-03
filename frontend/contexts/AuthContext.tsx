"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { User } from "../types/auth";
import { authService } from "../services/auth.service";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (data: any) => Promise<void>;
  signup: (data: any) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const profile = await authService.getProfile();
          setUser(profile);
        } catch (error) {
          console.error("Failed to fetch profile", error);
          localStorage.removeItem("token");
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const login = async (data: any) => {
    const response = await authService.login(data);
    localStorage.setItem("token", response.token);
    setUser(response.user);
  };

  const signup = async (data: any) => {
    await authService.signup(data);
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      localStorage.removeItem("token");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
