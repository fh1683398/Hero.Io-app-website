import React from 'react';
import googlePlay from "../../assets/googlePlay.png"
import AppStore from "../../assets/App-store.png"
import heroImg from "../../assets/hero.png"

const Header = () => {
    return (
        <header className='max-w-360 mx-auto text-center mt-20 flex flex-col items-center'>
            <h1 className='text-5xl md:text-7xl text-(--primary-color) mb-4'>We Build <br />
                <span className='text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-violet-500 font-bold'>Productive</span> Apps
            </h1>
            <p className='text-gray-500 max-w-250 mx-auto mb-10'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            
            <div className='flex flex-col md:flex-row gap-4 justify-center mb-10'>

                <button className='flex items-center justify-center gap-4 px-6 py-3 border border-gray-300 hover:bg-gray-200 rounded-sm cursor-pointer'>

                    <img className='w-8' src={googlePlay} alt="" />
                    <span className='text-lg'>Google Play</span>
                </button>

                <button className='flex items-center justify-center gap-4 px-6 py-3 border border-gray-300 hover:bg-gray-200 rounded-sm cursor-pointer'>

                    <img className='w-8' src={AppStore} alt="" />
                    <span className='text-lg'>App Store</span>
                </button>
            </div>

            <img src={heroImg} alt="" />
        </header>
    );
};

export default Header;

