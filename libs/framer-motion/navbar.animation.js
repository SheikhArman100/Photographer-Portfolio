export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      duration:0.2,
      delayChildren:0.2,
      staggerChildren:0.4
    },
  },
};

export const NavLogo={
    hidden:{
      scale:0

    },show:{
      scale:1 ,
      transition:{
        delay:0.5,
        ease:"linear",
        duration:0.4
        
    }}
}

export const navLink={
  hidden:{
    y:50,
  },
  show:(index)=>({
    y:0,
    transition:{
      ease:"linear",
      duration:0.3,
      
      
      delay:index*0.2
    } 

  })
}