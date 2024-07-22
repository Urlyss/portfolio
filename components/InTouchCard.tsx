import React from "react";
import { CardDescription, CardTitle } from "./ui/card";
import { PiArrowCircleRightBold } from "react-icons/pi";
import { cn } from "@/lib/utils";
import AnimatedCard from "./AnimatedCard";

const InTouchCard = ({ className,tel,mail }: { className?: string,tel:string,mail:string }) => {
  return (
    <AnimatedCard className={cn("", className)}>
      <div className="flex flex-col justify-end h-full gap-4 group">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <CardDescription>{`Let's work together ✨`}</CardDescription>
            <CardTitle className="flex flex-col">
              <a className="underline hover:text-primary" href={`mailto:${mail}`}>Send me a mail now</a>
              or
              <a className="underline hover:text-primary" href={`tel:${tel}`}>Call me</a>
            </CardTitle>
          </div>
          <div>
            <PiArrowCircleRightBold className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default InTouchCard;
