"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, BookOpen, Users, Settings, Lock, HelpCircle, Briefcase, FileText } from "lucide-react";

const siteStructure = {
  root: { label: "Dicta Hub", icon: Home, href: "/" },
  main: [
    { label: "About Us", icon: Users, href: "/about" },
    { label: "Teach at Dicta Hub", icon: BookOpen, href: "/teach" },
    { label: "Contact", icon: Briefcase, href: "/contact" },
  ],
  programs: [
    { label: "All Programs", href: "/programmes", sub: true },
    { label: "AI Engineering", href: "/programmes#ai" },
    { label: "ChatBot Development", href: "/programmes#chatbot" },
    { label: "Data Science", href: "/programmes#data" },
  ],
  academics: [
    { label: "Admissions", href: "/admissions" },
    { label: "Our LMS", href: "/lms" },
    { label: "Career", href: "/career" },
  ],
  courseDuration: [
    { label: "3-Month Programs", href: "#" },
    { label: "6-Month Bootcamps", href: "#" },
    { label: "12-Month Diplomas", href: "#" },
    { label: "Self-Paced Learning", href: "#" },
  ],
  AcademicsFees: [
    { label: "Pricing Plans", href: "/tuition" },
    { label: "Scholarships", href: "/scholarship" },
    { label: "Payment Options", href: "payment" },
    { label: "Academy Calendar", href: "/portal/calendar" },
  ],
  portal: [
    { label: "Dashboard", href: "/portal" },
    { label: "Courses", href: "/portal/courses" },
    { label: "Assignments", href: "/portal/assignments" },
    { label: "Schedule", href: "/portal/schedule" },
    { label: "Community", href: "/portal/community" },
    { label: "Course Duration", href: "/portal/course-duration" },
    { label: "Settings", href: "/portal/settings" },
  ],
  resources: [
    { label: "FAQs", icon: HelpCircle, href: "/faq" },
    { label: "Blog", icon: FileText, href: "/blog" },
    { label: "Partners", href: "/partners" },
    { label: "Support", href: "/support" },
  ],
  legal: [
    { label: "Privacy Policy", icon: Lock, href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
};

const NodeCard = ({ label, href, isRoot = false }: { label: string; href: string; isRoot?: boolean }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`relative group cursor-pointer ${isRoot ? "mb-12" : ""}`}
  >
    <Link href={href}>
      <div
        className={`
          px-4 py-3 font-semibold transition-all duration-300
          ${
            isRoot
              ? "bg-gradient-to-r from-[#00c896] to-[#00a876] text-white text-lg shadow-lg rounded-full"
              : "bg-white text-black border-2 border-gray-200 hover:border-[#00c896] hover:shadow-md text-sm rounded-xl"
          }
        `}
      >
        {label}
      </div>
    </Link>
    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-[#00c896]/10 to-transparent" />
  </motion.div>
);

const SectionGroup = ({
  title,
  icon: Icon,
  items,
  delay,
}: {
  title: string;
  icon?: any;
  items: any[];
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="relative"
  >
    {/* Connection line from root */}
    <div className="absolute -top-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-[#00c896] to-transparent hidden md:block" />
    
    {/* Section container */}
    <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:border-[#00c896]/30 hover:shadow-lg transition-all">
      {/* Section title */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-gray-100">
        {Icon && <Icon size={20} className="text-[#00c896]" />}
        <h3 className="text-lg font-bold text-black">{title}</h3>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-[#00c896]/20 to-transparent" />
      </div>

      {/* Links grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {items.map((item, idx) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + idx * 0.05 }}
          >
            <Link
              href={item.href}
              className={`
                block px-3 py-2 rounded-lg text-sm font-medium transition-all
                text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#00c896] hover:to-[#00a876]
                ${item.sub ? "font-bold text-gray-900 bg-gray-50" : ""}
              `}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e7fbe9] via-[#f5fff7] to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold mb-4 text-black tracking-tight">
            Site Structure
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Navigate through our organized site map with visual connections
          </p>
        </motion.div>

        {/* Root Node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-16"
        >
          <NodeCard label="Dicta Hub" href="/" isRoot />
        </motion.div>

        {/* Main Navigation Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Column 1 */}
          <div className="space-y-8">
            <SectionGroup
              title="Main"
              icon={Home}
              items={siteStructure.main}
              delay={0.1}
            />
            <SectionGroup
              title="Programs"
              icon={BookOpen}
              items={siteStructure.programs}
              delay={0.2}
            />
            <SectionGroup
              title="Course Duration"
              icon={FileText}
              items={siteStructure.courseDuration}
              delay={0.3}
            />
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            <SectionGroup
              title="Academics"
              icon={BookOpen}
              items={siteStructure.academics}
              delay={0.15}
            />
            <SectionGroup
              title="Academics & Fees"
              icon={Briefcase}
              items={siteStructure.AcademicsFees}
              delay={0.25}
            />
            <SectionGroup
              title="Resources"
              icon={HelpCircle}
              items={siteStructure.resources}
              delay={0.4}
            />
          </div>

          {/* Column 3 */}
          <div className="space-y-8">
            <SectionGroup
              title="Student Portal"
              icon={Users}
              items={siteStructure.portal}
              delay={0.2}
            />
            <SectionGroup
              title="Legal"
              icon={Lock}
              items={siteStructure.legal}
              delay={0.35}
            />
          </div>
        </div>

        {/* Connection visualization hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm mb-12"
        >
          <p>All sections are connected to the main Dicta Hub site</p>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">
            Need help finding something?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#00c896] to-[#00a876] hover:from-[#00b087] hover:to-[#009166] text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
