import Hero from '../components/hero'
import Sections from '../components/sections';
import WhatToExpect from '../components/whatToExpect';
import { motion } from "framer-motion"

const Home = () => {
    return ( 
        <motion.div
         initial={{rotateY:25}}
         animate={{rotateY:0,transition:{duration:1}}}
         exit={{x:'-100vw',transition:{ease:'easeInOut'}}}
         className="flex flex-col  gap-10 justify-between mt-10 mx-10">
            <Hero />
            <Sections />
            <WhatToExpect />
        </motion.div>
     );
}
 
export default Home;