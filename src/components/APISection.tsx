"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Lock, Cpu, ChevronLeft, ChevronRight } from "lucide-react";

const codeExamples = [
  {
    title: "Real-time Streaming",
    code: `// Example: Real-time Streaming API
const stream = await fetch('https://api.elevenlabs.io/v1/text-to-speech/stream', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'xi-api-key': 'your-api-key'
  },
  body: JSON.stringify({
    text: 'Hello, this is a streaming test.',
    voice_id: 'voice-id',
    model_id: 'model-id',
    stream: true
  })
});`,
  },
  {
    title: "Secure Integration",
    code: `// Example: Secure API Integration
const response = await fetch('https://api.elevenlabs.io/v1/voices', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer your-secure-token',
    'xi-api-key': 'your-api-key'
  }
});

const voices = await response.json();
console.log('Available voices:', voices);`,
  },
  {
    title: "Powerful Models",
    code: `// Example: Advanced Model Configuration
const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'xi-api-key': 'your-api-key'
  },
  body: JSON.stringify({
    text: 'Using advanced AI model settings.',
    voice_id: 'voice-id',
    model_id: 'eleven_multilingual_v2',
    voice_settings: {
      stability: 0.5,
      similarity_boost: 0.8,
      style: 0.7,
      use_speaker_boost: true
    }
  })
});`,
  },
];

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-time Streaming",
    description: "Stream audio responses with minimal latency",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Secure Integration",
    description: "Enterprise-grade security and authentication",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Powerful Models",
    description: "Access to state-of-the-art AI models",
  },
];

export function APISection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-8xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent">
                Powerful API
              </span>{" "}
              <br />
              <span className="text-slate-900 dark:text-white">
                Simple Integration
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 dark:text-slate-300 mb-8"
            >
              Integrate our advanced AI voice technology into your applications
              with just a few lines of code.
            </motion.p>
            <div className="relative">
              <div className="overflow-hidden">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-50 dark:bg-gray-800 p-6 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-400 flex items-center justify-center mb-4">
                    {React.cloneElement(features[currentIndex].icon, {
                      className: "w-6 h-6 text-foreground",
                    })}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {features[currentIndex].title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {features[currentIndex].description}
                  </p>
                </motion.div>
              </div>
              <div className="flex justify-center mt-6 gap-4">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-gray-400 text-foreground hover:scale-110 transition-transform"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-gray-400 text-foreground hover:scale-110 transition-transform"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 dark:from-green-500/10 dark:to-green-600/10 rounded-2xl blur-xl"></div>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-slate-900 dark:bg-gray-800 rounded-xl p-6 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-sm md:text-base overflow-x-auto">
                <code className="text-slate-300">
                  {codeExamples[currentIndex].code}
                </code>
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
