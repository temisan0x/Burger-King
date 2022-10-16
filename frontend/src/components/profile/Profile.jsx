import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/Temisan.jpg";
import { animateSix, animateFive } from "../../util/motion";
import { Link } from "react-router-dom";
import {MdDashboard} from "react-icons/md"

const Profile = () => {
  return (
    <section className="profile">
      <main>
        <motion.img src={me} alt="User" {...animateFive} />
        <motion.h5 {...animateFive} transition={{ delay: 0.3 }}>
          Temisan
        </motion.h5>
        <motion.div {...animateFive}>
          <Link to="/admin/dashboard" transition={{ delay: 0.5 }}>
            <MdDashboard/>Dashboard 
          </Link>
        </motion.div>
        <motion.div {...animateSix}>
          <Link to="/my-orders" transition={{ delay: 0.5 }}>
            Orders
          </Link>
        </motion.div>
        <motion.button {...animateSix} transition={{ delay: 0.5 }}>
          logout
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
