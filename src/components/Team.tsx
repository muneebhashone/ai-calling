import React from 'react';
import { AnimatedTooltip } from './ui/animated-tooltip';

const people = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "CTO at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "Product Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Emily Davis",
    designation: "Customer Success",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];

export function Team() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 max-w-8xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Meet Our Leadership Team
        </h2>
        <AnimatedTooltip items={people} />
      </div>
    </section>
  );
} 