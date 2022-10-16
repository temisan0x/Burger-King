import React from 'react';
import {motion} from "framer-motion";
import {FcGoogle} from "react-icons/fc"
import { optionFour } from '../../util/motion';

const Login = () => {
  return (
    <section className="login">
        <motion.button {...optionFour}>
            Login with Google <FcGoogle/>
        </motion.button>
    </section>
  )
}

export default Login