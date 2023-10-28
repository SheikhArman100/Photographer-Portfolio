"use client";
import { revealParagraphAnimation, revealParagraphContainer } from "@/libs/framer-motion/prebuild.animation";
import { motion } from "framer-motion";

const RevealParagraph = ({ phrases ,containerStyle,phraseStyle}) => {
  return (
    <motion.div
      variants={revealParagraphContainer}
      className={`flex flex-col ${containerStyle}}`}
    >
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className="relative flex flex-wrap ">
            {[...phrase].map((letter, i) => {
              return (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    className={phraseStyle}
                    variants={revealParagraphAnimation}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.h2>
                </div>
              );
            })}
          </div>
        );
      })}
    </motion.div>
  );
};

export default RevealParagraph;
