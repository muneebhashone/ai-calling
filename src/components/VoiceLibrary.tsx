"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mic, Volume2, Languages, Sparkles } from "lucide-react";

const voices = [
  {
    name: "Rachel",
    type: "Professional",
    language: "English (US)",
    preview: "/voices/rachel.mp3",
  },
  {
    name: "Marcus",
    type: "Natural",
    language: "English (UK)",
    preview: "/voices/marcus.mp3",
  },
  {
    name: "Sofia",
    type: "Professional",
    language: "Spanish",
    preview: "/voices/sofia.mp3",
  },
];

export function VoiceLibrary() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 max-w-8xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent">
              Extensive Voice Library
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Choose from our growing collection of natural-sounding voices or
            clone your own voice in seconds
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {voices.map((voice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                    {voice.name}
                  </h3>
                  <p className="text-slate-500 text-sm">
                    {voice.type} • {voice.language}
                  </p>
                </div>
                <button className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:scale-110 transition-transform">
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
              <div className="w-full h-24 bg-slate-100 dark:bg-gray-700/50 rounded-xl"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center mx-auto mb-4">
              <Mic className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Voice Cloning
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Clone your voice with just a few minutes of audio
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center mx-auto mb-4">
              <Languages className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Multiple Languages
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Support for over 100+ languages and accents
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Natural Speech
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Advanced AI for human-like pronunciation
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
