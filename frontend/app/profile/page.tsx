"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { User as UserIcon, Mail, Shield, LogOut } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import Link from "next/link";

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) return null; // Will redirect

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Navigation / Header */}
        <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <Link href="/" className="text-blue-600 font-semibold hover:text-blue-800 transition">
            &larr; Back to Home
          </Link>
          <h1 className="text-xl font-bold text-gray-800">My Profile</h1>
          <div className="w-24"></div> {/* spacer */}
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 h-32 relative"></div>
          
          <div className="px-8 pb-8 pt-0 relative">
            <div className="relative -mt-16 mb-6 flex justify-between items-end">
              <div className="h-32 w-32 bg-white rounded-full p-2 shadow-md">
                <div className="h-full w-full bg-blue-100 rounded-full flex items-center justify-center text-blue-600 border-2 border-dashed border-blue-300">
                  <UserIcon size={48} />
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-100 transition-colors border border-red-100"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{user.username}</h2>
                <p className="text-sm text-gray-500 flex items-center mt-1">
                  <Shield size={16} className="mr-1" /> 
                  Role: <span className="font-medium ml-1 text-gray-700">{user.role}</span>
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Account Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-4 flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm text-gray-400">
                      <UserIcon size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Username</p>
                      <p className="text-base font-semibold text-gray-900 mt-1">{user.username}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm text-blue-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email Address</p>
                      <p className="text-base font-semibold text-gray-900 mt-1">{user.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
