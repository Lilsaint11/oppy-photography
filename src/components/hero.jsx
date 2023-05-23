import { motion } from "framer-motion"

const Hero = () => {
    return ( 
        <div className="w-full -z-50 h-72 relative sm:mb-20 max-[450px]:mb-0 mb-10">
            <motion.div
             initial={{opacity:0}}
             animate={{opacity:1,transition:{duration:1,delay:0.7}}}
             className="flex flex-col gap-4 z-50">
                <span className="flex justify-center align-center  max-[680px]:text-5xl  max-[560px]:text-4xl text-6xl font-semibold hero">OPPY PHOTOGRAPHY</span>
                <p className="m-auto max-w-md text-sm text-slate-400 text-center leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora quaerat impedit modi suscipit nostrum dolore maiores aut. Modi nostrum omnis iste ducimus fugit labore, consequuntur excepturi itaque ullam sint.</p>
            </motion.div>
            <span>
                <motion.img 
                 initial={{x:-100}}
                 animate={{x:64,transition:{duration:1}}}
                 src="https://images.unsplash.com/photo-1684254515004-1f84811e887b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="camera" className=" max-[710px]:w-32 max-[560px]:w-20 w-40  max-[710px]:max-h-32 max-[560px]:h-20 max-h-40 bg-cover absolute max-[560px]:top-10 top-6 max-[970px]:-left-10 max-[850px]:-left-20 left-0 -z-20"/>
            </span> 
            <span>
                <motion.img 
                 initial={{y:0,x:100}}
                 animate={{y:'240%',x:0,transition:{duration:1}}}
                 src="https://images.unsplash.com/photo-1683265379492-8179a1fff9c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""  className=" max-[560px]:w-20 w-28 max-h-30 bg-cover absolute  max-[560px]:-top-[50%]  -top-[70%] left-[60%] -z-20"/>
            </span>
            <span>
                <motion.img 
                 initial={{x:0,y:'100%'}}
                 animate={{x:"210%",y:0,transition:{duration:1}}}
                 src="https://plus.unsplash.com/premium_photo-1671851793638-6288846c8b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2hpdGUlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="setup" className=" max-[560px]:w-20 w-40 max-h-40 bg-cover absolute max-[790px]:-left-20  max-[710px]:-left-32 max-[560px]:-left-10 left-0 max-[560px]:bottom-16 bottom-5 -z-20"/>
            </span>
            <span>
                <motion.img 
                 initial={{x:100}}
                 animate={{x:-96,transition:{duration:1}}}
                 src="https://images.unsplash.com/photo-1547104442-991cb31eaafd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="sunset" className=" max-[710px]:w-32  max-[560px]:w-20  w-40  max-[710px]:max-h-32  max-[560px]:h-20  max-h-40 bg-cover absolute bottom-14 max-[970px]:-right-10 max-[850px]:-right-20 max-[785px]:-right-32 right-0 max-[560px]:top-[30%] -z-20"/>
            </span>
        </div>
     );
}
 
export default Hero;