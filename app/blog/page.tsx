"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function BlogPage() {
  return (
    <motion.div
      className="max-w-7xl mx-auto py-20 px-8"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.3 }}
      >
        Latest Resources & News
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="border rounded-xl overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <div className="h-48 bg-gray-200" />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">The Future of AI in Nigeria</h3>
              <p className="text-gray-600 mb-4">
                Exploring the impact of artificial intelligence on local industries...
              </p>
              <Button variant="primary" size="sm">Read More</Button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
