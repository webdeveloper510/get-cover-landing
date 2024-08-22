import React from 'react'
import logo from './../assets/images/logo.png';
import Linked from './../assets/images/icons/Link.svg';
import Insta from './../assets/images/icons/Insta.svg';
import FaceBook from './../assets/images/icons/faceBook.svg';
import Twitter from './../assets/images/icons/twitter.svg';

function Footer() {
    return (
        <div className='flex justify-between py-6 pr-5 border-t border-[#B8AEDA]'>
            <div className='self-center'>
                <img src={logo} alt='logo' />
            </div>
            <div className=' self-center'>
                <p className='self-center text-base text-[#B8AEDA]'>Copyright © 2023-2024 GetCover Company. All rights reserved.</p>
                <p className="text-base text-[#B8AEDA] font-medium text-center " style={{ bottom: '20px' }}>Design, Develop & Maintain by <a href="https://codenomad.net/" className="underline text-light-black" target="_blank">Codenomad.net </a></p>
            </div>
            <div className='flex'>
                <img src={Linked} alt='Linked' />
                <img src={FaceBook} alt='FaceBook' />
                <img src={Twitter} alt='Twitter' />
                <img src={Insta} alt='Insta' />
            </div>
        </div>
    )
}

export default Footer
