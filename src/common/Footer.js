import React from 'react'
import logo from './../assets/images/logo.png';
import Linked from './../assets/images/icons/Link.svg';
import Insta from './../assets/images/icons/Insta.svg';
import FaceBook from './../assets/images/icons/faceBook.svg';
import Twitter from './../assets/images/icons/twitter.svg';

function Footer() {
    return (
        <>
            <div className='2xl:flex xl:flex lg:flex md:hidden sm:hidden s:hidden justify-between py-6 pr-5 border-t border-[#B8AEDA]'>
                <div className='self-center'>
                    <img src={logo} alt='logo' />
                </div>
                <div className=' self-center'>
                    <p className='self-center text-base text-[#B8AEDA]'>Copyright © 2023-2024 GetCover Company. All rights reserved.</p>
                    <p className="text-base text-[#B8AEDA] font-medium text-center " style={{ bottom: '20px' }}>Design, Develop & Maintain by <a href="https://codenomad.net/" className='text-[#fff] ' target="_blank">Codenomad India </a></p>
                </div>
                <div className='flex'>
                    <img src={Linked} alt='Linked' />
                    <img src={FaceBook} alt='FaceBook' />
                    <img src={Twitter} alt='Twitter' />
                    <img src={Insta} alt='Insta' />
                </div>
            </div>
            <div className='2xl:hidden xl:hidden lg:hidden md:block sm:block s:block  py-6 pr-5 border-t border-[#B8AEDA]'>
                <div className='2xl:flex xl:flex lg:flex md:flex sm:block s:block justify-between text-center'>
                    <div className='self-center'>
                        <img src={logo} className='mx-auto' alt='logo' />
                    </div>
                    <div className='flex justify-around my-3'>
                        <img src={Linked} className='w-14 h-14' alt='Linked' />
                        <img src={FaceBook} className='w-14 h-14' alt='FaceBook' />
                        <img src={Twitter} className='w-14 h-14' alt='Twitter' />
                        <img src={Insta} className='w-14 h-14' alt='Insta' />
                    </div>
                </div>
                <div className=' text-center mt-4'>
                    <p className='self-center text-base text-[#B8AEDA]'>Copyright © 2023-2024 GetCover Company. All rights reserved.</p>
                    <p className="text-base text-[#B8AEDA] font-medium text-center " style={{ bottom: '20px' }}>Design, Develop & Maintain by <a href="https://codenomad.net/" className='!text-[#ffff] ' target="_blank">Codenomad India </a></p>
                </div>
            </div>
        </>
    )
}

export default Footer
