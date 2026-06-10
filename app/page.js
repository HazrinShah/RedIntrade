"use client";

import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import SocialMedia from "@/components/SocialMedia";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <ScrollRevealWrapper>
          <About />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <Services />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <Portfolio />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <WhyUs />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <Team />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <SocialMedia />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <Contact />
        </ScrollRevealWrapper>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
