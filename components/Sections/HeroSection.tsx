"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full rounded-[32px] overflow-hidden bg-gradient-to-r from-[#e7fbe9] via-[#f5fff7] to-white"
    >
      {/* Fade-to-white overlay at top to blend with header */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.2rem] font-extrabold leading-tight md:leading-[1.1] text-black mb-6 md:mb-8">
            Building the world’s next generation of AI innovators
          </h1>

          <p className="text-gray-700 max-w-md md:max-w-lg mb-8 md:mb-10 text-base sm:text-lg">
            Build minds for the AI future. Learn, innovate, and create the AI solutions that shape tomorrow.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/about">
              <Button className="py-3 px-6 text-base">Learn More</Button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative w-full flex justify-center lg:justify-end"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-[#b7f5c6] blur-[120px] opacity-50 rounded-full" />

          {/* Glass Panel */}
          <div className="relative w-full max-w-lg md:max-w-xl bg-white/60 backdrop-blur-xl border border-white/70 rounded-[28px] overflow-hidden shadow-2xl">
            <Image
              src="/assets/hero-visual.png"
              alt="Classroom"
              width={700}
              height={500}
              className="rounded-[28px] object-cover w-full h-auto"
              priority
            />
          </div>

          {/* Floating AI Button */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-4 md:right-6 bottom-4 md:bottom-6"
          >
            <Link href="/ai-agent">
              <Button
                variant="secondary"
                className="bg-white shadow-md flex items-center gap-2 py-2 px-4 h-auto text-sm"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Live Support
                <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}