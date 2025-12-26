"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TeachPage() {
  const [expertise, setExpertise] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e7fbe9] via-[#f5fff7] to-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto py-20 px-8"
      >
        {/* Header */}
        <h1 className="text-5xl font-extrabold mb-8 text-center tracking-tight text-black">
          Teach at Dicta Hub
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-lg mx-auto text-lg">
          Join our community of expert instructors and shape the future of AI education in the world. Share your knowledge and inspire the next generation of innovators.
        </p>
        
        {/* Form */}
        <motion.form 
          id="instructor-form"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-2xl shadow-black/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input 
              label="Full Name" 
              type="text" 
              placeholder="Precious Okafor" 
              inputSize="md"
            />
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="precious@example.com" 
              inputSize="md"
            />
          </div>

          <Input 
            label="Phone Number" 
            type="tel" 
            placeholder="+234 (0) 000 000 0000" 
            inputSize="md"
          />

          <Select
            label="Expertise Area"
            options={[
              { value: "ai", label: "AI Engineering" },
              { value: "chatbot", label: "ChatBot Development" },
              { value: "data", label: "Data Science" },
              { value: "other", label: "Other" },
            ]}
            placeholder="Select your expertise"
            value={expertise}
            onChange={setExpertise}
          />

          <Input 
            label="Years of Experience" 
            type="number" 
            placeholder="5" 
            inputSize="md"
          />

          <div>
            <label className="mb-2 text-gray-800 font-semibold block">Tell us about your experience (Optional)</label>
            <textarea 
              placeholder="Share your background, teaching experience, and why you want to teach at Dicta Hub..."
              className="flex w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 font-medium focus:border-[#00c896] focus:ring-2 focus:ring-[#00c896]/20 outline-none transition-all hover:border-gray-400 resize-none min-h-32"
            />
          </div>

          {/* Modern toggle checkbox with links */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setAgreed(!agreed)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${agreed ? "bg-[#00c896]" : "bg-gray-300"}`}
            >
              <span
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${agreed ? "translate-x-6" : "translate-x-0"}`}
              />
            </button>
            <span className="text-sm text-gray-700">
              I agree to the{' '}
              <a 
                href="/terms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00c896] underline hover:text-[#009166] transition-colors"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a 
                href="/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00c896] underline hover:text-[#009166] transition-colors"
              >
                Privacy Policy
              </a>.
            </span>
          </div>

          <Button 
            type="submit"
            disabled={!agreed}
            className="w-full bg-gradient-to-r from-[#00c896] to-[#00a876] hover:from-[#00b087] hover:to-[#009166] text-white font-semibold py-3 rounded-full transition-all disabled:opacity-50"
          >
            Submit Application
          </Button>
        </motion.form>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00c896] mb-2">Support</div>
            <p className="text-gray-600 text-sm">Access to teaching resources and student support</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00c896] mb-2">Impact</div>
            <p className="text-gray-600 text-sm">Make a difference in students' careers and lives</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}