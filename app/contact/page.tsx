"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION - Green with title */}
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
            Contact Us
          </motion.h1>
        </motion.div>
      </section>

      {/* CONNECT WITH US SECTION */}
      <section className="bg-white relative overflow-hidden pt-4 md:pt-2 pb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className={container}
        >
          {/* Main Grid */}
          <motion.div variants={fadeInUp}>
            <div className="grid md:grid-cols-2 gap-y-12 md:gap-y-0 min-h-[520px]">
              {/* Image (comes first on mobile) */}
              <div className="order-1 md:order-2 relative h-[380px] md:h-auto">
                <Image
                  src="/assets/contact-hero.png"
                  alt="Contact Us"
                  fill
                  priority
                  className="
              object-contain
              md:object-cover
              md:object-top
            "
                />
              </div>

              {/* Text */}
              <div className="order-2 md:order-1 flex items-center px-8 sm:px-12 lg:px-16">
                <div className="max-w-md">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Connect with us
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Want to chat? We'd love to hear from you! Get in touch with
                    our Customer Success Team to inquire about speaking events,
                    advertising rates, or just say hello.
                  </p>

                  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                    <FaEnvelope className="text-lg" />
                    <span className="font-medium">Copy Email</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Button */}
          <motion.div
            className="absolute bottom-6 right-6 bg-white rounded-full px-5 py-2.5 shadow-lg flex items-center gap-2 border border-gray-100 z-10"
            whileHover={{
              y: [0, -6, 0],
              transition: {
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="text-sm font-medium text-gray-700">
              Dicta Hub AI
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* BRANCHES SECTION */}
      <section className="py-16 sm:py-20 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className={container}
        >
          {/* Heading */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our branches all over the world.
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Praesent sed quam eu eros faucibus cursus. Quisque mauris urna,
              imperdiet id leo quis, luctus auctor nisl.
            </p>
          </motion.div>

          {/* Branch Cards */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {/* Los Angeles - Main Branch */}
            <div className="relative  overflow-hidden shadow-lg group cursor-pointer h-[380px]">
              <Image
                src="/assets/gallery-7.jpg"
                alt="Los Angeles, California"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* White overlay container at bottom - INSIDE image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white p-5 text-center shadow-xl">
                <p className="text-orange-500 text-xs font-bold mb-2 uppercase tracking-wider">
                  Main Branch
                </p>
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  Los Angeles, California
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  1702 Olympic Boulevard
                  <br />
                  Santa Monica, CA 90404
                </p>
              </div>
            </div>

            {/* Tokyo */}
            <div className="relative  overflow-hidden shadow-lg group cursor-pointer h-[380px]">
              <Image
                src="/assets/gallery-7.jpg"
                alt="Tokyo, Japan"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* White overlay container at bottom - INSIDE image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white  p-5 text-center shadow-xl">
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  Tokyo, Japan
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  901 N Pitt Str., Suite 170
                  <br />
                  Tokyo, VA 22314, Japan
                </p>
              </div>
            </div>

            {/* Moscow */}
            <div className="relative  overflow-hidden shadow-lg group cursor-pointer h-[380px]">
              <Image
                src="/assets/gallery-7.jpg"
                alt="Moscow, Russia"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* White overlay container at bottom - INSIDE image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white  p-5 text-center shadow-xl">
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  Moscow, Russia
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Anjeliersstraat 470H, 1015 NL
                  <br />
                  Moscow, Russia
                </p>
              </div>
            </div>

            {/* Mumbai */}
            <div className="relative  overflow-hidden shadow-lg group cursor-pointer h-[380px]">
              <Image
                src="/assets/gallery-7.jpg"
                alt="Mumbai, India"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* White overlay container at bottom - INSIDE image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white  p-5 text-center shadow-xl">
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  Mumbai, India
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  36 East 20th St, 6th Floor
                  <br />
                  Mumbai, India
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CONTACT FORM & INFO SECTION */}
      <section className="py-16 sm:py-20 bg-gray-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className={container}
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Info */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl sm:text-3xl  font-bold text-gray-900 mb-6">
                Will you be in Los Angeles or any other branches any time soon?
                Stop by the office! We'd love to meet.
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="grid grid-cols-2 py-4 border-b-[1px] border-gray-200">
                  <div>
                    <p className="text-green-500 text-sm font-bold mb-2 uppercase tracking-wide">
                      Address
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm">
                      1552 Olympic Boulevard
                      <br />
                      Santa Monica, CA 90404
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className=" grid grid-cols-2 border-gray-200 py-4 border-b-[1px]">
                  <div>
                    <p className="text-green-500 text-sm font-bold mb-2 uppercase tracking-wide">
                      Phone Number
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm">
                      (480) 555-0103
                      <br />
                      (219) 555-0114
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-green-500 text-sm font-bold mb-2 uppercase tracking-wide">
                      Email Address
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm">
                      help.eduguard@gmail.com
                      <br />
                      contact.eduguard@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div variants={fadeInUp}>
              <div className="bg-white p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Get In touch
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Feel free contact with us, we love to make new partners &
                  friends.
                </p>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="First name..."
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Last name..."
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Message Subject"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Message Subject"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* MAP SECTION */}
      <section className="pb-0">
        <div className="h-[400px] bg-gray-200 relative">
          <iframe
            title="Dicta Hub Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.4747796266467!2d-118.49533708478704!3d34.04090962528594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d74d5ea79b%3A0xf3a7a5d9c9a0b8e!2sSanta%20Monica%2C%20CA!5e0!3m2!1sen!2sus!4v1647890123456!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale"
          />
        </div>
      </section>
    </div>
  );
}
