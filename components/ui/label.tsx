import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

export function Label({ className = "", ...props }: LabelProps) {
  return <label className={`block text-sm font-medium text-gray-700 ${className}`} {...props} />;
}
