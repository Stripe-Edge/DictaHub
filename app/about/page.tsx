"use client";

import { motion } from "framer-motion";
import { 
  SiNetflix, 
  SiYoutube, 
  SiGoogle, 
  SiLenovo, 
  SiSlack, 
  SiVerizon,
  // SiMicrosoft 
} from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutPage() {
  const companyLogos = [
    { name: "Netflix", Icon: SiNetflix, color: "text-red-600" },
    { name: "YouTube", Icon: SiYoutube, color: "text-red-500" },
    { name: "Google", Icon: SiGoogle, color: "text-blue-500" },
    { name: "Lenovo", Icon: SiLenovo, color: "text-red-600" },
    { name: "Slack", Icon: SiSlack, color: "text-purple-600" },
    { name: "Verizon", Icon: SiVerizon, color: "text-red-600" },
    // { name: "Microsoft", Icon: SiMicrosoft, color: "text-blue-600" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
          <div className="grid grid-cols-4 gap-2 p-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-green-600 mb-8"
          >
            About Us
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <motion.div variants={fadeInUp} transition={{ duration: 0.5, delay: 0.2 }}>
              <p className="text-gray-400 text-sm mb-2">2007-2021</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                We share knowledge<br />with the world
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum ipsum mauris. Fusce tempor est atque a aliquet. Donec non ipsum non metus egestas tincidunt at vitae nulla.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gray-200 rounded-lg aspect-[3/4] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
              </div>
              <div className="bg-gray-200 rounded-lg aspect-[3/4] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b-4 border-blue-400">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              We Just keep growing<br />with 6.3K Companies
            </h3>
            <p className="text-gray-500 text-sm">
              Nullam egestas tellus at enim ornare tristique.<br />
              Class aptent taciti sociosqu ad litora torquent
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <motion.div variants={fadeInUp} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-orange-500 text-2xl">📚</span>
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">1.2k</span>
              </div>
              <p className="text-gray-500 text-sm">Students</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-purple-500 text-2xl">📜</span>
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">25</span>
              </div>
              <p className="text-gray-500 text-sm">Certified Instructor</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-green-500 text-2xl">✓</span>
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">99.9%</span>
              </div>
              <p className="text-gray-500 text-sm">Success Rate</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-yellow-500 text-2xl">⭐</span>
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">57</span>
              </div>
              <p className="text-gray-500 text-sm">Trusted Companies</p>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="grid grid-cols-4 md:grid-cols-7 gap-6 sm:gap-8 items-center justify-items-center">
            {companyLogos.map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <logo.Icon className={`text-2xl sm:text-3xl ${logo.color}`} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-400 to-green-500">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp} className="bg-gray-200 rounded-lg aspect-video overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <p className="text-green-700 text-sm font-semibold mb-2">OUR ONE BILLION MISSION</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our one billion mission<br />sounds bold, We agree.
            </h2>
            <p className="text-gray-800 leading-relaxed">
              "We cannot solve our problems with the same thinking we used when we created them."—Albert Einstein. Institutions are slow to change. Sometimes we where great ideas and innovative thinking go to die. DICTA HUB agility over dogma. Embrace and drive change. We need to wipe our slate clean and begin with best, radical thinking.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b-4 border-blue-400">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-orange-500 text-sm font-semibold mb-2">OUR GALLERY</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              We&apos;ve been here<br />almost 3 years
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Explore moments from our learning community, including live sessions, workshops, collaborative projects, and hands-on training. Our gallery highlights the experiences that shape learning at DICTA HUB.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-gray-200 rounded-lg overflow-hidden aspect-square"
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8"
        >
          {[
            {
              quote: "Eduguard treats fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to our worldwide workforce.",
              author: "Sundar Pichai",
              position: "Chief Chairman of Google"
            },
            {
              quote: "Eduguard responds to the needs of the business in an agile and global manner. It's truly the best solution for our employees and their careers.",
              author: "Satya Nadella",
              position: "CEO of Microsoft"
            },
            {
              quote: "In total, it was a big success. I would get emails about what a fantastic resource it was.",
              author: "Tad Sarandos",
              position: "Chief Executive Officer of Netflix"
            }
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 sm:p-8"
            >
              <div className="text-orange-400 text-4xl mb-4">&quot;</div>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">{testimonial.quote}</p>
              <div className="text-orange-400 text-4xl text-right mb-4">&quot;</div>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-blue-600">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    
    </div>
  );
}