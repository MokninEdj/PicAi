import BlogAndUpdates from "@/components/Blogs";
import ExampleShowcase from "@/components/ExampleShowcase";
import ExploreTools from "@/components/ExploreTools";
import FAQ from "@/components/FAQ";
import FastBackgroundEraser from "@/components/FastBackgroundEraser";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MobileAppPromo from "@/components/MobileAppPromo";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExampleShowcase />
      <HowItWorks />
      <FastBackgroundEraser />
      <Features />
      <ExploreTools />
      <Testimonials />
      <Pricing />
      <MobileAppPromo />
      <FAQ />
      <BlogAndUpdates/>
    </main>
  );
}
