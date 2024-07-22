import React from "react";
import { CardDescription, CardTitle } from "./ui/card";
import { PiArrowCircleRightBold, PiUserFocusThin } from "react-icons/pi";
import { cn } from "@/lib/utils";
import AnimatedCard from "./AnimatedCard";
import Link from "next/link";

const ResumeCard = ({
  className,
  link,
}: {
  className?: string;
  link: string;
}) => {
  return (
    <AnimatedCard className={cn("", className)}>
      <Link href={link || "#"} target="_blank">
        <div className="flex flex-col justify-around h-full group">
          <div>
            <PiUserFocusThin className="w-24 h-24 group-hover:text-primary" />
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <CardTitle>See my resume</CardTitle>
              <CardDescription>Learn more about me</CardDescription>
            </div>
            <div>
              <PiArrowCircleRightBold className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
            </div>
          </div>
        </div>
      </Link>
    </AnimatedCard>
  );
};

export default ResumeCard;
