import React from "react";

export function Checkbox({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex items-center space-x-2">
      <input type="checkbox" {...props} className="h-5 w-5" />
      <span>{label}</span>
    </label>
  );
}
