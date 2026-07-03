import React from "react";
import { Loader2 } from "lucide-react";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  isLoading = false,
  className = "",
  disabled,
  ...props
}) => {
  return (
    <button
      disabled={isLoading || disabled}
      className={`
        relative w-full flex justify-center items-center py-3 px-4 
        border border-transparent text-sm font-bold rounded-xl text-white 
        bg-blue-600 hover:bg-blue-700 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
        transition-all duration-200 ease-in-out
        shadow-md hover:shadow-lg active:scale-[0.98]
        disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-md
        ${className}
      `}
      {...props}
    >
      {isLoading && (
        <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
      )}
      {children}
    </button>
  );
};
