import React from "react";
import { FormLabel } from "./FormLabel";
import { AlertCircle } from "lucide-react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  as?: "input" | "select";
  options?: { label: string; value: string }[];
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  icon,
  as = "input",
  options = [],
  className = "",
  id,
  ...props
}) => {
  const inputId = id || label.replace(/\s+/g, "-").toLowerCase();
  
  const baseClasses = `
    block w-full rounded-xl border-gray-300 shadow-sm
    focus:border-blue-500 focus:ring-blue-500 sm:text-sm
    transition-colors duration-200 ease-in-out
    ${icon ? "pl-10" : "pl-3"} 
    ${error ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-gray-300"}
    ${className}
  `;

  // We add py-2.5 to match the password field height exactly.
  const classes = `${baseClasses} py-2.5`;

  return (
    <div className="w-full">
      <FormLabel htmlFor={inputId}>{label}</FormLabel>
      <div className="relative mt-1">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {icon}
          </div>
        )}
        
        {as === "select" ? (
          <select
            id={inputId}
            className={classes}
            {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
          >
            <option value="" disabled>Select {label}</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={inputId}
            className={classes}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <AlertCircle className="h-5 w-5 text-red-500" />
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1.5 text-sm text-red-600 animate-pulse-fade-in" id={`${inputId}-error`}>
          {error}
        </p>
      )}
    </div>
  );
};
