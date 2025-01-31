import type React from "react";

export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 relative">
      <span className="relative inline-block">
        {children}
        <span className="absolute inset-0 border-2 border-primary opacity-20 rounded-lg transform translate-x-2 translate-y-2" />
      </span>
    </h1>
  );
}
