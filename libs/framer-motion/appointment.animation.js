export const sectionAnimation = {
  hidden: {},
  view: {
    transition: {
      delayChildren: 0.5,
      staggerChildren:0.6
    },
  },
};
export const scaleContainer = {
  hidden: {
    scaleX: 0,
  },
  view: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: "linear",
      delayChildren: 0.8,
    },
  },
};

export const topContainerText = {
  hidden: {
    opacity: 0,
  },
  view: {
    opacity: 1,

    transition: {
      ease: "linear",
      duration:0.4
    },
  },
};
export const ImageContainer = {
  hidden: {
  },
  view: {
    

    transition: {
      staggerChildren:0.6
    },
  },
}

export const ImageAnimation = {
  hidden: {
    scaleX: 1,
  },
  view: {
    scaleX: 0,

    transition: {
      ease: "linear",
      duration:0.6
    },
  },
}
export const ImageText = {
  hidden: {
    opacity: 0,
  },
  view: {
    opacity: 1,

    transition: {
      ease: "linear",
    },
  },
}
