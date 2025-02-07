import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "secondary"; // Define available variants
}

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded-md text-white";
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600",
    outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100",
    secondary: "bg-gray-500 hover:bg-gray-600",
  };

  return <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props} />;
}
