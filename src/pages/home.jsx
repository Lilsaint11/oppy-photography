import Hero from '../components/hero'
import Sections from '../components/sections';
import WhatToExpect from '../components/whatToExpect';
import { motion } from "framer-motion"

const Home = () => {
    return ( 
        <motion.div
         initial={{rotateY:45}}
         animate={{rotateY:0,transition:{duration:1}}}
         exit={{rotateY:45,transition:{duration:2,ease:'easeInOut'}}}
         className="flex flex-col  gap-10 justify-between mt-10">
            <Hero />
            <Sections />
            <WhatToExpect />
        </motion.div>
     );
}
 
export default Home;