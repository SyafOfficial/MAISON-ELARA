"use client";
import { motion } from "motion/react";
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="page-transition"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      {children}
    </motion.div>
  );
}
