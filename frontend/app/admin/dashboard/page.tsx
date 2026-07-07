"use client";

import { useEffect, useState } from "react";
import { ProtectedRoute } from "../../../components/auth/ProtectedRoute";
import { Users, FileText, MessageSquare, Tag } from "lucide-react";
import api from "../../../services/api";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("/admin/dashboard");
        setStats(res.data);
      } catch (error) {
        console.error("Failed to fetch admin stats", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
              ADMIN MODE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
              <div className="bg-blue-50 p-4 rounded-lg text-blue-600">
                <FileText size={32} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Total Articles</p>
                <p className="text-2xl font-bold text-gray-900">{stats ? stats.totalArticles : "..."}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
              <div className="bg-green-50 p-4 rounded-lg text-green-600">
                <Users size={32} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{stats ? stats.totalUsers : "..."}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
              <div className="bg-amber-50 p-4 rounded-lg text-amber-600">
                <MessageSquare size={32} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Pending Comments</p>
                <p className="text-2xl font-bold text-gray-900">{stats ? stats.pendingComments : "..."}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
              <div className="bg-purple-50 p-4 rounded-lg text-purple-600">
                <Tag size={32} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Categories</p>
                <p className="text-2xl font-bold text-gray-900">{stats ? stats.categories : "..."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
