
import React from "react";

export const Textarea = ({ className = "", ...props }) => {
  return (
    <textarea
      className={`border rounded-md px-3 py-1 w-full ${className}`}
      rows={3}
      {...props}
    />
  );
};
