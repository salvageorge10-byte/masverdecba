import Hero from "@/components/home/Hero";
import WorkGallery from "@/components/home/WorkGallery";
import HowWeWork from "@/components/home/HowWeWork";
import TrustStrip from "@/components/TrustStrip";
import ProjectsSection from "@/components/home/ProjectsSection";
import GoogleReviewsSection from "@/components/home/GoogleReviewsSection";
import FootballShowcase from "@/components/home/FootballShowcase";
import CatalogPreview from "@/components/home/CatalogPreview";
import FaqSection from "@/components/home/FaqSection";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkGallery />
      <HowWeWork />
      <TrustStrip />
      <ProjectsSection />
      <GoogleReviewsSection />
      <FootballShowcase />
      <CatalogPreview />
      <FaqSection />
      <FinalCta />
    </main>
  );
}
