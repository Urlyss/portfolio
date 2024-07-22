import React from "react";
import { CardDescription, CardTitle } from "./ui/card";
import { cn, TExperience } from "@/lib/utils";
import AnimatedCard from "./AnimatedCard";
import Link from "next/link";

const ExperienceCard = async ({
  className,
  experiencesList,
}: {
  className?: string;
  experiencesList: TExperience[];
}) => {
  return (
    <AnimatedCard className={cn("", className)}>
      <div className="h-full overflow-y-auto">
        <div className="space-y-4 w-full h-full flex flex-col justify-between">
          <CardTitle>Experiences</CardTitle>
          <CardDescription className="space-y-6">
            {experiencesList.map((cl, ind) => (
              <div key={ind} className="flex justify-between items-center gap-4">
                <div>
                  <Link
                    className="underline hover:text-primary"
                    href={cl.link}
                    target="_blank"
                  >
                    {cl.company}
                  </Link>{" "}
                </div>
                <div className="hidden md:flex h-1 border-2 w-[30%]" />
                <div>{cl.job_title}</div>
                <div className="hidden md:flex">{cl.dates}</div>
              </div>
            ))}
          </CardDescription>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default ExperienceCard;
