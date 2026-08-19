import { Differentiators } from "@/components/Differentiators";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Onboarding } from "@/components/Onboarding";
import { Pricing } from "@/components/Pricing";
import { Problem } from "@/components/Problem";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <Services />
        <Differentiators />
        <Process />
        <Onboarding />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
