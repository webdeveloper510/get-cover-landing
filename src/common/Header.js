import React from 'react'
import logo from './../assets/images/logo.png';
const Header = ({ className }) => {
    return (
        <div className={`fixed top-0 z-10 left-0 right-0 w-full bg-[#32314852] backdrop-blur-lg 2xl:px-0 xl:px-0 lg:px-0 md:px-16 sm:px-8 s:px-8`}>
            <div className={`${className}`}>
                <div className='flex justify-between py-6 pr-5'>
                    <div className='self-center'>
                        <img src={logo} alt='logo' />
                    </div>
                    <div className=' justify-between text-white self-center 2xl:flex xl:flex lg:flex md:flex sm:hidden s:hidden'>
                        <a href='#plan' className='ml-5 self-center text-base'>Our Plans</a>
                        <a href='#about-us' className='ml-5 self-center text-base'> About Us</a>
                        <a href='#why-us' className='ml-5 self-center text-base'>Why Us</a>
                        <a href="#contact-us" className='text-[#323148] text-sm font-semibold bg-white rounded-lg p-3 ml-5'>Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
