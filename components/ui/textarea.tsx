import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className = "", ...props }: TextareaProps) {
  return <textarea className={`border border-gray-300 rounded-md p-2 w-full ${className}`} {...props} />;
}

export default Textarea;
