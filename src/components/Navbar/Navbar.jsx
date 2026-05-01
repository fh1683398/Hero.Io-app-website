import React, { useState } from 'react';
import { IoLogoGithub } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { NavLink } from 'react-router';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const links = <>
        <NavLink to="/" className="block px-3 py-2 hover:bg-gray-100"><li>Home</li></NavLink>
        <NavLink to="/apps" className="block px-3 py-2 hover:bg-gray-100"><li>Apps</li></NavLink>
        <NavLink to="/installation" className="block px-3 py-2 hover:bg-gray-100"><li>Installation</li></NavLink>
    </>

    return (
        <nav className="bg-white">

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
                                <IoMdClose size={25}/>
                            </button>

                            <ul className='flex flex-col space-y-2' onClick={() => setOpenMenu(!openMenu)}>
                                {links}
                            </ul>
                        </div>
                    </div>
                )
            }

            <div className='flex justify-between items-center max-w-360 mx-auto py-5'>

                <div className='flex gap-2 cursor-pointer items-center'>

                    <button
                        className='lg:hidden cursor-pointer'
                        onClick={() => setOpenMenu(!openMenu)}>{openMenu ? <IoMdClose size={25}/> : <FiMenu size={25}/>}
                    </button>

                    <h3
                        className='font-bold text-2xl md:text-3xl text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-violet-500'>
                        Hero.Io
                    </h3>
                </div>

                <ul
                    className='hidden lg:flex gap-6 '>
                    {links}
                </ul>

                <button
                    className='flex items-center justify-center text-white gap-2 bg-linear-to-r from-violet-600 to-violet-500 px-5 py-2 rounded-sm text-lg cursor-pointer'><IoLogoGithub /> Contribute
                </button>
            </div>
        </nav>
    );
};

export default Navbar;