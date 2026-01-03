"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiNetflix,
  SiYoutube,
  SiGoogle,
  SiLenovo,
  SiSlack,
  SiVerizon,
} from "react-icons/si";
import { FaUsers, FaCertificate, FaCheckCircle, FaStar } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const container = "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12";

export default function AboutPage() {
  const companyLogos = [
    { Icon: SiNetflix, color: "text-red-600", name: "Netflix" },
    { Icon: SiYoutube, color: "text-red-500", name: "YouTube" },
    { Icon: SiGoogle, color: "text-blue-500", name: "Google" },
    { Icon: SiLenovo, color: "text-red-600", name: "Lenovo" },
    { Icon: SiSlack, color: "text-purple-600", name: "Slack" },
    { Icon: SiVerizon, color: "text-red-600", name: "Verizon" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION - Green with title only */}
      <section className="bg-[#E9F8EE] py-20 sm:py-24 relative overflow-hidden">
        {/* Decorative dots - 4 columns × 7 rows */}
        <div className="absolute top-8 right-8 sm:top-12 sm:right-12 md:top-16 md:right-20">
          <div className="grid grid-cols-4 gap-2.5">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-green-400 rounded-full opacity-50"
              ></div>
            ))}
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className={container}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-[#519862]"
          >
            About Us
          </motion.h1>
        </motion.div>
      </section>

      {/* WHITE SECTION - Content */}
      <section className="py-16 sm:py-20 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className={container}
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <motion.div variants={fadeInUp}>
              <p className="text-[#ECECEC] font-bold text-5xl sm:text-6xl lg:text-7xl leading-none mb-6">
                2007–2021
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                We share knowledge
                <br />
                with the world
              </h2>

              <p className="text-gray-500 leading-relaxed max-w-md text-sm">
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Praesent fermentum quam mauris. Fusce tempor est at augue a
                aliquet. Donec non ipsum non risus egestas tincidunt at vitae
                nulla.
              </p>
            </motion.div>

            {/* Right: Image with white line overlay */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative rounded-xl overflow-hidden h-[280px] sm:h-[320px]">
                <Image
                  src="/assets/about-us-hero.jpg"
                  alt="About Dicta Hub"
                  width={600}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
                {/* White vertical line - thinner and at specific position */}
                <div className="absolute inset-y-0 left-[65%] w-2 bg-white"></div>
              </div>

              {/* Floating badge with bounce animation */}
              <motion.div
                className="absolute -bottom-3 -right-3 bg-white rounded-full px-5 py-2.5 shadow-lg flex items-center gap-2 cursor-pointer border border-gray-100"
                whileHover={{
                  y: [0, -6, 0],
                  transition: {
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  },
                }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">
                  Dicta Hub AI
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 sm:py-20 bg-white border-b-4 border-blue-400">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className={container}
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* LEFT COLUMN: Heading & Description */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                We Just keep growing
                <br />
                with 6.3K Companies
              </h3>
              <p className="text-gray-500 text-sm max-w-md">
                Nullam egestas tellus at enim ornare tristique.
                <br />
                Class aptent taciti sociosqu ad litora torquent
              </p>
            </motion.div>

            {/* RIGHT COLUMN: Logos */}
            <motion.div variants={fadeInUp}>
              {/* Company Logos with white background */}
              <div className="grid grid-cols-4 gap-4">
                {companyLogos.map((logo, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-lg p-4 flex justify-center items-center h-16 shadow-sm"
                  >
                    <logo.Icon
                      className={`text-2xl lg:text-3xl ${logo.color}`}
                    />
                  </div>
                ))}
                {/* Lexmark text-based */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 flex justify-center items-center h-16 shadow-sm">
                  <span className="text-lg lg:text-xl font-bold text-green-600">
                    Lexmark
                  </span>
                </div>
                {/* Microsoft text-based */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 flex justify-center items-center h-16 shadow-sm">
                  <span className="text-lg lg:text-xl font-bold text-blue-600">
                    Microsoft
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats BELOW everything - Full width */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
          >
            {[
              {
                Icon: FaUsers,
                value: "1.2k",
                label: "Students",
                color: "text-orange-500",
              },
              {
                Icon: FaCertificate,
                value: "25",
                label: "Certified Instructor",
                color: "text-purple-500",
              },
              {
                Icon: FaCheckCircle,
                value: "99.9%",
                label: "Success Rate",
                color: "text-green-500",
              },
              {
                Icon: FaStar,
                value: "57",
                label: "Trusted Companies",
                color: "text-yellow-500",
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.Icon className={`text-2xl ${stat.color}`} />
                  <span className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-[#84E59C]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 items-center"
        >
          {/* Image - Full width, no container padding */}
          <motion.div variants={fadeInUp} className="h-full">
            <div className="h-full min-h-[400px]">
              <Image
                src="/assets/corporate.png"
                alt="Our Mission"
                width={400}
                height={100}
                className="w-full h-[200px] object-contain object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Text - With container padding */}
          <motion.div
            variants={fadeInUp}
            className="px-8 sm:px-12 lg:px-16 py-16 sm:py-20"
          >
            <p className="text-orange-500 text-xs sm:text-sm font-bold mb-4 tracking-wider uppercase">
              OUR ONE BILLION MISSION
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our one billion mission
              <br />
              sounds bold, We agree.
            </h2>

            <p className="text-gray-900 leading-relaxed text-sm sm:text-base">
              "We cannot solve our problems with the same thinking we used when
              we created them."—Albert Einstein. Institutions are slow to
              change. Sometimes we where great ideas and innovative thinking go
              to die. DICTA HUB agility over dogma. Embrace and drive change. We
              need to wipe our slate clean and begin with best, radical
              thinking.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-20 sm:py-24 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className={container}
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Text */}
            <motion.div variants={fadeInUp}>
              <p className="text-orange-500 text-xs sm:text-sm font-bold mb-3 tracking-wider uppercase">
                OUR GALLERY
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                We&apos;ve been here
                <br />
                almost 3 years
              </h2>

              <p className="text-gray-500 leading-relaxed max-w-md text-sm">
                Explore moments from our learning community, including live
                sessions, workshops, collaborative projects, and hands-on
                training. Our gallery highlights the experiences that shape
                learning at DICTA HUB.
              </p>
            </motion.div>

            {/* Right: Gallery Grid - 7 images */}
            <motion.div variants={fadeInUp}>
              <div className="grid grid-cols-3 gap-3 auto-rows-[100px]">
                {/* Row 1: 3 images */}
                <div className="rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src="/assets/gallery-1.jpg"
                    alt="Gallery 1"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src="/assets/gallery-2.jpg"
                    alt="Gallery 2"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src="/assets/gallery-3.jpg"
                    alt="Gallery 3"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Row 2: 1 tall + 2 regular */}
                <div className="row-span-2 rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src="/assets/gallery-4.jpg"
                    alt="Gallery 4"
                    width={200}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src="/assets/gallery-5.jpg"
                    alt="Gallery 5"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Row 3: 2 images */}
                <div className="rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src="/assets/gallery-6.jpg"
                    alt="Gallery 6"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src="/assets/gallery-7.jpg"
                    alt="Gallery 7"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-24 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className={`${container} grid md:grid-cols-3 gap-8`}
        >
          {[
            {
              quote:
                "Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.",
              author: "Sundar Pichai",
              role: "Chief Chairman of Google",
            },
            {
              quote:
                "Eduguard responds to the needs of the business in an agile and global manner. It's truly the best solution for our employees and their careers.",
              author: "Satya Nadella",
              role: "CEO of Microsoft",
            },
            {
              quote:
                "In total, it was a big success, I would get emails about what a fantastic resource it was.",
              author: "Tad Sarandos",
              role: "Chief Executive Officer of Netflix",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-[#F5F5F7] rounded-2xl p-8 relative"
            >
              {/* Opening quote - top left */}
              <div className="text-orange-400 text-7xl leading-none font-serif absolute top-4 left-6">
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="text-gray-800 leading-relaxed pt-12 pb-8 text-sm">
                {t.quote}
              </p>

              {/* Closing quote - bottom right */}
              <div className="text-orange-400 text-7xl leading-none font-serif absolute bottom-16 right-6">
                &rdquo;
              </div>

              {/* Author info */}
              <div className="pt-4 mt-2 text-center">
                <p className="font-bold text-gray-900 text-sm mb-1">
                  {t.author}
                </p>
                <p className="text-xs text-blue-600">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
