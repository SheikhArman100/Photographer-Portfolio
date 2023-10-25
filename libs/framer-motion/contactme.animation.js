export const sectionAnimation={
    hidden:{},
    view:{
        transition:{
            delayChildren:0.3,
            staggerChildren:0.3
        }
    }
}
export const containerAnimation={
    hidden:{
        opacity:0
    },
    view:{
        opacity:1,
        transition:{
            duration:0.5,
            ease:"linear",
            delayChildren:0.3,
            staggerChildren:0.3
        }
    }
}
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
      duration:0.4
    },
  },
};