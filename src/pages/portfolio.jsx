import { useState } from "react";
import Photography from "../components/photography";
import { motion } from "framer-motion"

const Portfolio = () => {
    const [photography,setPhotography] = useState(true);
    return ( 
        <motion.div
         initial={{rotateY:45}}
         animate={{rotateY:0,transition:{duration:1}}}
         exit={{rotateY:45,transition:{duration:2,ease:'easeInOut'}}}
         className="flex flex-col gap-7 items-center justify-center">
            <div className="relative">
                <span className="flex items-center justify-center text-2xl gap-x-5 mb-2">
                   <h1 className={`cursor-pointer ${photography && "font-bold"}`} onClick={()=>{setPhotography(true)}}>Photography</h1>
                   <h1 className={`cursor-pointer ${!photography && "font-bold"}`} onClick={()=>{setPhotography(false)}}>Videography</h1>
                </span>
                <span className={`w-1/2 h-[2px] bg-black flex rounded transition duration-700 ${!photography && "translate-x-full"}`}></span>
            </div>
            {photography && <Photography />}
            {!photography && <p>Videos not ready</p>}
        </motion.div>
     );
}
 
export default Portfolio;