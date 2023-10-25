"use client";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { AnimatePresence, motion } from "framer-motion";
import { staggerContainer } from "@/libs/framer-motion/prebuild.animation";
import Lenis from "@studio-freight/lenis";

const PageWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      wheelMultiplier:1.2
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

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
