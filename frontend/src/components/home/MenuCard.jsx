import React from "react";
import { motion } from "framer-motion";
import { optionThree } from "../../util/motion";

const MenuCard = ({ title, burgerSrc, price, itemNum, handler, delay = 0 }) => {
  return (
    <motion.div
      {...optionThree}
      transition={{
        delay,
      }}
      className="burgerCard"
    >
      <div>item {itemNum}</div>
      <main>
        <img src={burgerSrc} alt={`${burgerSrc} illustration`} />
        <h5>{title}</h5>
        <p>₦{price}</p>
        <button onClick={() => handler()}>Buy Now</button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
