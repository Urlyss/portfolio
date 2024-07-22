"use client";
import React from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const AnimatedCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5,delay:1 }}
  className={cn("w-full h-60", className)}>
    <Card
      className="shadow-xl p-8 w-full h-full rounded-xl hover:shadow-2xl duration-500 transition-shadow hover:cursor-pointer"
      {...props}
    >
      {children}
    </Card>
  </motion.div>
));

export default AnimatedCard;
