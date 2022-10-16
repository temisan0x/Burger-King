import React from "react";
import { motion } from "framer-motion";
import { options, optionTwo } from "../../util/motion";
import Founder from "./Founder";
import Menu from "./Menu";

const Home = () => {
  return (
   <>
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
      <motion.a
      {...optionTwo}
      href="#menu">Explore menu</motion.a>
    </section>
    <Founder/>
    <Menu/>
   </>
  );
};

export default Home;
