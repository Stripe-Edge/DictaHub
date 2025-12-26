import React from "react";
import { cn } from "@/lib/utils";
import { motion, Variants, easeOut, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

const cardVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  hover: { scale: 1.03, transition: { duration: 0.3, ease: easeOut } },
};

export const Card: React.FC<CardProps> = ({
  className,
  hoverEffect = true,
  children,
  ...props
}) => {
  return (
    <motion.div
      className={cn("bg-white rounded-xl shadow-md p-6 transition-all", className)}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover={hoverEffect ? "hover" : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
};
