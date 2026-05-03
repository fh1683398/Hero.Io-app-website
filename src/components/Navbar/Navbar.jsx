import React, { useState } from 'react';
import { IoLogoGithub } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink } from 'react-router';
import logo from "../../assets/logo.png"

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const links = <>
        <NavLink to="/" className="block px-3 py-2 hover:bg-gray-100"><li>Home</li></NavLink>
        <NavLink to="/apps" className="block px-3 py-2 hover:bg-gray-100"><li>Apps</li></NavLink>
        <NavLink to="/installation" className="block px-3 py-2 hover:bg-gray-100"><li>Installation</li></NavLink>
    </>

    return (
        <nav className="bg-white sticky top-0 z-50 px-4 md:px-0">

            {/* mobile menus */}
            {
                openMenu && (
                    <div
                        className='lg:hidden bg-black/50 w-full h-full fixed inset-0 z-50'
                        onClick={() => setOpenMenu(!openMenu)}>

                        <div
                            className='bg-white w-2/3 p-6 h-full space-y-6'
                            onClick={(e) => e.stopPropagation()}>

                            <button
                                className='cursor-pointer'
                                onClick={() => setOpenMenu(!openMenu)}>
                                <IoMdClose size={25} />
                            </button>

                            <ul className='flex flex-col space-y-2' onClick={() => setOpenMenu(!openMenu)}>
                                {links}
                            </ul>
                        </div>
                    </div>
                )
            }

            {/* desktop */}
            <div className='flex justify-between items-center max-w-360 mx-auto py-5'>

                <div className='flex gap-2 cursor-pointer items-center'>

                    <button
                        className='lg:hidden cursor-pointer'
                        onClick={() => setOpenMenu(!openMenu)}>{openMenu ? <IoMdClose size={25} /> : <FiMenu size={25} />}
                    </button>

                    <Link to="/">
                        <div className='flex gap-2 items-center'>
                            <img className='w-10' src={logo} alt="" />

                            <h3
                                className='font-bold text-2xl md:text-3xl text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-violet-500'>
                                Hero.Io
                            </h3>
                        </div>
                    </Link>
                </div>

                <ul
                    className='hidden lg:flex gap-6 '>
                    {links}
                </ul>

                <a href="https://github.com/fh1683398" target="_blank">
                    <button
                        className='flex items-center justify-center  gap-2 text-white bg-linear-to-r from-violet-600 to-violet-500 px-5 py-2 rounded-sm text-lg cursor-pointer'><IoLogoGithub /> <span className='hidden md:inline'>Contribute</span>
                    </button>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;