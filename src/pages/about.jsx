import { motion } from "framer-motion"

const About = () => {
    return ( 
        <motion.div
         initial={{rotateY:45}}
         animate={{rotateY:0,transition:{duration:1}}}
         exit={{rotateY:45,transition:{duration:2,ease:'easeInOut'}}}
         className=" flex flex-col items-center justify-center gap-10">
            <h1 className="text-4xl font-serif">About Me</h1>
            <div className="flex flex-col items-center justify-center ">
            <div>
                <img src="https://images.unsplash.com/photo-1624949216539-cd17ef0a1a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt=""  className="w-44 h-44 rounded-full object-cover "/>
            </div>
            <div className="flex flex-col items-center justify center text-center gap-5">
                <p className="text-xl">Opedudu Abdulfatai</p>
                <p className="max-w-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quaerat, totam animi molestiae veniam harum dolore culpa quidem officiis esse qui quia nobis, incidunt magnam ipsum at libero, fugiat eveniet!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis laborum qui amet dolorem velit cumque incidunt, sed totam, alias ad aspernatur consectetur adipisci modi error illum consequatur veritatis a voluptates!</p>
            </div>
            </div>
        </motion.div>
     );
}
 
export default About;