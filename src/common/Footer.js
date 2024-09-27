import React from "react";
import logo from "./../assets/images/Logo.png";
import Linked from "./../assets/images/icons/Link.svg";
import Insta from "./../assets/images/icons/Insta.svg";
import FaceBook from "./../assets/images/icons/faceBook.svg";
import Twitter from "./../assets/images/icons/twitter.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex justify-end py-3">
        <Link
          to="/financial"
          className="text-[#B8AEDA] border-r-2 border-[#B8AEDA] pr-5"
        >
          Financial{" "}
        </Link>
        <Link
          to="/terms-and-conditions"
          className="text-[#B8AEDA] border-r-2 border-[#B8AEDA] px-5"
        >
          Terms & Conditions{" "}
        </Link>
        <Link to="/privacy-policy" className="text-[#B8AEDA] pl-5">
          {" "}
          Privacy Policy
        </Link>
      </div>
      <div className="2xl:flex xl:flex lg:flex md:hidden sm:hidden s:hidden justify-between py-6 pr-5 border-t border-[#B8AEDA]">
        <div className="self-center">
          <img src={logo} className="w-[158px]" alt="logo" />
        </div>
        <div className=" self-center">
          <p className="self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px] text-[#B8AEDA]">
            Copyright © 2023-2024 GetCover Company. All rights reserved.
          </p>
          {/* <p className="4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px] text-[#B8AEDA] font-medium text-center " style={{ bottom: '20px' }}>Design, Develop & Maintain by <a rel="noreferrer" href="https://codenomad.net/" className='text-[#fff] ' target="_blank">Codenomad India </a></p> */}
        </div>
        <div className="flex">
          <img src={Linked} alt="Linked" />
          <img src={FaceBook} alt="FaceBook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Insta} alt="Insta" />
        </div>
      </div>
      <div className="2xl:hidden xl:hidden lg:hidden md:block sm:block s:block  py-6 pr-5 border-t border-[#B8AEDA]">
        <div className="2xl:flex xl:flex lg:flex md:flex sm:block s:block justify-between text-center">
          <div className="self-center">
            <img src={logo} className="mx-auto" alt="logo" />
          </div>
          <div className="flex justify-around my-3">
            <img src={Linked} className="w-14 h-14" alt="Linked" />
            <img src={FaceBook} className="w-14 h-14" alt="FaceBook" />
            <img src={Twitter} className="w-14 h-14" alt="Twitter" />
            <img src={Insta} className="w-14 h-14" alt="Insta" />
          </div>
        </div>
        <div className=" text-center mt-4">
          <p className="self-center text-base text-[#B8AEDA]">
            Copyright © 2023-2024 GetCover Company. All rights reserved.
          </p>
          {/* <p className="text-base text-[#B8AEDA] font-medium text-center " style={{ bottom: '20px' }}>Design, Develop & Maintain by <a href="https://codenomad.net/" rel="noreferrer" className='!text-[#ffff] ' target="_blank">Codenomad India </a></p> */}
        </div>
      </div>
    </>
  );
}

export default Footer;
