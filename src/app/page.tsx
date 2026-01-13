import HeroScreen from "@/components/HeroScreen";
import ScrollHighlightSection from "@/components/ScrollHighlightSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import OurStorySection from "@/components/OurStorySection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import OurSolutionsSection from "@/components/OurSolutionsSection";
import OurCustomersSection from "@/components/OurCustomersSection";
import Career from "@/components/Career";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <HeroScreen />
      <ScrollHighlightSection />
      <ServicesSection />
      <CaseStudiesSection />
      <OurStorySection />
      <WhatWeDoSection />
      <OurSolutionsSection />
      <OurCustomersSection />
      <Career />
      <FooterSection />
    </>
  );
}

