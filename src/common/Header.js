import React, { useState } from 'react'
import logo from './../assets/images/logo.png';
import menu from './../assets/images/icons/menu.svg';
import cross from './../assets/images/icons/cross.svg';
const Header = ({ className }) => {
    const [isVisible, setIsVisible] = useState(false);

    const openDiv = () => {
        console.log('open');
        setIsVisible(!isVisible);
    };

    return (
        <div className={`fixed top-0 z-10 left-0 right-0 w-full bg-[#32314852] backdrop-blur-lg 2xl:px-0 xl:px-0 lg:px-0 md:px-16 sm:px-8 s:px-8`}>
            <div className={`${className}`}>
                <div className='flex justify-between py-6  2xl:pr-5 xl:pr-5 lg:pr-5 md:pr-5 sm:pr-0 s:pr-0'>
                    <div className='self-center'>
                        <img src={logo} alt='logo' />
                    </div>
                    <div className='self-center 2xl:hidden xl:hidden lg:hidden md:hidden sm:block s:block'>
                        <img src={menu} onClick={openDiv} alt='menu' />
                    </div>
                    <div className='justify-between text-white self-center 2xl:flex xl:flex lg:flex md:flex sm:hidden s:hidden'>
                        <a href='#plan' className='ml-5 self-center text-base'>Our Plans</a>
                        <a href='#about-us' className='ml-5 self-center text-base'> About Us</a>
                        <a href='#why-us' className='ml-5 self-center text-base'>Why Us</a>
                        <a href="#contact-us" className='ml-5 self-center text-base'>Contact Us</a>
                        <a href="https://app.getcoverusa.com/" target='_blank' className='text-[#323148] text-sm font-semibold bg-white rounded-lg p-3 ml-5'>LOGIN</a>

                    </div>

                    {isVisible && (
                        <div className='fixed top-0 left-0 w-full h-screen bg-[#323148fa] backdrop-blur-2xl'>
                            <img src={cross} onClick={openDiv} className='ml-5 mt-5' alt='cross' />
                            <div className='mt-28  w-full  mx-auto'>
                                <p className='text-center my-5 text-white' onClick={openDiv}><a href='#plan' className=' text-center text-base w-full'>Our Plans</a></p>
                                <p className='text-center mb-5 text-white' onClick={openDiv}><a href='#about-us' className=' text-center text-base'> About Us</a></p>
                                <p className='text-center mb-5 text-white' onClick={openDiv}><a href='#why-us' className=' text-center text-base'>Why Us</a></p>
                                <p className='text-center mb-5 text-white' onClick={openDiv}><a href='#contact-us' className=' text-center text-base'>Contact Us</a></p>
                                <p className='text-center my-5' onClick={openDiv}><a href="https://app.getcoverusa.com/" target='_blank' className='text-[#323148] text-sm font-semibold bg-white rounded-lg p-3'>LOGIN</a></p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
