import React from 'react';
import {motion} from "framer-motion";
import {FcGoogle} from "react-icons/fc"

const Login = () => {
  return (
    <section>
        <motion.div>
            Login with Google <FcGoogle/>
        </motion.div>
    </section>
  )
}

export default Login