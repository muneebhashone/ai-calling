import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Person {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface AnimatedTooltipProps {
  items: Person[];
}

export function AnimatedTooltip({ items }: AnimatedTooltipProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              width={100}
              height={100}
              src={item.image}
              alt={item.name}
              className="object-cover rounded-full h-24 w-24 border-2 border-white group-hover:border-blue-500 transition-colors"
            />
          </motion.div>
          {hoveredIndex === idx && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-black p-2 rounded-lg shadow-xl min-w-max z-50"
            >
              <div className="flex flex-col items-center gap-1">
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-xs text-blue-500">{item.designation}</p>
              </div>
              <div className="absolute inset-x-10 h-[20px] -bottom-4 bg-gradient-to-t from-transparent to-white/90 backdrop-blur-sm clip-triangle" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
