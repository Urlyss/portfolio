import AnimatedCard from "@/components/AnimatedCard";
import InTouchCard from "@/components/InTouchCard";
import PageWrapper from "@/components/PageWrapper";
import ProjectCard from "@/components/ProjectCard";
import ResumeCard from "@/components/ResumeCard";
import SocialCard from "@/components/SocialCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { NotionClient, getAbout, getSocials, getWorks } from "@/lib/db";
import Link from "next/link";
import { FaGithub, FaHtml5 } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { PiArrowCircleRightBold, PiUserFocusThin } from "react-icons/pi";

export default async function Home() {
  const aboutSection = await getAbout()
  const socialList = await getSocials();
  const workList = await getWorks();

  return (
    <PageWrapper className="grid grid-cols-1 lg:grid-cols-4 gap-5">
      <AnimatedCard className="lg:col-span-2 group">
      <Link href={'/about'} >
        <div className="flex flex-col justify-between h-full w-full">
          <Avatar className="w-24 h-24 ">
            <AvatarImage src={aboutSection.logo} />
            <AvatarFallback>Urlyss</AvatarFallback>
          </Avatar>
          <div className="flex justify-between items-center">
            <div className="space-y-1">
            <CardTitle>{aboutSection.header}</CardTitle>
            <CardDescription>{aboutSection.job_title}</CardDescription>
            </div>
            <div>
              <PiArrowCircleRightBold className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
            </div>
          </div>
        </div>
        </Link>
      </AnimatedCard>

      <ResumeCard link={socialList.resume} />

      <ProjectCard
        {...workList[0]}
      />
      <ProjectCard
        {...workList[1]}
      />
      <SocialCard Name={FaGithub} link={socialList.github} />
      <ProjectCard
      className="lg:col-span-2"
        {...workList[2]}
      />
      <InTouchCard
        className="lg:col-span-2"
        tel={socialList.phone}
        mail={socialList.mail}
      />
      <AnimatedCard className="lg:col-span-2 group">
        <div className="flex flex-col justify-end h-full gap-4">
          <div className="space-y-1 w-full">
            <CardDescription>{`WHAT I DO`}</CardDescription>
            <CardTitle>
              <div className="flex justify-between ">
                <div className="flex flex-col items-center">
                  <FaHtml5 className="w-20 h-20" />
                  <p className="text-xl">WEB</p>
                </div>
                <div className="flex flex-col items-center">
                  <MdOutlineDeveloperMode className="w-20 h-20" />
                  <p className="text-xl">MOBILE</p>
                </div>
              </div>
            </CardTitle>
            <div className="flex justify-end">
              <PiArrowCircleRightBold className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
            </div>
          </div>
        </div>
      </AnimatedCard>
    </PageWrapper>
  );
}
