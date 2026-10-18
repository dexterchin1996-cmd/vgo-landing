"use client";

import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import PainPointWall from "@/components/PainPointWall";
import FeatureCards from "@/components/FeatureCards";
import SceneShowcase from "@/components/SceneShowcase";
import HowItWorks from "@/components/HowItWorks";
import Guarantees from "@/components/Guarantees";
import Pricing from "@/components/Pricing";
import PlatformTrust from "@/components/PlatformTrust";
import Roles from "@/components/Roles";
import Merchant from "@/components/Merchant";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Cooperation from "@/components/Cooperation";
import FinalCTA from "@/components/FinalCTA";
import AppLinks from "@/components/AppLinks";
import Footer from "@/components/Footer";
import Waitlist from "@/components/Waitlist";
import Notice from "@/components/Notice";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <main id="home" className="relative bg-[#06111d] overflow-x-hidden font-sans">
        
        <Hero />

        <NewsTicker />
        <PainPointWall />
        <Reveal><FeatureCards /></Reveal>
        <Reveal><SceneShowcase /></Reveal>
        <Reveal><HowItWorks /></Reveal>
        <Reveal><Pricing /></Reveal>
        <Reveal><Guarantees /></Reveal>
        <PlatformTrust />
        <Reveal><Testimonials /></Reveal>
        <Reveal><Roles /></Reveal>
        <Reveal><Merchant /></Reveal>
        <Reveal><Cooperation /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><FinalCTA /></Reveal>
        <AppLinks />
        <Footer />
        <Waitlist />
        <Notice />
      </main>
    </>
  );
}
