export const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
};

export const options = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
  },
  transition: spring,
};

export const optionTwo = {
  initial: {
    y: "-100%",
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
  },
  transition: {
    delay: 0.4,
  },
};

export const optionThree = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
  },
};

export const optionFour = {
  initial: {
    y: "-100vh",
  },
  animate:{
    y:0
  },
  transition: spring
}

export const animateFive = {
  initial: {
    y: "-100%",
    opacity: 0,
  },
  animate:{
    y:0,
    opacity: 1,
  },
  transition: spring
}

export const animateSix = {
  initial: {
    x: "-100vw",
    opacity: 0,
  },
  animate:{
    x:0,
    opacity: 1,
  },
  transition: spring
}