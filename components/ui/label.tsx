import React from "react";

export function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-gray-700 font-medium">{children}</label>;
}

export default Label;
