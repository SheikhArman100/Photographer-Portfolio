export const sectionAnimation = {
  hidden: {},
  view: {
    transition: {
      staggerChildren: 0.8,
    },
  },
};
export const ContainerAnimation = {
  hidden: {},
  view: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const imageSection = {
  hidden: {},
  view: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

export const imageContainer = {
  hidden: {
    scaleY: 0,
  },
  view: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: "linear",
      delayChildren: 0.5,
    },
  },
};

export const imageAnimation = {
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
export const imageText = {
  hidden: {
    opacity: 0,
  },
  view: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "linear",
    },
  },
};

export const textContainer = {
  hidden: {
    opacity: 0
  },
  view: {
    opacity:1,
    transition: {
      duration:0.2,
      ease:"linear",
      delayChildren:0.2
    },
  },
};
export const textScaleWrapper={
  hidden:{
    scaleX:1
  },
  view:{
    scaleX:0,
    transition:{
      duration:1,
      ease:"linear",
    }
  }
}
export const buttonContainer={
  hidden:{
    scaleY:0
  },
  view:{
    scaleY:1,
    transition:{
      duration:0.6,
      ease:"linear",
      delayChildren:0.6
    }
  }
}
export const buttonItems={
  hidden:{
    opacity:0
  },
  view:{
    opacity:1,
    transition:{
      // duration:0.4,
      ease:"linear",
    }
  }
}
