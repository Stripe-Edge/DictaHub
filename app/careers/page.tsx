"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function CareersPage() {
  return (
    <motion.div
      className="max-w-4xl mx-auto py-20 px-8"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.3 }}
      >
        Join Our Team
      </motion.h1>
      <motion.p
        className="text-gray-700 mb-8"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.25 }}
      >
        Help us shape the future of AI and Tech in World.
      </motion.p>
      <div className="space-y-4">
        {[{ title: "AI Instructor", loc: "Remote / Full-time" }, { title: "AI Engineer", loc: "Lagos / Hybrid" }].map((job, idx) => (
          <motion.div
            key={job.title}
            className="p-6 border rounded-lg flex justify-between items-center"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.28, delay: idx * 0.05 }}
          >
            <div>
              <h3 className="font-bold">{job.title}</h3>
              <p className="text-sm text-gray-500">{job.loc}</p>
            </div>
            <Button variant="primary" size="sm">Apply</Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
