import React, { useState } from 'react';
import logo from './../assets/images/logo.png';
import menu from './../assets/images/icons/menu.svg';
import cross from './../assets/images/icons/cross.svg';

const Header = ({ className }) => {
    const [isVisible, setIsVisible] = useState(false);

    const openDiv = () => {
        setIsVisible(!isVisible);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const headerOffset = 100; // Adjust this value based on your header height
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });

            setIsVisible(false); // Close the mobile menu after click
        }
    };

    return (
        <div className={`fixed top-0 z-10 left-0 right-0 w-full bg-[#32314852] backdrop-blur-lg 2xl:px-0 xl:px-0 lg:px-0 md:px-16 sm:px-8 s:px-8`}>
            <div className={`${className}`}>
                <div className='flex justify-between py-6  2xl:pr-5 xl:pr-5 lg:pr-5 md:pr-5 sm:pr-0 s:pr-0'>
                    <div className='self-center'>
                        <img src={logo} alt='logo' />
                    </div>
                    {/* <div className='self-center 2xl:hidden xl:hidden lg:hidden md:hidden sm:block s:block'>
                        <img src={menu} onClick={openDiv} alt='menu' />
                    </div>
                    <div className='justify-between text-white self-center 2xl:flex xl:flex lg:flex md:flex sm:hidden s:hidden'>
                        <a onClick={() => scrollToSection('plan')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px] cursor-pointer'>Our Plans</a>
                        <a onClick={() => scrollToSection('about-us')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px] cursor-pointer'> About Us</a>
                        <a onClick={() => scrollToSection('why-us')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px] cursor-pointer'>Why Us</a>
                        <a onClick={() => scrollToSection('contact-us')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px] cursor-pointer'>Contact Us</a>
                        <a href="https://app.getcoverusa.com/" target='_blank' className='text-[#323148] 4xl:text-[20px] 3xl:text-[19px] 2xl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[12px] sm:text-[12px] s:text-[12px] font-semibold bg-white rounded-lg p-3 ml-5'>LOGIN</a>
                    </div>

                    {isVisible && (
                        <div className='fixed top-0 left-0 w-full h-screen bg-[#323148fa] backdrop-blur-2xl'>
                            <img src={cross} onClick={openDiv} className='ml-5 mt-5' alt='cross' />
                            <div className='mt-28  w-full  mx-auto'>
                                <p className='text-center my-5 text-white cursor-pointer' onClick={() => scrollToSection('plan')}>Our Plans</p>
                                <p className='text-center mb-5 text-white cursor-pointer' onClick={() => scrollToSection('about-us')}> About Us</p>
                                <p className='text-center mb-5 text-white cursor-pointer' onClick={() => scrollToSection('why-us')}>Why Us</p>
                                <p className='text-center mb-5 text-white cursor-pointer' onClick={() => scrollToSection('contact-us')}>Contact Us</p>
                                <p className='text-center my-5'><a href="https://app.getcoverusa.com/" target='_blank' className='text-[#323148] text-sm font-semibold bg-white rounded-lg p-3'>LOGIN</a></p>
                            </div>
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    )
}

export default Header;
