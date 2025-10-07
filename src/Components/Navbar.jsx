import React from 'react';
import logoImg from "../assets/Images/logo.png"
import { NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const activeNavLink = ({isActive})=>{
       return isActive ? "text-transparent bg-clip-text bg-[linear-gradient(125.07deg,_#632EE3,_#9F62F2)]  underline underline-offset-4 decoration-[#9F62F2] font-semibold" : "text-[#000000e6]"

    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#000000e6] font-semibold text-[16px]">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/apps">Apps</NavLink></li>
        <li><NavLink to="/installation">Installation</NavLink></li>
        
      </ul>
    </div>
    <NavLink to="/" className="w-10 h-10 cursor-pointer flex items-center">
        <img src={logoImg}  alt="Navbar logo image" />
        <span className='text-transparent bg-clip-text bg-[linear-gradient(125.07deg,_#632EE3,_#9F62F2)] font-bold text-[16px]'>HERO.IO</span>
    </NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#000000e6] font-semibold text-[16px] [&_li>a:hover]:!bg-transparent">
      <li><NavLink to="/" className={activeNavLink}>Home</NavLink></li>
        <li><NavLink to="/apps"  className={activeNavLink}>Apps</NavLink></li>
        <li><NavLink to="/installation"  className={activeNavLink}>Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to="https://github.com/marufaakter1947" target='_blank' className="btn  bg-[linear-gradient(125.07deg,_#632EE3,_#9F62F2)] text-white text-[16px] font-semibold"> <FaGithub /> Contribute</NavLink>
  </div>
</div>
    );
};

export default Navbar;