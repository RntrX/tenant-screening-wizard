import React from "react";

interface ProgressProps {
  value: number;
}

export function Progress({ value }: ProgressProps) {
  return (
    <div className="relative w-full h-2 bg-gray-300 rounded-full">
      <div
        className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default Progress;
