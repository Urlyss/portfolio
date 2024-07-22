import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const PageWrapper = ({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <main className={cn("", className)}>
      {children}
    </main>
  );
};

export default PageWrapper;
