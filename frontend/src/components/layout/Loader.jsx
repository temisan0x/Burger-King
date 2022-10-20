import React from 'react';
import {IoFastFoodOutline} from "react-icons/io5";
import {motion} from "framer-motion";
import { animateSeven } from '../../util/motion';

const Loader = () => {
  return (
    <div className='loader'>
      <IoFastFoodOutline/>
      <div>
        <motion.p {...animateSeven}>
          Loading...
        </motion.p>
      </div>
    </div>
  )
}

export default Loader