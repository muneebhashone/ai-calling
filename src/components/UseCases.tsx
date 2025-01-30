"use client";

import React, { useState } from "react";
import {
  Building2,
  Headphones,
  GraduationCap,
  Stethoscope,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

type TabId = "business" | "support" | "education" | "healthcare";

interface UseCase {
  id: TabId;
  title: string;
  icon: JSX.Element;
  description: string;
  features: string[];
  image: string;
}

const useCases: UseCase[] = [
  {
    id: "business",
    title: "Enterprise & Business",
    icon: <Building2 className="w-6 h-6" />,
    description:
      "Transform your business communication with AI-powered voice solutions. Enhance customer service, automate routine calls, and scale your operations efficiently.",
    features: [
      "Automated customer service",
      "Sales call automation",
      "Meeting transcription",
      "Voice analytics",
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "support",
    title: "Customer Support",
    icon: <Headphones className="w-6 h-6" />,
    description:
      "Deliver exceptional customer support with our AI voice technology. Handle inquiries 24/7, reduce wait times, and maintain consistent service quality.",
    features: [
      "24/7 support availability",
      "Multilingual assistance",
      "Quick query resolution",
      "Seamless escalation",
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "education",
    title: "Education & Training",
    icon: <GraduationCap className="w-6 h-6" />,
    description:
      "Revolutionize learning experiences with AI voice technology. Create interactive lessons, provide instant feedback, and enable accessible education for all.",
    features: [
      "Interactive learning",
      "Language practice",
      "Instant feedback",
      "Accessibility support",
    ],
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: <Stethoscope className="w-6 h-6" />,
    description:
      "Enhance patient care with AI voice solutions. Streamline appointments, provide medical information, and improve healthcare accessibility.",
    features: [
      "Appointment scheduling",
      "Medical information",
      "Patient follow-up",
      "Healthcare reminders",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
  },
];

export function UseCases() {
  const [activeTab, setActiveTab] = useState<TabId>("business");
  const activeCase = useCases.find((useCase) => useCase.id === activeTab)!;

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-8xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 capitalize">
          Transforming Industries with AI Voice
        </h2>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Left side - Tabs with Accordion */}
          <div className="md:col-span-4 space-y-4">
            {useCases.map((useCase) => (
              <div key={useCase.id} className="rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveTab(useCase.id)}
                  className={`w-full flex items-center justify-between gap-4 p-4 transition-all duration-300 ${
                    activeTab === useCase.id
                      ? "bg-gray-100 shadow-md"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2 rounded-lg ${
                        activeTab === useCase.id ? "bg-gray-200" : "bg-gray-100"
                      }`}
                    >
                      {useCase.icon}
                    </div>
                    <h3 className="font-semibold text-left">{useCase.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeTab === useCase.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeTab === useCase.id ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <div className="p-4 bg-gray-50">
                    <p className="text-gray-700 mb-4">{useCase.description}</p>
                    {/* <div className="grid grid-cols-1 gap-2">
                      {useCase.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <div className="w-2 h-2 bg-gray-400 rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Image Only */}
          <div className="md:col-span-8 relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={activeCase.image}
              alt={activeCase.title}
              fill
              className="object-cover transition-all duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <h3 className="text-3xl font-bold text-white mb-4">
                {activeCase.title}
              </h3>
              {/* <p className="text-white text-lg mb-8">
                {activeCase.description}
              </p> */}
              <div className="grid grid-cols-2 gap-4">
                {activeCase.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-white"
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
