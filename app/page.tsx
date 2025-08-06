import FinalCTASection from "@/components/sections/FinalCTASection";
import HeroSection from "@/components/sections/HeroSection";
import HyperlocalExplorerSection from "@/components/sections/HyperlocalExplorerSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ProofSection from "@/components/sections/ProofSection";
import SolutionSection from "@/components/sections/SolutionSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProblemSection />
      <HyperlocalExplorerSection />
      <SolutionSection />
      <ProofSection />
      <FinalCTASection />
    </div>
  );
}
