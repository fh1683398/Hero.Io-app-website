import React from 'react';
import logoImg from "../../assets/logo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className='bg-(--primary-color) py-9'>

            <div className='flex flex-col gap-12 md:gap-0 md:flex-row items-center justify-between max-w-360 mx-auto pb-10 border-b border-gray-300'>

                <div className='flex gap-4 items-center justify-center'>
                    <img className='w-10' src={logoImg} alt="" />
                    <h4 className='text-white text-2xl md:text-3xl font-bold'>Hero.Io</h4>
                </div>

                <div className='text-white text-center md:text-right'>
                    <h4 className='mb-4 font-semibold text-xl'>Social Links</h4>
                    <div className='flex justify-between gap-4'>
                        <Link to="/"><FaXTwitter  size={20}/></Link>
                        <Link to="/"><FaLinkedinIn size={20}/></Link>
                        <Link to="/"><FaFacebookF  size={20}/></Link>
                    </div>
                </div>
            </div>
            <p className='pt-5 text-gray-300 text-center text-sm'>Copyright © 2025 - All right reserved</p>
        </footer>
    );
};

export default Footer;