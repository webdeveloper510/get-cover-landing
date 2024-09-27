import React, { useState } from 'react';
import logo from './../assets/images/Logo.png';
import menu from './../assets/images/icons/menu.svg';
import cross from './../assets/images/icons/cross.svg';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const openDiv = () => {
        setIsVisible(!isVisible);
    };

    const redirectToSection = (id) => {
        // Navigate to home and pass the section ID in the state
        navigate('/', { state: { sectionId: id } });
        setIsVisible(false); // Close the mobile menu after click
    };
    return (
        <div className={`fixed top-0 z-10 left-0 right-0 w-full bg-[#32314852] backdrop-blur-lg 2xl:px-0 xl:px-0 lg:px-0 md:px-16 sm:px-8 s:px-8`}>
            <div className={`${className}`}>
                <div className='flex justify-between py-6  2xl:pr-5 xl:pr-5 lg:pr-5 md:pr-5 sm:pr-0 s:pr-0'>
                    <div className='self-center'>
                        <Link to='/'>
                            <img src={logo} className="w-[158px]" alt='logo' />
                        </Link>
                    </div>
                    <div className='self-center 2xl:hidden xl:hidden lg:hidden md:block sm:block s:block'>
                        <img src={menu} onClick={openDiv} alt='menu' />
                    </div>
                    <div className='justify-between text-white self-center 2xl:flex xl:flex lg:flex md:hidden sm:hidden s:hidden'>
                        <a onClick={() => redirectToSection('home')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[10px] sm:text-[10px] s:text-[16px] cursor-pointer'> Home</a>
                        <a onClick={() => redirectToSection('about-us')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[10px] sm:text-[10px] s:text-[16px] cursor-pointer'> About Us</a>
                        <a onClick={() => redirectToSection('technology')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[10px] sm:text-[10px] s:text-[16px] cursor-pointer'>Technology</a>
                        <a onClick={() => redirectToSection('programs')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[10px] sm:text-[10px] s:text-[16px] cursor-pointer'>Programs</a>
                        <a onClick={() => redirectToSection('enterprise')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[10px] sm:text-[10px] s:text-[16px] cursor-pointer'>Enterprise</a>
                        <a onClick={() => redirectToSection('app')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[10px] sm:text-[10px] s:text-[16px] cursor-pointer'>Mobile APP</a>
                        <a onClick={() => redirectToSection('faq')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[10px] sm:text-[10px] s:text-[16px] cursor-pointer'>FAQ</a>
                        <a onClick={() => redirectToSection('contact-us')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[10px] sm:text-[10px] s:text-[16px] cursor-pointer'>Contact Us</a>
                        <a href="https://app.getcover.com/" target='_blank' className='text-[#323148] 4xl:text-[20px] 3xl:text-[19px] 2xl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[12px] sm:text-[12px] s:text-[12px] font-semibold bg-white rounded-lg p-3 ml-5'>LOGIN</a>
                    </div>

                    {isVisible && (
                        <div className='fixed top-0 left-0 w-full h-screen bg-[#323148fa] backdrop-blur-2xl'>
                            <img src={cross} onClick={openDiv} className='ml-5 mt-5' alt='cross' />
                            <div className='mt-28  w-full  mx-auto'>
                                <Link to={'/'} className='text-center my-5 text-white cursor-pointer'>About Us</Link>
                                <p className='text-center my-5 text-white cursor-pointer' onClick={() => redirectToSection('about-us')}>About Us</p>
                                <p className='text-center mb-5 text-white cursor-pointer' onClick={() => redirectToSection('technology')}> Technology</p>
                                <p className='text-center my-5 text-white cursor-pointer' onClick={() => redirectToSection('programs')}>Programs</p>
                                <p className='text-center mb-5 text-white cursor-pointer' onClick={() => redirectToSection('enterprise')}> Enterprise</p>
                                <p className='text-center mb-5 text-white cursor-pointer' onClick={() => redirectToSection('app')}>APP</p>
                                <p className='text-center mb-5 text-white cursor-pointer' onClick={() => redirectToSection('faq')}>FAQ</p>
                                <p className='text-center mb-5 text-white cursor-pointer' onClick={() => redirectToSection('contact-us')}>Contact Us</p>
                                <p className='text-center my-5'><a href="https://app.getcover.com/" target='_blank' className='text-[#323148] text-sm font-semibold bg-white rounded-lg p-3'>LOGIN</a></p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;
