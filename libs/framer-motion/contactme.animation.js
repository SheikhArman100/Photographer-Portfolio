export const sectionAnimation = {
  hidden: {},
  view: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};
export const containerAnimation = {
  hidden: {
    opacity: 0,
  },
  view: {
    opacity: 1,
    transition: {
      ease: "linear",
      delayChildren: 0.3,
      staggerChildren: 0.3,
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

export const scaleContainerText = {
  hidden: {
    opacity: 0,
  },
  view: {
    opacity: 1,

    transition: {
      ease: "linear",
      duration: 0.4,
    },
  },
};

export const buttonContainer = {
  hidden: {
    scaleX: 0,
  },
  view: {
    scaleX: 1,

    transition: {
      duration: 0.4,
      ease: "linear",
      delayChildren: 0.4,
    },
  },
};
export const buttonItems = {
  hidden: {
    opacity: 0,
  },
  view: {
    opacity: 1,

    transition: {
      ease: "linear",
    },
  },
};
export const textScaleContainer = {
  hidden: {
    scaleX: 1,
  },
  view: {
    scaleX: 0,
    transition: {
      duration: 4,
      ease: "linear",
    },
  },
};