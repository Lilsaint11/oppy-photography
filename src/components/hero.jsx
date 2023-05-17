import { motion } from "framer-motion"

const Hero = () => {
    return ( 
        <div className="w-full -z-50 h-72 relative mb-20">
            <motion.div
             initial={{opacity:0}}
             animate={{opacity:1,transition:{duration:1,delay:0.7}}}
             className="flex flex-col gap-4 z-50">
                <span className="flex justify-center align-center text-6xl font-semibold hero">OPPY PHOTOGRAPHY</span>
                <p className="m-auto max-w-md text-sm text-slate-600 text-center leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora quaerat impedit modi suscipit nostrum dolore maiores aut. Modi nostrum omnis iste ducimus fugit labore, consequuntur excepturi itaque ullam sint.</p>
            </motion.div>
            <span>
                <motion.img 
                 initial={{x:-100}}
                 animate={{x:64,transition:{duration:1}}}
                 src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=
                1887&q=80" alt="camera" className="w-40 max-h-40 bg-cover absolute top-6 left-0 -z-20"/>
            </span> 
            <span>
                <motion.img 
                 initial={{y:0,x:100}}
                 animate={{y:'240%',x:0,transition:{duration:1}}}
                 src="https://images.unsplash.com/photo-1683265379492-8179a1fff9c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""  className="w-28 max-h-30 bg-cover absolute -top-[70%] left-[60%] -z-20"/>
            </span>
            <span>
                <motion.img 
                 initial={{x:0,y:'100%'}}
                 animate={{x:"210%",y:0,transition:{duration:1}}}
                 src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="setup" className="w-40 max-h-40 bg-cover absolute left-0 bottom-5 -z-20"/>
            </span>
            <span>
                <motion.img 
                 initial={{x:100}}
                 animate={{x:-96,transition:{duration:1}}}
                 src="https://images.unsplash.com/photo-1554844453-7ea2a562a6c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="sunset" className="w-40 max-h-40 bg-cover absolute bottom-14 right-0 -z-20"/>
            </span>
        </div>
     );
}
 
export default Hero;