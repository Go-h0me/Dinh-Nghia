export const fadeInup ={
    inital:{
      opacity:0,
      y:60
    },
    animate:{
      opacity:1,
      y:0
    },
}
export const stagger ={
    inital:{
     
    },
    animate:{
      transition: {
          staggerChildren:0.1
      }
    },
}
export const routeAnimation ={
    inital:{
     opacity: 0
    },
    animate:{
      opacity:1,
      transition: {
          delay:0.1,
          duration:0.1
      }
    },
    exit:{
      opcity:0,
      transition:{
        delay:0.1,
        ease:'easeInOut'
      }
    }
}