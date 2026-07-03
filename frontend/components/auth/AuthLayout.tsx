import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  illustrationSrc?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  children,
  illustrationSrc = "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // High quality sports placeholder
}) => {
  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Illustration Side (hidden on mobile) */}
      <div className="hidden lg:block relative w-0 flex-1 bg-blue-900">
        <div className="absolute inset-0 h-full w-full object-cover">
           <img
            className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-overlay"
            src={illustrationSrc}
            alt="Sports stadium background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-12 text-white max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 drop-shadow-md">Welcome to OmegaField</h2>
            <p className="text-xl text-blue-100 drop-shadow-sm">
              Your premium destination for the latest sports news, live scores, and expert analysis. Join the community today.
            </p>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24 z-10">
        {children}
      </div>
    </div>
  );
};
