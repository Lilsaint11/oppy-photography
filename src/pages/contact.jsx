import { motion } from "framer-motion"

const Contact = () => {
    return ( 
        <motion.div
         initial={{rotateY:25}}
         animate={{rotateY:0,transition:{duration:1}}}
         exit={{x:'-100vw',transition:{ease:'easeInOut'}}}
         className="flex justify-center h-[500px] max-w-[800px] mx-auto px-5">
            <div>
                <form action="https://formspree.io/f/mgebqeok" method="post" className="flex flex-col gap-5 border border-[#402F1D] p-5">
                    <h1 className="text-4xl text-[#402F1D]">BOOK ME!!!</h1>
                    <input type="text" name="name" placeholder="Name" className="border border-[#402F1D]  max-[550px]:w-72 w-96 h-10 pl-3 rounded"/>
                    <input type="text" name="Location" placeholder="Location" className="border border-[#402F1D] w-96  h-10 pl-3 rounded"/>
                    <input type="text" name="Event" placeholder="Event" className="border border-[#402F1D] w-96  h-10 pl-3 rounded"/>
                    <input type="text" name="Date" placeholder="Date" className="border border-[#402F1D] w-96 h-10 pl-3 rounded"/>
                    <input type="email" name="Email" placeholder="Email" className="border border-[#402F1D] w-96  h-10 pl-3 rounded"/>
                    <input type="number" name="phone" placeholder="Phone number" className="border border-[#402F1D] w-96  h-10 pl-3 rounded"/>
                    <button className="bg-[#402F1D] w-96  h-10 pl-3 rounded-full text-lg font-semibold text-white">Send Details</button>
                </form>
            </div>
            <div className="w-1/2 max-[700px]:hidden">
                <img src="https://images.unsplash.com/photo-1613730317814-1cede28e0151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" className="h-full bg-cover" />
               
            </div>
        </motion.div>
     );
}
 
export default Contact;