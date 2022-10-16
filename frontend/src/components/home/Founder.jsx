import React from "react";
import me from "../../assets/Temisan.jpg";
import { motion } from "framer-motion";
import { options } from "../../util/motion";

const Founder = () => {
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Temisan" height={200} width={200} />
        <h3>Temisan Momodu</h3>
        <p>
          Hey, Everyone I am Temisan Momodu, and I just created a website in
          honor of Burger Kings. <br />
          My aim is to create a website that will be optimized for mobile
          devices and devices.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
