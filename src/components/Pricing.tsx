"use client";

import React, { useState } from "react";
import { Check, HelpCircle } from "lucide-react";

// Custom pricing calculator
const calculatePrice = (
  basePrice: number,
  words: number,
  baseWords: number
) => {
  const extraWords = Math.max(0, words - baseWords);
  const extraCost = Math.floor(extraWords / 1000) * 1;
  return basePrice + extraCost;
};

const formatNumber = (num: number) => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

const tiers = [
  {
    name: "Starter",
    basePrice: 29,
    baseWords: 10000,
    maxWords: 50000,
    description: "Perfect for small businesses and startups",
    features: [
      "5 AI voices",
      "Standard support",
      "API access",
      "Basic analytics",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    basePrice: 99,
    baseWords: 50000,
    maxWords: 200000,
    description: "Ideal for growing businesses",
    features: [
      "20 AI voices",
      "Priority support",
      "Advanced API access",
      "Detailed analytics",
      "Custom voice cloning",
      "Team collaboration",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    basePrice: 299,
    baseWords: 200000,
    maxWords: 1000000,
    description: "For large organizations with custom needs",
    features: [
      "Unlimited AI voices",
      "24/7 dedicated support",
      "Full API access",
      "Advanced analytics & reporting",
      "Custom voice cloning",
      "Team collaboration",
      "Custom integration",
      "SLA guarantee",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  const [selectedWords, setSelectedWords] = useState<{ [key: string]: number }>(
    {
      Starter: 10000,
      Professional: 50000,
      Enterprise: 200000,
    }
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-8xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Choose and customize the perfect plan for your needs. No hidden
            fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => {
            const words = selectedWords[tier.name];
            const price = calculatePrice(tier.basePrice, words, tier.baseWords);

            return (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  tier.highlighted
                    ? "bg-foreground text-background scale-105 shadow-xl"
                    : "bg-white dark:bg-gray-800"
                } transition-all duration-300 hover:shadow-xl`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-background text-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      tier.highlighted ? "text-background" : "text-foreground"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span
                      className={`text-4xl font-bold ${
                        tier.highlighted ? "text-background" : "text-foreground"
                      }`}
                    >
                      ${price}
                    </span>
                    <span
                      className={`${
                        tier.highlighted
                          ? "text-background/80"
                          : "text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      /month
                    </span>
                  </div>
                  <p
                    className={`${
                      tier.highlighted
                        ? "text-background/80"
                        : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>

                {/* Words Slider */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span
                      className={`text-sm ${
                        tier.highlighted
                          ? "text-background/80"
                          : "text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      Minutes Per Month
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        tier.highlighted ? "text-background" : "text-foreground"
                      }`}
                    >
                      {formatNumber(words)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={tier.baseWords}
                    max={tier.maxWords}
                    step={1000}
                    value={words}
                    onChange={(e) =>
                      setSelectedWords({
                        ...selectedWords,
                        [tier.name]: Number(e.target.value),
                      })
                    }
                    className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                      tier.highlighted
                        ? "bg-background/20"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  />
                  <div className="flex justify-between mt-1">
                    <span
                      className={`text-xs ${
                        tier.highlighted
                          ? "text-background/60"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {formatNumber(tier.baseWords)}
                    </span>
                    <span
                      className={`text-xs ${
                        tier.highlighted
                          ? "text-background/60"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {formatNumber(tier.maxWords)}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`flex items-center gap-3 ${
                        tier.highlighted
                          ? "text-background"
                          : "text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      <Check
                        className={`w-5 h-5 ${
                          tier.highlighted
                            ? "text-background"
                            : "text-green-500"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    tier.highlighted
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-300 flex items-center justify-center gap-2">
            <HelpCircle className="w-5 h-5" />
            Need help choosing? Contact our sales team
          </p>
        </div>
      </div>
    </section>
  );
}
