"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function SettingsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <motion.h1
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.3 }}
      >
        Settings
      </motion.h1>

      <motion.div
        className="bg-white/60 backdrop-blur-xl p-8 rounded-[24px] border border-white/70 max-w-2xl shadow-xl"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Display Name</label>
            <Input type="text" defaultValue="Dicta Hub" inputSize="md" />
          </div>

          <div>
            <label className="block mb-2 font-medium">Notification Settings</label>
            <div className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="accent-mint" />
              <span>Email notifications</span>
            </div>
          </div>

          <Button variant="black">Save Changes</Button>
        </form>
      </motion.div>
    </motion.div>
  );
}
