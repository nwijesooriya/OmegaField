"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";
import { Role } from "../../types/auth";

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRoles: Role[];
}

/**
 * RoleGuard checks that the authenticated user has one of the allowed roles.
 * It assumes the user is already authenticated (use inside AuthGuard or after auth check).
 * If the user's role is not allowed, it redirects to /unauthorized.
 */
export const RoleGuard = ({ children, allowedRoles }: RoleGuardProps) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user && !allowedRoles.includes(user.role)) {
      router.push("/unauthorized");
    }
  }, [user, loading, allowedRoles, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user || !allowedRoles.includes(user.role)) return null;

  return <>{children}</>;
};
