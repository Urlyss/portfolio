"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardDescription, CardTitle } from "./ui/card";
import { PiArrowCircleRightBold } from "react-icons/pi";
import { cn, TWork } from "@/lib/utils";
import { Badge } from "./ui/badge";
import AnimatedCard from "./AnimatedCard";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const ProjectCard = ({
  className,
  name,
  category,
  icon,
  link,
}: {
  className?: string;
}& TWork) => {
  return (
    <AnimatedCard className={cn("", className)}>
      <Link href={link} target="_blank">
        <div className="flex flex-col justify-end h-full gap-4 group">
          <Avatar className="w-full h-24 rounded-xl bg-primary/5">
            <AvatarImage src={icon} />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <CardDescription className="flex gap-2">
                {category.map((ca, ind) => (
                  <Badge key={ind}>{ca}</Badge>
                ))}
              </CardDescription>
              <CardTitle>{name}</CardTitle>
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

export default ProjectCard;
