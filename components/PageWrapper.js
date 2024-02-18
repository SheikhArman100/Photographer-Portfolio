"use client";
import { staggerContainer } from "@/libs/framer-motion/prebuild.animation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Loader from "./Loader";

const PageWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  

  return (
    <AnimatePresence mode="wait">
      <div>
        {isLoading ? (
          <Loader setIsLoading={setIsLoading} />
        ) : (
          <motion.div
            variants={staggerContainer(0.2, 0.5)}
            initial="hidden"
            animate="show"
           
            className="w-full min-h-screen "
          >
            {children}
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default PageWrapper;
