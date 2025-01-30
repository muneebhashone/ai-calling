import React from "react";


const stats = [
  { number: "99.9%", label: "Uptime" },
  { number: "100+", label: "Languages Supported" },
  { number: "1M+", label: "Calls Processed" },
];

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-foreground to-foreground text-white relative overflow-hidden">
     
      <div className="container mx-auto px-6 max-w-8xl relative z-10">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm"
            >
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
