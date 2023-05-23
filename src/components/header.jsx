import { useState } from 'react';
import { FaEnvelope, FaTwitter,FaInstagram } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const activeClassName='underline underline-offset-4 decoration-slate-400 font-semibold';
    const [isOpen, setIsOpen] = useState(false)
    return ( 
        <div className="flex justify-between bg-white sticky top-0 py-5 z-50 relative mx-10 mb-10">
            <ul className="flex gap-6 text-sm">
                <NavLink to="/" className={({ isActive }) => isActive ? activeClassName : "text-slate-500 hover:text-slate-900 transition duration-300"}>
                    <li>Home</li>
                </NavLink>
                <NavLink to="/portfolio" className={({ isActive }) => isActive ? activeClassName : "text-slate-500 hover:text-slate-900 transition duration-300"}>
                    <li className='relative drop-cont' onClick={()=>setIsOpen((prev) => !prev)}>
                        Portfolio
                    </li>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? activeClassName : "text-slate-500  hover:text-slate-900 transition duration-300"}>
                    <li>About</li>
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? activeClassName : "text-slate-500 hover:text-slate-900 transition duration-500"}>
                    <li>Contact</li>
                </NavLink> 
                <NavLink to="/albums" className={({ isActive }) => isActive ? activeClassName : "text-slate-500 hover:text-slate-900 transition duration-500"}><li>Albums</li></NavLink>        
            </ul>
            <Link to="/"><span className='logo text-2xl absolute left-[48%]'>OPPY</span></Link>
            <span>
                <ul className="flex gap-14">
                <Link to="https://www.instagram.com/oppyphotography"><li className=" hover:text-slate-600 transition duration-150 ease-in-out"><FaInstagram /></li></Link>
                <Link to="mailto: eshoopeyemii007@gmail.com"><li className="hover:text-slate-600 transition duration-150 ease-in-out"><FaEnvelope /></li></Link>
                <Link to="https://twitter.com/oppyphotography"><li className="hover:text-slate-600 transition duration-150 ease-in-out"><FaTwitter /></li></Link>
                </ul>
            </span>
        </div>
     ); 
}
 
export default Header;