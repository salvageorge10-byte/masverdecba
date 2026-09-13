import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/TrustStrip";
import FootballShowcase from "@/components/home/FootballShowcase";
import ProjectsSection from "@/components/home/ProjectsSection";
import HowWeWork from "@/components/home/HowWeWork";
import GoogleReviewsSection from "@/components/home/GoogleReviewsSection";
import CatalogPreview from "@/components/home/CatalogPreview";
import FaqSection from "@/components/home/FaqSection";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <FootballShowcase />
      <ProjectsSection />
      <HowWeWork />
      <GoogleReviewsSection />
      <CatalogPreview />
      <FaqSection />
      <FinalCta />
    </main>
  );
}
