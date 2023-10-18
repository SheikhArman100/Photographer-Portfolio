export const sectionAnimation = {
  hidden: {opacity:0},
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};
export const containerAnimation = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: {
      duration:0.3,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const marqueeText = {
  show: {
    x: "-40%",
    transition: {
      type: "tween",
      repeat: Infinity,
      repeatType: "reverse",
      duration: 8,
      ease: "linear",
    },
  },
};
