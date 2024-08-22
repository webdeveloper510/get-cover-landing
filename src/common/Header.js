import React from 'react'
import logo from './../assets/images/logo.png';
function Header() {
    return (
        <div className='flex justify-between py-6 pr-5'>
            <div className='self-center'>
                <img src={logo} alt='logo' />
            </div>
            <div className='flex justify-between text-white self-center'>
                <p className='ml-5 self-center text-base'>Our Plans</p>
                <p className='ml-5 self-center text-base'> About Us</p>
                <p className='ml-5 self-center text-base'>Why Us</p>
                <button className='text-black font-semibold bg-white rounded-lg p-3 ml-5'>Contact Us</button>
            </div>
        </div>
    )
}

export default Header
