import React from "react";
import { PiArrowCircleUpRightBold } from "react-icons/pi";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import AnimatedCard from "./AnimatedCard";
import Link from "next/link";
import { CardDescription } from "./ui/card";

const SocialCard = ({
  className,
  Name,
  link,
}: {
  className?: string;
  Name: IconType;
  link: string;
}) => {
  return (
    <AnimatedCard className={cn("", className)}>
      <Link href={link || "#"} target="_blank">
        <div className="flex justify-around items-center flex-col gap-4 h-full group">
          <div>
            <Name className="w-24 h-24 group-hover:text-primary" />
          </div>
          <div className="flex justify-between items-center w-full">
          <CardDescription className="group-hover:text-primary">{`Let's Connect`}</CardDescription>
            <PiArrowCircleUpRightBold className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
          </div>
        </div>
      </Link>
    </AnimatedCard>
  );
};

export default SocialCard;
