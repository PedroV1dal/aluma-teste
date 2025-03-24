import React from "react";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export const Radio = ({ id, label, ...props }: RadioProps) => (
  <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
    <input
      id={id}
      type="radio"
      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
      {...props}
    />
    {label}
  </label>
);
