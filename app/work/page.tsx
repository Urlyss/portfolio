import AnimatedPageHeader from "@/components/AnimatedPageHeader";
import PageWrapper from "@/components/PageWrapper";
import ProjectCard from "@/components/ProjectCard";
import { getWorks } from "@/lib/db";

export default async function Work() {
  const workList = await getWorks();
  
  return (
    <PageWrapper className="space-y-6">
      <AnimatedPageHeader>All Works</AnimatedPageHeader>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {workList.map((work, ind) => (
          <ProjectCard {...work} key={ind} />
        ))}
      </div>
    </PageWrapper>
  );
}
