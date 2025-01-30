import React from 'react';
import { ArrowRight } from 'lucide-react';




export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-foreground to-foreground relative overflow-hidden">
    
      <div className="container mx-auto px-6 max-w-8xl text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Customer Communication?
        </h2>
        <p className="text-blue-100 mb-8 text-lg">
          Join thousands of businesses already using VoiceAI to deliver exceptional customer experiences.
        </p>
       
          <button 
            className="bg-white text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
           
          >
            Get Started Now <ArrowRight className="w-5 h-5" />
          </button>
        
      </div>
    </section>
  );
} 