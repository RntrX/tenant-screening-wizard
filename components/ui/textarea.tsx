import React from "react";

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className="p-2 border rounded-md w-full" />;
}
