import React from "react";
import { cn } from "../../utils/cn";

/**
 * Standard responsive page layout container
 */
export function Container({ children, className = "", id }) {
  return (
    <div
      id={id}
      className={cn(
        "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
