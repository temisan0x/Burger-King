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
