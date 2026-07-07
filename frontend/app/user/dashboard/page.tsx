"use client";

import { useEffect, useState } from "react";
import { ProtectedRoute } from "../../../components/auth/ProtectedRoute";
import { Bookmark, MessageCircle } from "lucide-react";
import api from "../../../services/api";
import { useAuth } from "../../../hooks/useAuth";

export default function UserDashboardPage() {
  const { user } = useAuth();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/user/dashboard");
        setData(res.data);
      } catch (error) {
        console.error("Failed to fetch user dashboard data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <ProtectedRoute allowedRoles={["USER", "ADMIN"]}>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              {data ? data.message : `Welcome back, ${user?.username || ""}`}
            </h1>
            <p className="text-gray-500 mt-2">Manage your saved content and interactions below.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center space-y-4">
              <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                <Bookmark size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Saved Articles</h3>
                <p className="text-gray-500 text-sm">You have {data ? data.savedArticlesCount : "..."} saved articles.</p>
              </div>
              <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-sm font-medium transition-colors">
                View Articles
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center space-y-4">
              <div className="h-16 w-16 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                <MessageCircle size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Comment History</h3>
                <p className="text-gray-500 text-sm">You have posted {data ? data.commentHistoryCount : "..."} comments.</p>
              </div>
              <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-sm font-medium transition-colors">
                View Comments
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
