import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Zap, BarChart3, Lightbulb } from "lucide-react";

export default function WhatWeTeach() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[3rem] md:text-[3.5rem] font-extrabold leading-tight text-black mb-8">
            Learn AI, <br /> Data Science, & Machine Learning
          </h2>

          <div className="flex items-center gap-4 mt-10">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/programs">
                <Button>
                  Get Started
                </Button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/admissions#form">
                <Button variant="outline">
                  Enroll Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL - SOLAR SYSTEM */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center items-center h-96"
        >
          {/* Background Glow */}
          <div className="absolute w-full h-full bg-gradient-to-br from-[#00c896]/10 via-transparent to-purple-400/10 rounded-full blur-3xl" />

          {/* Solar System Container */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Sun - Center */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-[#00c896] to-[#009166] rounded-full shadow-lg shadow-[#00c896]/50"
            >
              <div className="absolute inset-0 bg-[#00c896] rounded-full blur-md opacity-50" />
            </motion.div>

            {/* Orbit 1 - Data Science (8s) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg flex items-center justify-center"
              >
                <BarChart3 size={24} className="text-white" />
              </motion.div>
            </motion.div>

            {/* Orbit 2 - AI Engineering (12s reverse) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg flex items-center justify-center"
              >
                <Zap size={24} className="text-white" />
              </motion.div>
            </motion.div>

            {/* Orbit 3 - Machine Learning (10s) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg flex items-center justify-center"
              >
                <Lightbulb size={24} className="text-white" />
              </motion.div>
            </motion.div>

            {/* Decorative Orbits */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <circle cx="200" cy="200" r="60" fill="none" stroke="url(#gradientGreen)" strokeWidth="1" opacity="0.5" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="url(#gradientPurple)" strokeWidth="1" opacity="0.4" />
              <circle cx="200" cy="200" r="180" fill="none" stroke="url(#gradientBlue)" strokeWidth="1" opacity="0.3" />
              <defs>
                <linearGradient id="gradientGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#00c896", stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: "#00c896", stopOpacity: 0 }} />
                </linearGradient>
                <linearGradient id="gradientPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#a855f7", stopOpacity: 0.6 }} />
                  <stop offset="100%" style={{ stopColor: "#a855f7", stopOpacity: 0 }} />
                </linearGradient>
                <linearGradient id="gradientBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0.4 }} />
                  <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 0 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
