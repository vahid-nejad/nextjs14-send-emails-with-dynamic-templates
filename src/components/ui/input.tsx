import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactElement;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, icon, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full relative">
        {!!label && <label>{label}</label>}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
            {
              "pl-6": icon,
            }
          )}
          ref={ref}
          {...props}
        />
        {!!icon && (
          <span className="w-4 text-slate-600 absolute top-9 left-1">
            {icon}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
