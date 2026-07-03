"use client";

import React, { useState } from "react";
import { FormLabel } from "./FormLabel";
import { Eye, EyeOff, Lock, AlertCircle } from "lucide-react";

interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  error,
  className = "",
  id,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || label.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="w-full">
      <FormLabel htmlFor={inputId}>{label}</FormLabel>
      <div className="relative mt-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          <Lock className="h-5 w-5" />
        </div>
        <input
          id={inputId}
          type={showPassword ? "text" : "password"}
          className={`
            block w-full pl-10 pr-10 py-2.5 rounded-xl shadow-sm sm:text-sm
            transition-colors duration-200 ease-in-out
            focus:outline-none focus:ring-2
            ${
              error
                ? "border-red-300 border focus:border-red-500 focus:ring-red-500 text-red-900"
                : "border-gray-300 border focus:border-blue-500 focus:ring-blue-500"
            }
            ${className}
          `}
          {...props}
        />
        
        {/* We place the eye icon correctly, and if there's an error icon, it goes beside it or instead of it. 
            For passwords, eye icon is primary interaction. We'll put error icon just before it if needed, 
            but for simplicity, we just keep the eye icon on the right. */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:text-blue-500"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>
      
      {error && (
        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1 animate-pulse-fade-in" id={`${inputId}-error`}>
           <AlertCircle className="h-4 w-4 inline" /> {error}
        </p>
      )}
    </div>
  );
};
