export const articleAnimation = {
  hidden: {},
  view: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.5,
    },
  },
};
export const fadeLeft = {
  hidden: {
    x: "-110%",
  },
  view: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};
export const fadeRight = {
  hidden: {
    x: "110%",
  },
  view: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};
export const fadeTop = {
  hidden: {
    y: "-110%",
  },
  view: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};
export const fadeBottom = {
  hidden: {
    y: "110%",
  },
  view: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  view: {
    opacity: 1,

    transition: {
      duration: 0.4,
      ease: "linear",
      delayChildren:0.4,
      staggerChildren:0.3
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
      duration: 2,
      ease: "linear",
    },
  },
};