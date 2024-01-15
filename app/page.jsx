import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Rules from "@/components/Rules";
import JudgingCriteria from "@/components/JudgingCriteria";
import FrequentlyAskedQuestion from "@/components/FrequentlyAskedQuestion";
import Timeline from "@/components/Timeline";
import Rewards from "@/components/Rewards";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Introduction />
      <Rules />
      <JudgingCriteria />
      <FrequentlyAskedQuestion />
      <Timeline />
      <Rewards />
      <Footer />
    </main>
  );
}
