"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AnimatedPageHeader = React.forwardRef<
  HTMLHeadElement,
  React.HTMLAttributes<HTMLHeadElement>
>(({ className, children, ...props }, ref) => (
  <motion.h1
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      type: "spring",
      damping: 15,
      duration: 3,
      delay: 1,
    }}
    style={{fontSize:"clamp(0px, 22vw, 300px)"}}
    className={cn("text-center font-semibold tracking-tighter leading-none text-secondary-foreground/20", className)}
  >
    {children}
  </motion.h1>
));

AnimatedPageHeader.displayName = "AnimatedPageHeader"
export default AnimatedPageHeader;
