"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg border border-gray-100 text-center">
        <div className="flex justify-center">
          <div className="h-24 w-24 bg-red-100 rounded-full flex items-center justify-center text-red-600">
            <AlertTriangle size={48} />
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">403</h2>
          <h3 className="mt-2 text-xl font-bold text-gray-800">Access Denied</h3>
          <p className="mt-4 text-sm text-gray-600">
            You do not have permission to access this page.
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-slate-950 hover:bg-red-700 transition"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
