import React from "react";

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  subtitle?: React.ReactNode;
}

export const AuthCard: React.FC<AuthCardProps> = ({ children, title, subtitle }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white py-10 px-6 sm:px-10 shadow-2xl rounded-3xl border border-gray-50/50 backdrop-blur-sm">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <div className="mt-3 text-sm text-gray-500">
              {subtitle}
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
