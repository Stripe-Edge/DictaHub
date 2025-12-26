"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AdmissionsPage() {
  const [programme, setProgramme] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e7fbe9] via-[#f5fff7] to-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto py-20 px-8"
      >
      <h1 className="text-5xl font-extrabold mb-8 text-center tracking-tight text-black">Start Your Journey</h1>
      <p className="text-gray-600 text-center mb-12 max-w-lg mx-auto text-lg">
        Join the next generation of AI leaders. Fill out the form below to begin your application process.
      </p>
      <motion.form 
        id="form"
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
          label="Interested Programme"
          options={[
            { value: "ai", label: "AI Engineering" },
            { value: "chatbot", label: "ChatBot Development" },
            { value: "data", label: "Data Science" },
            { value: "robotics", label: "Robotics (Coming Soon)" },
          ]}
          placeholder="Select a programme"
          value={programme}
          onChange={setProgramme}
        />

        <div>
          <label className="mb-2 text-gray-800 font-semibold block">Tell us about your goals (Optional)</label>
          <textarea 
            placeholder="Share your background, goals, and why you want to join Dicta Hub..."
            className="flex w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 font-medium focus:border-[#00c896] focus:ring-2 focus:ring-[#00c896]/20 outline-none transition-all hover:border-gray-400 resize-none min-h-32"
          />
        </div>

        <Button className="w-full bg-gradient-to-r from-[#00c896] to-[#00a876] hover:from-[#00b087] hover:to-[#009166] text-white font-semibold py-3 rounded-full transition-all">
          Submit Application
        </Button>
      </motion.form>
      </motion.div>
    </div>
  );
}
