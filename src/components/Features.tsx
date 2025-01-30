"use client";
import React, { useEffect, useState } from "react";
import { MessageSquare, Globe2, Shield, Headphones } from "lucide-react";
import Image from "next/image";

type FeatureTitle =
  | "Natural Language"
  | "Multilingual Support"
  | "Enterprise Security"
  | "24/7 Support";

const featureImages: Record<FeatureTitle, string> = {
  "Natural Language":
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop",
  "Multilingual Support":
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  "Enterprise Security":
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2032&auto=format&fit=crop",
  "24/7 Support":
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
};

interface Feature {
  icon: JSX.Element;
  title: FeatureTitle;
  description: string;
}

const features: Feature[] = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Natural Language",
    description:
      "Human-like conversations powered by advanced AI. Our natural language processing ensures smooth and contextual interactions.",
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Multilingual Support",
    description:
      "Communicate in 100+ languages seamlessly. Break down language barriers and reach a global audience with ease.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption and privacy protection. Your data security is our top priority with advanced encryption protocols.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "24/7 Support",
    description:
      "Always here when you need us. Get instant help from our dedicated support team around the clock.",
  },
];

function FeatureCard({
  feature,
  inView,
}: {
  feature: (typeof features)[0];
  inView: boolean;
}) {
  return (
    <div
      className={`flex gap-x-8 items-start transition-all ${
        inView ? "opacity-100" : "opacity-50"
      }`}
    >
      <div className="w-12 h-12 shrink-0 bg-gray-400 rounded-full flex items-center justify-center">
        {React.cloneElement(feature.icon, {
          className: "w-6 h-6 text-foreground",
        })}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">
          {feature.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export function Features() {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 2000); // Change feature every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-background py-32">
      <div className="container mx-auto px-6 max-w-8xl">
        <div className="relative">
          <h2 className="text-4xl md:text-5xl text-foreground font-bold text-center w-full mb-32">
            Powerful Features for Modern Communication
          </h2>
          <div className="grid grid-cols-2 gap-16">
            {/* Left side - Feature list */}
            <div className="space-y-16 py-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  feature={feature}
                  inView={index === activeFeature}
                />
              ))}
            </div>

            {/* Right side - Feature visualization */}
            <div className="relative rounded-2xl overflow-hidden h-[600px]">
              <Image
                src={featureImages[features[activeFeature].title]}
                alt={features[activeFeature].title}
                fill
                className="object-cover transition-all duration-1000 transform hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-8">
                {React.cloneElement(features[activeFeature].icon, {
                  className: "w-16 h-16 text-white animate-float mb-4",
                })}
                <h4 className="text-xl font-semibold text-white mb-2">
                  {features[activeFeature].title}
                </h4>
                <p className="text-sm text-white max-w-md">
                  {features[activeFeature].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
