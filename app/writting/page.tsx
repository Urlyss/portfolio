import AnimatedCard from "@/components/AnimatedCard";
import AnimatedPageHeader from "@/components/AnimatedPageHeader";
import PageWrapper from "@/components/PageWrapper";

export default function Writting() {
  return (
    <PageWrapper className="space-y-6">
      <AnimatedPageHeader>Articles</AnimatedPageHeader>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <AnimatedCard className=""></AnimatedCard>
        <AnimatedCard className=""></AnimatedCard>
        <AnimatedCard className=""></AnimatedCard>
      </div>
    </PageWrapper>
  );
}
