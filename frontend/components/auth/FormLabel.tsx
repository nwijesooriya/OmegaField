import React from "react";

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const FormLabel: React.FC<FormLabelProps> = ({ children, className = "", ...props }) => {
  return (
    <label
      className={`block text-sm font-semibold text-gray-700 mb-1.5 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};
