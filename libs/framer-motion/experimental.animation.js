export const sectionAnimation = {
  hidden: {},
  view: {
    transition: {
      delayChildren: 0.5,
      staggerChildren:0.2,
      ease:"linear"
    },
  },
};

// export const containerOpacityAnimation = {
//   hidden: { 
//     opacity:0 ,
// },
//   view: {
//     opacity: 1,
//    transition: {
//       duration: 0.6,
//       ease:"linear"
//     },
//   },
// };

export const containerScaleAnimation = {
  hidden: { scaleX: 0 },
  view: {
    scaleX: 1,
    transition: {
      duration: 0.7,
      delayChildren: 0.7,
      staggerChildren: 0.3,
      ease:"linear"
    },
  },
};
export const marqueeContainer={
  hidden:{
    opacity:0 
  },
  view:{
    opacity:1,
    transition:{
      ease:"linear"

    }
  }
}

export const marqueeText = {
  view: {
    
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

export const circleScale={
  hidden:{
    scale:0
  },
  view:{
    scale:1,
    transition:{
      duration:0.3,
      ease:"linear",
      delayChildren:0.3
    }
  }
}
export const circleText={
  hidden:{
    opacity:0
  },
  view:{
    opacity:1,
    transition:{
      duration:0.3,
      ease:"linear"
    }

  }
}

export const textContainer={
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
      duration:0.5,
      ease:"linear",
      delayChildren:0.5
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
      ease:"linear",
    }
  }
}

