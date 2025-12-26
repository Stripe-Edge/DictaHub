"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[60vh]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.25 }}
      >
        404 - Page Not Found
      </motion.h2>
      <motion.p
        className="mt-4"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.25 }}
      >
        Sorry, we couldn&apos;t find what you were looking for.
      </motion.p>
      <Link href="/" className="mt-8">
        <Button variant="primary">Return Home</Button>
      </Link>
    </motion.div>
  );
}
