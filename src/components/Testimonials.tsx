"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    image: "/testimonials/sarah.jpg",
    content:
      "The voice quality is incredibly natural. It's revolutionized my content creation process.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Game Developer",
    image: "/testimonials/michael.jpg",
    content:
      "Perfect for adding dynamic voices to our games. The API is straightforward and reliable.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "E-learning Director",
    image: "/testimonials/emma.jpg",
    content:
      "We use it for all our educational content. The multilingual support is outstanding.",
    rating: 5,
  },
  {
    name: "Alex Rivera",
    role: "Podcast Host",
    image: "/testimonials/alex.jpg",
    content:
      "The voice cloning feature is amazing. It's helped me scale my podcast production.",
    rating: 5,
  },
];

const SLIDE_INTERVAL = 3000; // 3 seconds per slide

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (!isPaused) {
      slideTimerRef.current = setInterval(nextSlide, SLIDE_INTERVAL);
    }
    return () => {
      if (slideTimerRef.current) {
        clearInterval(slideTimerRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-8xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent">
              What Our Users Say
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Join thousands of satisfied users who trust our AI voice technology
          </motion.p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl">
            <div className="relative">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-slate-50 dark:bg-gray-800 p-8 md:p-12 rounded-2xl"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-blue-100 dark:bg-green-900/30 flex-shrink-0">
                    {/* Image placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-green-500 dark:to-green-700"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-current text-yellow-400"
                          />
                        )
                      )}
                    </div>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-6 italic">
                      &quot;{testimonials[currentIndex].content}&quot;
                    </p>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-400 text-foreground hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-foreground w-6"
                      : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-400 text-foreground hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
