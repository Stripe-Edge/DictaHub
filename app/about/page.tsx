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

// Reusable container (VERY important)
const container = "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12";

export default function AboutPage() {
  const companyLogos = [
    { Icon: SiNetflix, color: "text-red-600" },
    { Icon: SiYoutube, color: "text-red-500" },
    { Icon: SiGoogle, color: "text-blue-500" },
    { Icon: SiLenovo, color: "text-red-600" },
    { Icon: SiSlack, color: "text-purple-600" },
    { Icon: SiVerizon, color: "text-red-600" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-[#E9F8EE] py-24 relative overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className={container}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-[#519862] mb-16"
          >
            About Us
          </motion.h1>
        </motion.div>
      </section>
      <section className="py-24 relative overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className={container}
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <p className="text-gray-200 font-semibold text-6xl leading-none mb-4">
                2007–2021
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                We share knowledge
                <br />
                with the world
              </h2>

              <p className="text-gray-600 leading-relaxed max-w-lg">
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Praesent fermentum ipsum mauris. Fusce tempor est at aliquet.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid">
              <Image
                src="/assets/about-us-hero.jpg"
                alt="about hero"
                width={500}
                height={100}
                className="rounded-[28px] object-contain w-[400px] h-auto"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-white border-b-4 border-blue-400">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className={container}
        >
          <section className="grid grid-cols-2">
            <motion.div variants={fadeInUp} className="mb-12 ">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                We just keep growing
                <br />
                with 6.3K companies
              </h3>

              <p className="text-gray-500 text-sm max-w-md">
                Nullam egestas tellus at enim ornare tristique. Class aptent
                taciti sociosqu.
              </p>
            </motion.div>

            <div className=" grid  grid-cols-2 md:grid-cols-4 gap-10 mb-14">
              {[
                ["1.2k", "Students"],
                ["25", "Certified Instructors"],
                ["99.9%", "Success Rate"],
                ["57", "Trusted Companies"],
              ].map(([value, label]) => (
                <motion.div
                  key={label}
                  variants={fadeInUp}
                  className="text-left"
                >
                  <p className="text-2xl font-bold text-gray-900">{value}</p>
                  <p className="text-gray-500 text-sm">{label}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.div
            variants={fadeInUp}
            className=" md:ml-20 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center"
          >
            {companyLogos.map((logo, i) => (
              <logo.Icon key={i} className={`text-3xl ${logo.color}`} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* MISSION */}
      <section className="py-24 bg-[#84E59C]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className={`${container} grid md:grid-cols-2 gap-16 items-center`}
        >
          <motion.div
            variants={fadeInUp}
            className="rounded-xl aspect-video ">
              <Image
                src="/assets/corporate.png"
                alt="about hero"
                width={200}
                height={400}
                className="rounded-[28px] object-cover object-top w-auto h-full"
              />

              </motion.div>

          <motion.div variants={fadeInUp}>
            <p className="text-green-800 text-sm font-semibold mb-3">
              OUR ONE BILLION MISSION
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our one billion mission
              <br />
              sounds bold. We agree.
            </h2>

            <p className="text-gray-800 leading-relaxed max-w-lg">
              Institutions are slow to change. DICTA HUB embraces agility over
              dogma. We believe in bold ideas, radical thinking, and continuous
              innovation.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className={container}
        >
          <motion.div variants={fadeInUp} className="mb-14">
            <p className="text-orange-500 text-sm font-semibold mb-2">
              OUR GALLERY
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              We&apos;ve been here
              <br />
              almost 3 years
            </h2>

            <p className="text-gray-600 max-w-2xl">
              Explore moments from our learning community, workshops, and
              collaborative projects.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-gradient-to-br from-gray-300 to-gray-400"
              />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className={`${container} grid md:grid-cols-3 gap-10`}
        >
          {[
            {
              quote:
                "The platform integrates seamlessly with our workforce learning strategy.",
              author: "Senior Product Lead",
              role: "Global Tech Company",
            },
            {
              quote:
                "An agile solution that adapts perfectly to modern learning needs.",
              author: "Engineering Manager",
              role: "Enterprise Software Firm",
            },
            {
              quote:
                "A reliable system that delivers consistent educational value.",
              author: "Head of Learning",
              role: "International Organization",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="border-2 border-gray-200 rounded-xl p-8"
            >
              <p className="text-gray-700 leading-relaxed mb-6">“{t.quote}”</p>

              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{t.author}</p>
                <p className="text-sm text-blue-600">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
