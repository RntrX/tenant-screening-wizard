import React from "react";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
}

export function Progress({ value, className, ...props }: ProgressProps) {
  return (
    <div className={`relative w-full bg-gray-300 rounded-full ${className}`} {...props}>
      <div
        className="h-full bg-blue-500 rounded-full transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
