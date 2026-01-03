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
      <section className=" bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className={container}
        >
          <motion.div variants={fadeInUp} className=" overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left: Text Content */}
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Connect with us
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">
                  Want to chat? We'd love to hear from you! Get in touch with
                  our Customer Success Team to inquire about speaking events,
                  advertising rates, or just say hello.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 w-fit transition-colors">
                  <FaEnvelope className="text-lg" />
                  <span className="font-medium">Copy Email</span>
                </button>
              </div>

              {/* Right: Image */}
              <div className="relative h-[300px] md:h-auto min-h-[400px]">
                <Image
                  src="/assets/contact-hero.png"
                  alt="Contact Us"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Floating badge */}
          <div className="flex justify-end mt-4">
            <motion.div
              className="bg-white rounded-full px-5 py-2.5 shadow-lg flex items-center gap-2 border border-gray-100"
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
              <button className="text-sm font-medium text-gray-700">
                Dicta Hub AI
              </button>
            </motion.div>
          </div>
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
            {/* Los Angeles */}
            <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="relative h-[250px]">
                <Image
                  src="/assets/gallery-7.jpg"
                  alt="Los Angeles, California"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-white p-4 text-center">
                <h3 className="font-bold text-gray-900 mb-1">
                  Los Angeles, California
                </h3>
                <p className="text-xs text-gray-500">
                  1552 Olympic Boulevard
                  <br />
                  Santa Monica, CA 90404
                </p>
              </div>
            </div>

            {/* Tokyo */}
            <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="relative h-[250px]">
                <Image
                  src="/assets/gallery-7.jpg"
                  alt="Tokyo, Japan"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-white p-4 text-center">
                <h3 className="font-bold text-gray-900 mb-1">Tokyo, Japan</h3>
                <p className="text-xs text-gray-500">
                  8F 1-10-1 Ginza
                  <br />
                  Tokyo 104 World, Japan
                </p>
              </div>
            </div>

            {/* Moscow */}
            <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="relative h-[250px]">
                <Image
                  src="/assets/gallery-7.jpg"
                  alt="Moscow, Russia"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-white p-4 text-center">
                <h3 className="font-bold text-gray-900 mb-1">Moscow, Russia</h3>
                <p className="text-xs text-gray-500">
                  Kremlevskaya 435a, 010-NL
                  <br />
                  Moscow, Russia
                </p>
              </div>
            </div>

            {/* Mumbai */}
            <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="relative h-[250px]">
                <Image
                  src="/assets/gallery-7.jpg"
                  alt="Mumbai, India"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-white p-4 text-center">
                <h3 className="font-bold text-gray-900 mb-1">Mumbai, India</h3>
                <p className="text-xs text-gray-500">
                  Taj East 2/46-L, 4th Floor
                  <br />
                  Mumbai, India
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CONTACT FORM & INFO SECTION */}
      <section className="py-16 sm:py-20 bg-white">
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
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Will you be in Los Angeles or any other branches any time soon?
                Stop by the office! We'd love to meet.
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="grid grid-cols-2">
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
                <div>
                  <p className="text-green-500 text-sm font-bold mb-2 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <p className="text-gray-700 text-sm">
                    (480) 555-0103
                    <br />
                    (219) 555-0114
                  </p>
                </div>

                {/* Email */}
                <div>
                  <p className="text-green-500 text-sm font-bold mb-2 uppercase tracking-wide">
                    Email Address
                  </p>
                  <p className="text-gray-700 text-sm">
                    help.eduguard@gmail.com
                    <br />
                    contact.eduguard@gmail.com
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div variants={fadeInUp}>
              <div className="bg-gray-50 rounded-xl p-8">
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
