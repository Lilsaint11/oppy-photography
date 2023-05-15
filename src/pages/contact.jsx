const Contact = () => {
    return ( 
        <div className="flex justify-between">
            <div>
                <form action="https://formspree.io/f/mgebqeok" method="post" className="flex flex-col gap-5">
                    <h1 className="text-4xl">BOOK ME!!!</h1>
                    <input type="text" name="name" placeholder="Name" className="border border-slate-900 w-96 h-10 pl-3 rounded"/>
                    <input type="text" name="Location" placeholder="Location" className="border border-slate-900 w-96 h-10 pl-3 rounded"/>
                    <input type="text" name="Event" placeholder="Event" className="border border-slate-900 w-96 h-10 pl-3 rounded"/>
                    <input type="text" name="Date" placeholder="Date" className="border border-slate-900 w-96 h-10 pl-3 rounded"/>
                    <input type="email" name="Email" placeholder="Email" className="border border-slate-900 w-96 h-10 pl-3 rounded"/>
                    <input type="number" name="phone" placeholder="Phone number" className="border border-slate-900 w-96 h-10 pl-3 rounded"/>
                    <button className="bg-slate-600 w-96 h-10 pl-3 rounded-full text-lg font-semibold text-white">Send Details</button>
                </form>
            </div>
            <div className="relative w-1/2">
                <img src="https://th.bing.com/th/id/OIP.cv0FJjBxQLovkKEdQNEppQHaFb?pid=ImgDet&rs=1" alt="" className="w-full" />
                <span className="max-w-lg text-center absolute text-sm text-slate-600">Send your details down to my mail or hit me up on my social media accounts on the top-right corner(most prefarably <a href="https://www.instagram.com/oppyphotography" className="text-black ">instagram</a>) </span>
            </div>
        </div>
     );
}
 
export default Contact;