"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#f4fff7] via-white to-[#f4fff7] mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4">
              Dicta Hub
            </h3>
            <p className="text-xs sm:text-sm text-black leading-relaxed max-w-xs">
              A premium AI & technology academy delivering UK-style education
              for World's next generation of innovators.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-black mb-3 md:mb-4">
              Explore
            </h4>
            <ul className="space-y-2 md:space-y-3 text-xs sm:text-sm text-black">
              <li><Link href="/programmes" className="text-black underline-animate">Programs</Link></li>
              <li><Link href="/admissions" className="text-black underline-animate">Admissions</Link></li>
              <li><Link href="/lms" className="text-black underline-animate">Our LMS</Link></li>
              <li><Link href="/career" className="text-black underline-animate">Careers</Link></li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-black mb-3 md:mb-4">
              Resources
            </h4>
            <ul className="space-y-2 md:space-y-3 text-xs sm:text-sm text-black">
              <li><Link href="/about" className="text-black underline-animate">About Us</Link></li>
              <li><Link href="/faq" className="text-black underline-animate">FAQs</Link></li>
              <li><Link href="/contact" className="text-black underline-animate">Contact</Link></li>
              <li><Link href="/sitemap" className="text-black underline-animate">Sitemap</Link></li>
              <li><Link href="/partners" className="text-black underline-animate">Partners</Link></li>
            </ul>
          </motion.div>

          {/* Course Duration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-black mb-3 md:mb-4">
              Course Duration
            </h4>
            <ul className="space-y-2 md:space-y-3 text-xs sm:text-sm text-black">
              <li><Link href="#" className="text-black underline-animate">3-Month Programs</Link></li>
              <li><Link href="#" className="text-black underline-animate">6-Month Bootcamps</Link></li>
              <li><Link href="#" className="text-black underline-animate">12-Month Diplomas</Link></li>
              <li><Link href="#" className="text-black underline-animate">Self-Paced Learning</Link></li>
            </ul>
          </motion.div>

          {/* Fee Structure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-black mb-3 md:mb-4">
              Academics & Fees
            </h4>
            <ul className="space-y-2 md:space-y-3 text-xs sm:text-sm text-black">
              <li><Link href="/tuition" className="text-black underline-animate">Pricing Plans</Link></li>
              <li><Link href="/scholarships" className="text-black underline-animate">Scholarships</Link></li>
              <li><Link href="/payment_options" className="text-black underline-animate">Payment Options</Link></li>
              <li><Link href="academy_calendar" className="text-black underline-animate">Academy Calendar</Link></li>
            </ul>
          </motion.div>

          {/* Newsletter / CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-black mb-3 md:mb-4">
              Stay Updated
            </h4>
            <p className="text-xs sm:text-sm text-black mb-4">
              Get updates on new programmes, events, and opportunities.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-full text-xs"
                inputSize="sm"
              />
              <Button size="sm" className="whitespace-nowrap text-xs">
                Join
              </Button>
            </div>
          </motion.div>
          </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6 md:mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-black">
          <p>
            © {new Date().getFullYear()} Dicta Hub. All rights reserved.
          </p>

          <div className="flex gap-4 sm:gap-6">
            <Link href="/privacy" className="text-black underline-animate">Privacy Policy</Link>
            <Link href="/terms" className="text-black underline-animate">Terms</Link>
            <Link href="/cookies" className="text-black underline-animate">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
