"use client";

import HeroSection from "@/components/Sections/HeroSection";
import WhatWeTeach from "@/components/Sections/WhatWeTeach";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
        </motion.div>

        {/* What We Teach Section */}
        <WhatWeTeach />
      </main>
    </div>
  );
}
