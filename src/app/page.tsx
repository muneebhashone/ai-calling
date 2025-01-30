"use client";

import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Team } from "@/components/Team";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { VoiceLibrary } from "@/components/VoiceLibrary";

import { UseCases } from "@/components/UseCases";
import { APISection } from "@/components/APISection";
import Pricing from "@/components/Pricing";
import Form from "@/components/Form";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900">
      <Header scrolled={scrolled} />
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="how-it-works">
        <VoiceLibrary />
      </div>
      <div id="api">
        <APISection />
      </div>
      <div id="use-cases">
        <UseCases />
      </div>
      <div id="stats">
        <Stats />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <CTA />
      </div>
      <div id="form">
        <Form />
      </div>
      <div id="get-started">
        <Footer />
      </div>
    </div>
  );
}
