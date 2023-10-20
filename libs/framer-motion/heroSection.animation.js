export const middleContainer = {
  hidden: {
    
  },
  show: {

    transition: {
      delayChildren: 0.3,
    },
  },
};
export const middleContainerItems = {
  hidden: {
    opacity:0
  },
  show: {
    opacity:1,
    
    transition: {
      duration:0.3,
      ease:"linear"
      
    },
  },
};












//bottom part
export const bottomContainer = {
  hidden: {
    scaleX: 0,
  },
  show: {
    scaleX: 1,
    transition: {
      duration: 0.5,
      ease: "linear",
      delayChildren: 0.5,
    },
  },
};
export const bottomSubContainer = {
  hidden: {
    opacity:0

  },
  show: {
    opacity:1,
    transition: {
      delayChildren: 0.3,
    },
  },
};

export const bottomCircle={
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition:{
            duration:0.3,
            ease:"linear",
            delayChildren:0.3
        } 
    }
}
 export const bottomCircleText={
    hidden:{
        opacity:0 
    },
    show:{
        opacity:1 ,
        transition:{
            duration:0.3,
            ease:"linear"
        } 
    }

 }

