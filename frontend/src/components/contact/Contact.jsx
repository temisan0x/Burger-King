import React from "react";
import { motion } from "framer-motion";
import { options } from "../../util/motion";

const Contact = () => {
  return (
    <section className="contact">
      <motion.form {...options}>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message..."></textarea>
        <button type="submit">Send</button>
      <motion.div
       initial={{
        y: "-100vh",
        opacity: 0,
       }}
       animate={{
        y: "0",
        opacity: 1
       }}
       transition={{
        delay:1
       }}
      >
        <img
          src=" https://cdn-icons-png.flaticon.com/512/5977/5977578.png"
          alt="burger king icon"
        />
      </motion.div>
      </motion.form>
    </section>
  );
};

export default Contact;
