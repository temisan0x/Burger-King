import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
    transition:spring
  }
  return (
    <section className="home">
      <div>
        <motion.h1
          {...options}
        >
          BURGER KING
        </motion.h1>
        <motion.p
          {...options}
        >
          Give yourself a tasty burger.
        </motion.p>
      </div>
      <a href="#menu">Explore menu</a>
    </section>
  );
};

export default Home;
