import AnimatedCard from "@/components/AnimatedCard";
import AnimatedPageHeader from "@/components/AnimatedPageHeader";
import ExperienceCard from "@/components/ExperienceCard";
import InTouchCard from "@/components/InTouchCard";
import PageWrapper from "@/components/PageWrapper";
import ResumeCard from "@/components/ResumeCard";
import SocialCard from "@/components/SocialCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { getAbout, getExperiences, getSocials } from "@/lib/db";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default async function About() {
  const aboutSection = await getAbout();
  const experiencesList = await getExperiences();
  const socialList = await getSocials();

  return (
    <PageWrapper className="space-y-6">
      <AnimatedPageHeader>About Me</AnimatedPageHeader>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 gap-5">
        <AnimatedCard>
          <div className="flex justify-between items-end h-full">
            <div className="space-y-1">
              <CardTitle>{aboutSection.header}</CardTitle>
              <CardDescription>{aboutSection.job_title}</CardDescription>
            </div>
          </div>
        </AnimatedCard>
        <InTouchCard tel={socialList.phone} mail={socialList.mail} />
        <AnimatedCard className="lg:col-span-2 lg:row-span-2 h-full">
          <div className="flex flex-col justify-between gap-2 h-full overflow-auto">
            <CardTitle>About me</CardTitle>
            <CardDescription>
              {aboutSection.about_me.split(",,").map((ab, ind) => (
                <p key={ind}>{ab}</p>
              ))}
            </CardDescription>
          </div>
        </AnimatedCard>
        <ExperienceCard
          className="lg:col-span-2"
          experiencesList={experiencesList}
        />
        <SocialCard Name={FaGithub} link={socialList.github} />
        <SocialCard Name={FaLinkedin} link={socialList.linkedin} />
        <SocialCard Name={FaXTwitter} link={socialList.x} />
        <ResumeCard link={socialList.resume} />
      </div>
    </PageWrapper>
  );
}
