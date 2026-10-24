import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { InquirySection } from "@/components/inquiry-section";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { StudioSection } from "@/components/studio-section";
import { TaglineMarquee } from "@/components/tagline-marquee";
import { WorkSection } from "@/components/work-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <SiteNav />

      <main id="main" className="flex-1">
        <Hero />
        <TaglineMarquee />
        <ServicesSection />
        <WorkSection />
        <StudioSection />
        <ProcessSection />
        <TaglineMarquee />
        <InquirySection />
        <FinalCta />
      </main>

      <SiteFooter />
    </div>
  );
}
