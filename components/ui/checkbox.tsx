import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label className="flex items-center space-x-2">
      <input type="checkbox" {...props} className="h-5 w-5" />
      {label && <span>{label}</span>}
    </label>
  );
}

export default Checkbox;
