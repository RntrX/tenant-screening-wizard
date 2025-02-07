import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...props }: InputProps) {
  return <input className={`border border-gray-300 rounded-md p-2 w-full ${className}`} {...props} />;
}

export default Input;
