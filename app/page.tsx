import { SiteHeader } from "@/components/shared/site-header";
import { ClaimTransformation } from "@/components/landing/claim-transformation";
import { ExampleSessionPreview } from "@/components/landing/example-session-preview";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingHero } from "@/components/landing/landing-hero";
import { Principles } from "@/components/landing/principles";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <LandingHero />
        <ClaimTransformation />
        <Principles />
        <ExampleSessionPreview />
      </main>
      <LandingFooter />
    </div>
  );
}
