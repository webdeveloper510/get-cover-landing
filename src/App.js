import { useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './App.css';


// -------------Component imported
import Header from './common/Header';
import Input from './common/Input';
import Footer from './common/Footer';

// -------------Media Images imported
import banner from './assets/images/banner.png';
import overlay from './assets/images/overlay.png';
import plainImage from './assets/images/K12 Education Plan.png';
import plainImage1 from './assets/images/Manufacturing Industry.png';
import plainImage2 from './assets/images/Reseller Extended Warranty.png';
import left from './assets/images/icons/left.svg';
import right from './assets/images/icons/right.svg';
import MobileIcon from './assets/images/Mobile.png';
import PowerIcon from './assets/images/Power.png';
import LaptopIcon from './assets/images/Laptop.png';
import GamingIcon from './assets/images/Gaming.png';
import HeadphoneIcon from './assets/images/Headphone.png';
import SmartwatchIcon from './assets/images/Smartwatch.png';
import FitnessIcon from './assets/images/Fitness.png';
import MajorIcon from './assets/images/Major.png';
import Time from './assets/images/Save Time.png';
import Money from './assets/images/Save Money.png';
import Hassles from './assets/images/Save Hassles.png';
import Why from './assets/images/Why Get.png';
import WhyUs from './assets/images/Why Choose US.png';
import image from './assets/images/Testimonials.png';
import FadeIn from './common/FadeIn';
import loader from './assets/images/loader.gif';



function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState('');
  const CarouselRef = useRef(null);
  const CarouselRef1 = useRef(null);
  const CarouselRef2 = useRef(null);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let imagesLoaded = 0;

    images.forEach((img) => {
      if (img.complete) {
        imagesLoaded++;
      } else {
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === images.length) {
            setLoading(false);
          }
        };
        img.onerror = () => {
          imagesLoaded++;
          if (imagesLoaded === images.length) {
            setLoading(false);
          }
        };
      }
    });

    if (imagesLoaded === images.length) {
      setLoading(false);
    }
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const responsive1 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      firstName,
      lastName,
      email,
      description,
    };

    try {
      const response = await fetch('https://api.getcoverusa.com/api-v1/user/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error('Failed to send message:', errorDetails);
        alert('Failed to send message. Please try again.');
        return;
      }

      const result = await response.json();
      console.log('Message sent successfully!', result);
      setShow(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setDescription('');
    } catch (error) {
      console.error('Error occurred while sending message:', error);
      alert('An error occurred. Please try again later.');
    }
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
    }
  };

  return (
    <>
      {loading ? <>
        <div className='fixed top-0 left-0 right-0 h-screen bg-black'>
          <div className='flex self-center h-screen'>
            <img src={loader} className='w-1/2 m-auto' alt='loading' />
          </div>
        </div></> : <>
        <Header className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto' />
        <div className='2xl:bg-full-bg xl:bg-full-bg lg:bg-tab-bg md:bg-tab-bg sm:bg-mobile-bg bg-mobile-bg bg-cover bg-no-repeat pt-[90px] 2xl:px-0 xl:px-0 lg:px-0 md:px-10 sm:px-6 s:px-6 '>
          <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto'>

            <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
              <div className='self-center 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center s:text-center'>
                <h1 className='4xl:text-[104px] 3xl:text-[72px] 2xl:text-[60px] xl:text-[60px] lg:text-[60px] md:text-[52px] sm:text-[42px] s:text-[38px] font-bold leading-none text-white'><span className='text-[#dacdffda]'> A New Era <br className='4xl:hidden 3xl:hidden 2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden' /> of </span> <br className='2xl:hidden xl:hidden lg:hidden md:block sm:hidden s:hidden' />  Warranty <br className='4xl:hidden 3xl:hidden 2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> Assurance</h1>
                <p className='text-[#dacdffda] 4xl:text-[50px] 3xl:text-[38px] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] md:text-[28px] sm:text-[28px] s:text-[28px] font-bold leading-none my-4'>Expertise You Can Trust, Assurance  <br className='2xl:block xl:block lg:hidden md:block sm:hidden s:hidden' />  You Can Rely On</p>
                <p className='text-[#dacdffda] 4xl:text-[40px] 3xl:text-[28px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] s:text-[18px] mb-8'>Premium Technology and Warranty Solutions,<br className='4xl:hidden 3xl:hidden 2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden' /> Enhanced <br className='2xl:hidden xl:hidden lg:hidden md:block sm:hidden s:hidden' /> by Financial Strength </p>
                <div className='2xl:flex xl:flex lg:flex md:hidden sm:hidden s:hidden'>
                  <p onClick={() => scrollToSection('plan')} className='bg-gradient 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px] font-semibold text-[#323148] py-4 px-12 rounded-lg '>Explore More</p>
                </div>
              </div>
              <div>
                <img className='mx-auto 2xl:w-auto xl:w-auto lg:w-auto md:w-[320px] sm:w-[320px] s:w-auto' src={banner} alt='Banner' />
              </div>
              <div className='text-center 2xl:hidden xl:hidden lg:hidden md:flex sm:flex s:flex pb-3 justify-center'>
                <p onClick={() => scrollToSection('plan')} className='bg-gradient 4xl:text-[35px] 3xl:text-[35px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px] font-semibold text-[#323148] py-4 px-12 rounded-lg'>Explore More</p>
              </div>

            </div>
          </FadeIn>
          <FadeIn className=' 2xl:mb-16 xl:mb-16 lg:mb-16 md:mb-12 sm:mb-8 s:mb-8 ' >
            <img className='object-cover w-full' src={overlay} alt='Overlay' />
          </FadeIn>
          <div id='plan' className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-16 xl:py-16 lg:py-16 md:py-12 sm:py-8 s:py-8' >
            <FadeIn className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
              <div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-1'>
                <h1 className=' 4xl:text-[45px] 3xl:text-[45px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[30px] s:text-[30px] font-bold leading-none my-4 text-white'>Our Featured <br /> Protection Plans</h1>
                <p className='text-[#B8AEDA] 4xl:text-[30px] 3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] leading-1 w-[75%]'>Our protection plans are designed to cover a wide range of products, from corporate equipment to home essentials.</p>
                <div className='flex mt-4'>
                  <p className='bg-gradient-to-r from-[#FFC7AD] to-[#FF9E9C] bg-clip-text text-transparent 4xl:text-[40px] 3xl:text-[40px] 2xl:text-[22px] xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[22px] s:text-[22px] font-bold'>Corporate Enterprise Protection Plans</p>
                  <div className='h-[1px] self-center my-auto bg-[#B8AEDA] w-[20%] ml-2'></div>
                </div>
              </div>
              <div className='2xl:col-span-1 xl:col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-1 4xl:hidden 3xl:hidden 2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden '></div>
            </FadeIn>
            <FadeIn className='grid 2xl:grid-cols-3 mt-10 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 s:grid-cols-1 gap-4'>
              <div className='col-span-1'>
                <div className='pr-5'>
                  <img className='mb-3' src={plainImage} alt='plainImage' />
                  <p className='bg-gradient-to-r from-[#FFC7AD] capitalize to-[#FF9E9C] bg-clip-text text-transparent 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] font-bold mb-3'>K12 Education Plan</p>
                  <h1 className='4xl:text-[30px] 3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] font-semibold text-white leading-tight capitalize'>Protect your school’s <br className='4xl:hidden 3xl:hidden 2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden' /> digital devices with our <br className='4xl:hidden 3xl:hidden 2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden' /> K12 Education Plans.</h1>
                  <p className='bg-gradient-to-r mb-3 from-[#ACA1DF] to-[#D8BCD2] bg-clip-text capitalize text-transparent 4xl:text-[25px] 3xl:text-[25px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px]'>Affordable plans, <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> comprehensive protection, <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> and reliable service.</p>
                  <div className='flex'>
                    <p onClick={() => scrollToSection('contact-us')} className='text-white 4xl:text-[20px] 3xl:text-[20px] 2xl:text-[11px] xl:text-[11px] lg:text-[11px] md:text-[11px] sm:text-[11px] s:text-[11px] border border-[#AB9CC0] py-2 px-5  rounded-lg'> Get Started Today</p>
                  </div>
                </div>
              </div>
              <div className='col-span-1'>
                <div className='pr-5'>
                  <img className='mb-3' src={plainImage1} alt='plainImage' />
                  <p className='bg-gradient-to-r from-[#FFC7AD] capitalize to-[#FF9E9C] bg-clip-text text-transparent 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] font-bold mb-3'>Manufacturing Industry</p>
                  <h1 className='4xl:text-[30px] 3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] font-semibold text-white capitalize leading-tight'>Let Get Cover handle your <br className='4xl:hidden 3xl:hidden 2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden' /> manufacturer's warranty, <br className='4xl:hidden 3xl:hidden 2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden' /> including product registration.</h1>
                  <p className='bg-gradient-to-r mb-3 from-[#ACA1DF] to-[#D8BCD2] bg-clip-text capitalize text-transparent 4xl:text-[25px] 3xl:text-[25px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px]'>Various plans, <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> Comprehensive protection, <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> and Easy Claim Process.</p>
                  <div className='flex'>
                    <p onClick={() => scrollToSection('contact-us')} className='text-white 4xl:text-[20px] 3xl:text-[20px] 2xl:text-[11px] xl:text-[11px] lg:text-[11px] md:text-[11px] sm:text-[11px] s:text-[11px] border border-[#AB9CC0] py-2 px-5 mt-3 rounded-lg'> Get Started Tody</p>
                  </div>
                </div>
              </div>
              <div className='col-span-1'>
                <div className=''>
                  <img className='mb-3' src={plainImage2} alt='plainImage' />
                  <p className='bg-gradient-to-r from-[#FFC7AD] capitalize to-[#FF9E9C] bg-clip-text text-transparent mt-6 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] font-bold mb-3'>Reseller Extended Warranty</p>
                  <h1 className='4xl:text-[30px] 3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] font-semibold text-white leading-tight capitalize'>Getcover Offers Comprehensive <br className='4xl:hidden 3xl:hidden 2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden' /> Protection Plans for Resellers to <br className='4xl:hidden 3xl:hidden 2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden' /> Resell Under Your Own Brand.</h1>
                  <p className='bg-gradient-to-r mb-3 from-[#ACA1DF] to-[#D8BCD2] capitalize bg-clip-text text-transparent 4xl:text-[25px] 3xl:text-[25px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px]'>Multiple Plans, Complete <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> Coverage, and a Hassle-Free <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> Claims Process.</p>
                  <div className='flex'>
                    <div onClick={() => scrollToSection('contact-us')} className='text-white 4xl:text-[20px] w-auto mr-auto 3xl:text-[20px] 2xl:text-[11px] xl:text-[11px] lg:text-[11px] md:text-[11px] sm:text-[11px] s:text-[11px] border border-[#AB9CC0] py-2 px-5 mt-3 rounded-lg'> Get Started Tody</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-16 xl:py-16 lg:py-16 md:py-12 sm:py-8 s:py-8'>
            <div className='flex justify-between'>
              <p className='4xl:text-[50px] 3xl:text-[50px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] s:text-[35px] font-bold leading-none text-white '>Essential Gadgets <br /> Protection Plans</p>
              <div className='self-center flex 2xl:block xl:block lg:block md:hidden sm:hidden s:hidden'>
                <button className='self-center' onClick={() => CarouselRef.current.previous()}>
                  <img src={left} className='w-10 h-10 mr-4  mx-auto opacity-50 hover:opacity-100' alt='left' />
                </button>
                <button className='self-center' onClick={() => CarouselRef.current.next()}>
                  <img src={right} className='w-10 h-10 mr-4 opacity-50 mx-auto hover:opacity-100' alt='right' />
                </button>
              </div>
            </div>
            <div className='my-10'>
              <div className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden'>
                <Carousel
                  responsive={responsive}
                  arrows={false}
                  infinite={true}
                  renderDotsOutside={true}
                  ref={CarouselRef}
                >
                  <div className='mx-3'>
                    <div className='bg-Mobile bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                      <div className='flex pl-4'>
                        <div className='self-center w-[30%]'>
                          <img className='mx-auto' src={MobileIcon} alt='mobile' />
                        </div>
                        <p className='text-white 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px] '>Mobile Protection <br /> Plans</p>
                      </div>
                    </div>
                    <div className='bg-Headphone bg-cover bg-no-repeat px-4 py-7 rounded-[20px]'>
                      <div className='flex pl-4'>
                        <div className='self-center w-[30%]'>
                          <img className='mx-auto' src={HeadphoneIcon} alt='Headphone' />
                        </div>
                        <p className='text-white  4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]'>Headphone  <br /> Protection</p>
                      </div>
                    </div>
                  </div>
                  <div className='mx-3'>
                    <div className='bg-Power bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                      <div className='flex pl-4'>
                        <div className='self-center w-[30%]'>
                          <img className='mx-auto' src={PowerIcon} alt='Power' />
                        </div>
                        <p className='text-white 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]'>Power Tool  <br /> Protection</p>
                      </div>
                    </div>
                    <div className='bg-Smartwatch bg-cover bg-no-repeat px-4 py-7 rounded-[20px]'>
                      <div className='flex pl-4'>
                        <div className='self-center w-[30%]'>
                          <img className='mx-auto' src={SmartwatchIcon} alt='Smartwatch' />
                        </div>
                        <p className='text-white 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]'>Smartwatch  <br /> Protection</p>
                      </div>
                    </div>
                  </div>
                  <div className='mx-3'>
                    <div className='bg-Laptop bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                      <div className='flex pl-4'>
                        <div className='self-center w-[30%]'>
                          <img className='mx-auto' src={LaptopIcon} alt='Laptop' />
                        </div>
                        <p className='text-white 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]'>Laptop  <br /> Protection</p>
                      </div>
                    </div>
                    <div className='bg-Fitness bg-cover bg-no-repeat px-4 py-7 rounded-[20px]'>
                      <div className='flex pl-4'>
                        <div className='self-center w-[30%]'>
                          <img className='mx-auto' src={FitnessIcon} alt='Fitness' />
                        </div>
                        <p className='text-white 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]'>Fitness Equipment  <br /> Protection</p>
                      </div>
                    </div>
                  </div>
                  <div className='mx-3'>
                    <div className='bg-Gaming bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                      <div className='flex pl-4'>
                        <div className='self-center w-[30%]'>
                          <img className='mx-auto' src={GamingIcon} alt='Gaming' />
                        </div>
                        <p className='text-white 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]'>Gaming Console  <br /> Protection</p>
                      </div>
                    </div>
                    <div className='bg-Major bg-cover bg-no-repeat px-4 py-7 rounded-[20px]'>
                      <div className='flex pl-4'>
                        <div className='self-center w-[30%]'>
                          <img className='mx-auto' src={MajorIcon} alt='Major' />
                        </div>
                        <p className='text-white 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]'>Major Appliance  <br /> Protection</p>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
              <div className='2xl:hidden xl:hidden lg:hidden md:block sm:block s:block'>
                <Carousel
                  responsive={responsive}
                  arrows={false}
                  infinite={true}
                  renderDotsOutside={true}
                  ref={CarouselRef1}
                >
                  <div className='mx-3'>
                    <div className='bg-Mobile bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                      <div className='flex pl-4'>
                        <div className='self-center w-[30%]'>
                          <img className='mx-auto' src={MobileIcon} alt='mobile' />
                        </div>
                        <p className='text-white 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]'>Mobile Protection <br /> Plans</p>
                      </div>
                    </div>
                    <div className='bg-Headphone bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                      <div className='flex pl-4'>
                        <div className='self-center w-[30%]'>
                          <img className='mx-auto' src={HeadphoneIcon} alt='Headphone' />
                        </div>
                        <p className='text-white 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]'>Headphone  <br /> Protection</p>
                      </div>
                    </div>

                    <div className='bg-Power bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                      <div className='flex pl-4'>
                        <div className='self-center w-[30%]'>
                          <img className='mx-auto' src={PowerIcon} alt='Power' />
                        </div>
                        <p className='text-white 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]'>Power Tool  <br /> Protection</p>
                      </div>
                    </div>
                    <div className='bg-Smartwatch bg-cover bg-no-repeat px-4 py-7 rounded-[20px]'>
                      <div className='flex pl-4'>
                        <div className='self-center w-[30%]'>
                          <img className='mx-auto' src={SmartwatchIcon} alt='Smartwatch' />
                        </div>
                        <p className='text-white 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]'>Smartwatch  <br /> Protection</p>
                      </div>
                    </div>
                  </div>
                  <div className='mx-3'>
                    <div className='bg-Laptop bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                      <div className='flex pl-4'>
                        <div className='self-center w-[30%]'>
                          <img className='mx-auto' src={LaptopIcon} alt='Laptop' />
                        </div>
                        <p className='text-white 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]'>Laptop  <br /> Protection</p>
                      </div>
                    </div>
                    <div className='bg-Fitness bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                      <div className='flex pl-4'>
                        <div className='self-center w-[30%]'>
                          <img className='mx-auto' src={FitnessIcon} alt='Fitness' />
                        </div>
                        <p className='text-white 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]'>Fitness Equipment  <br /> Protection</p>
                      </div>
                    </div>

                    <div className='bg-Gaming bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                      <div className='flex pl-4'>
                        <div className='self-center w-[30%]'>
                          <img className='mx-auto' src={GamingIcon} alt='Gaming' />
                        </div>
                        <p className='text-white 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]'>Gaming Console  <br /> Protection</p>
                      </div>
                    </div>
                    <div className='bg-Major bg-cover bg-no-repeat px-4 py-7 rounded-[20px]'>
                      <div className='flex pl-4'>
                        <div className='self-center w-[30%]'>
                          <img className='mx-auto' src={MajorIcon} alt='Major' />
                        </div>
                        <p className='text-white 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]'>Major Appliance  <br /> Protection</p>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>

          </FadeIn>
          <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-12 xl:py-12 lg:py-12 md:py-10 sm:py-8 s:py-8'>
            <p className='4xl:text-[50px] 3xl:text-[50px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] s:text-[35px] font-bold leading-none text-white '>Get Cover truly  <br /> cares for you</p>
            <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 s:grid-cols-1 gap-4 my-12 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center s:text-center'>
              <div className=' 2xl:flex xl:flex lg:flex md:flex sm:block s:block col-span-1 '>
                <div className='self-center '>
                  <img className='4xl:w-[120px] 3xl:w-[120px] 2xl:w-[90px] xl:w-[90px] lg:w-[90px] md:w-[90px] sm:w-[90px] s:w-[90px]
                  4xl:h-[120px] 3xl:h-[120px] 2xl:h-[90px] xl:h-[90px] lg:h-[90px] md:h-[90px] sm:h-[90px] s:h-[90px]
                  mx-auto' src={Time} alt='Save Time' />
                </div>
                <div className='self-center'>
                  <h1 className='text-white font-semibold 4xl:text-[40px] 3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px]'>Save Time</h1>
                  <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent 4xl:text-[26px] 3xl:text-[19px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] font-bold mb-3'>One click is all it <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> takes. We take <br className='2xl:hidden xl:hidden lg:hidden md:block sm:block s:block' /> care  of <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> the rest</p>
                </div>
              </div>
              <div className='2xl:flex xl:flex lg:flex md:flex sm:block s:block 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center s:text-center col-span-1'>
                <div className='self-center '>
                  <img className='4xl:w-[120px] 3xl:w-[120px] 2xl:w-[90px] xl:w-[90px] lg:w-[90px] md:w-[90px] sm:w-[90px] s:w-[90px]
                  4xl:h-[120px] 3xl:h-[120px] 2xl:h-[90px] xl:h-[90px] lg:h-[90px] md:h-[90px] sm:h-[90px] s:h-[90px] mx-auto' src={Money} alt='Save Money' />
                </div>
                <div className='self-center'>
                  <h1 className='text-white font-semibold 4xl:text-[40px] 3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px]'>Save Money</h1>
                  <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent 4xl:text-[26px] 3xl:text-[19px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] font-bold mb-3'>Avoid heavy <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> repair <br className='2xl:hidden xl:hidden lg:hidden md:block sm:block s:block' /> & replacement<br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> costs</p>
                </div>
              </div>
              <div className='2xl:flex xl:flex lg:flex md:flex sm:block s:block 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 s:col-span-1 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center s:text-center self-center'>
                <div className='self-center'>
                  <img className='4xl:w-[120px] 3xl:w-[120px] 2xl:w-[90px] xl:w-[90px] lg:w-[90px] md:w-[90px] sm:w-[90px] s:w-[90px]
                  4xl:h-[120px] 3xl:h-[120px] 2xl:h-[90px] xl:h-[90px] lg:h-[90px] md:h-[90px] sm:h-[90px] s:h-[90px] mx-auto' src={Hassles} alt='Save Hassles' />
                </div>
                <div className='w-[75%] self-center 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0 sm:mx-auto s:mx-auto'>
                  <h1 className='text-white font-semibold 4xl:text-[40px] 3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px]'>Save Hassles</h1>
                  <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent 4xl:text-[26px] 3xl:text-[19px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] font-bold mb-3'>No more waiting on hold or running <br className='4xl:hidden 3xl:hidden 2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden' /> around finding out of
                    the area repair <br className='4xl:hidden 3xl:hidden 2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden' /> centers in case things go wrong</p>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-12 xl:py-16 lg:py-16 md:py-12 sm:py-8 s:py-8'>
            <div className='grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6 gap-4'>
              <div className='2xl:col-span-5 xl:col-span-5 lg:col-span-5 md:col-span-5 sm:col-span-6 2xl:order-1 xl:order-1 lg:order-1 md:order-1 sm:order-2 s:order-2 self-center'>
                <div className='2xl:block xl:block lg:block md:block sm:hidden s:hidden'>
                  <h1 className='4xl:text-[50px] 3xl:text-[50px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] s:text-[35px] font-bold 4xl:leading-[55px] 3xl:leading-[55px] 2xl:leading-[40px] xl:leading-[40px] lg:leading-[40px] md:leading-[40px] sm:leading-[40px] s:leading-[40px] text-white mb-3'>Why Get Device <br /> Protection Plans?</h1>
                  <p className='4xl:text-[30px] 3xl:text-[24px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] s:text-[18px] text-[#B8AEDA] 4xl:leading-[35px] 3xl:leading-[30px] 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] md:leading-[24px] sm:leading-[24px] s:leading-[24px] mb-8'>One major benefit of having a device <br /> protection plan is saving money on expensive <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> repairs that safeguards against damage, <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> loss, and malfunctions.</p>
                </div>
                <div className='mb-6'>
                  <h1 className='text-white 4xl:text-[30px] 3xl:text-[30px] 2xl:text-[21px] xl:text-[21px] lg:text-[21px] md:text-[21px] sm:text-[21px] s:text-[21px] font-bold'>Repair Plans</h1>
                  <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent 4xl:text-[24px] 3xl:text-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] font-bold mb-3'>Efficient and effective solutions for fixing your <br /> products, ensuring they work like new.</p>
                </div>
                <div className='mb-6'>
                  <h1 className='text-white 4xl:text-[30px] 3xl:text-[30px] 2xl:text-[21px] xl:text-[21px] lg:text-[21px] md:text-[21px] sm:text-[21px] s:text-[21px] font-bold'>Replacement Plans</h1>
                  <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent  4xl:text-[24px] 3xl:text-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] font-bold mb-3'>Get Cover offers warranty programs that <br /> replace products versus repair.</p>
                </div>
                <div className='mb-6'>
                  <h1 className='text-white 4xl:text-[30px] 3xl:text-[30px] 2xl:text-[21px] xl:text-[21px] lg:text-[21px] md:text-[21px] sm:text-[21px] s:text-[21px] font-bold'>Accidental Damage Plans</h1>
                  <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent 4xl:text-[24px] 3xl:text-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] font-bold mb-3'>Finding skilled and experienced technicians <br /> for appliance repairs can be
                    difficult.
                  </p>
                </div>
              </div>
              <div className='2xl:col-span-7 xl:col-span-7 lg:col-span-7 md:col-span-7 sm:col-span-6 2xl:order-2 xl:order-2 lg:order-2 md:order-2	sm:order-1 s:order-1'>
                <div className='self-center'>
                  <div className='2xl:hidden xl:hidden lg:hidden md:hidden sm:block s:block'>
                    <h1 className='4xl:text-[50px] 3xl:text-[50px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] s:text-[35px] font-bold leading-[40px] text-white mb-3'>Why Get Device <br /> Protection Plans?</h1>
                    <p className='text-lg text-[#B8AEDA] leading-[24px] mb-8'>One major benefit of having a device <br /> protection plan is saving money on expensive <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> repairs that safeguards against damage, <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> loss, and malfunctions.</p>
                  </div>
                  <img className='mx-auto' src={Why} alt='Why Get' />
                </div>
              </div>
            </div>
          </FadeIn>
          <div id='about-us'></div>
          <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-16 xl:py-16 lg:py-16 md:py-12 sm:py-8 s:py-8' >
            <div className='bg-About bg-cover bg-no-repeat text-center 2xl:p-16 xl:p-16 lg:p-16 md:p-12 sm:p-8 s:p-8 rounded-[16px]'>
              <h1 className='text-white 4xl:text-[45px] 3xl:text-[45px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[30px] s:text-[30px] font-bold mb-5'>About Us</h1>
              <p className='text-center 4xl:w-[83%] 3xl:w-[83%] 2xl:w-[73%] xl:w-[73%] lg:w-[73%] md:[80%] sm:w-[95%] s:w-[95%] 4xl:text-[30px] 3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] mx-auto text-[#B8AEDA]'><span className='text-white font-bold'> GetCover </span> is an InsureTech leader, delivering innovative warranty and technology solutions for businesses and individuals. Backed by the resources and global expertise of <a href="https://nfgsa.com/" className='text-[#fff] ' target='_blank'> Newpoint Financial Group </a> , we ensure reliable and efficient services across North America, Europe, Africa, and the Middle East. Our mission is to offer peace of mind with comprehensive and dependable coverage.</p>
            </div>
          </FadeIn>
          <FadeIn className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-16 xl:py-16 lg:py-16 md:py-12 sm:py-8 s:py-8 ' >
            <div className='2xl:flex xl:flex lg:flex md:flex sm:block s:block 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center s:text-center justify-between py-10 ' >
              <h1 className='text-[40px] font-bold leading-[48px] text-[#B8AEDB]'>To experience the <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> <span className='text-white'> GetCover </span> difference.</h1>
              <div className='h-[1px] 2xl:my-0 xl:my-0 lg:my-0 md:my-0 sm:my-3 s:my-5 self-center mx-auto bg-[#B8AEDA] w-[40%] xl:ml-2'></div>
              <div className='self-center'>
                <button className='font-semibold text-[#323148] bg-white 4xl:text-[26px] 3xl:text-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] rounded-lg px-5 py-4 ml-5'>Book An Appointment</button>
              </div>
            </div>
          </FadeIn>
          <div id="why-us"></div>
          <FadeIn className='pt-12'>
            <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pb-12 gap-4' >
              <div className='self-center'>
                <div className='2xl:hidden xl:hidden lg:hidden md:hidden sm:block s:block'>
                  <h1 className='4xl:text-[50px] 3xl:text-[50px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] s:text-[35px] font-bold leading-[40px] text-white mb-3'>Why Choose US</h1>
                  <p className='text-lg text-[#B8AEDA] leading-[24px] mb-8'>Get Cover protection plans are transparent and based on what you value most. We offer a  true technology solution backed by the strength of Newpoint Financial Group.</p>
                </div>
                <img className='mx-auto' src={WhyUs} alt='Why Us' />
              </div>
              <div>
                <div className='2xl:block xl:block lg:block md:block sm:hidden s:hidden'>
                  <h1 className='4xl:text-[50px] 3xl:text-[50px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] s:text-[35px] font-bold leading-[40px] text-white mb-3'>Why Choose US</h1>
                  <p className='4xl:text-[30px] 3xl:text-[30px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] s:text-[18px] text-[#B8AEDA] 4xl:leading-[35px] 3xl:leading-[35px] 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] md:leading-[24px] sm:leading-[24px] s:leading-[24px] mb-8'>Get Cover protection plans are transparent and based on what you value most. We offer a  true technology solution backed by the strength of Newpoint Financial Group.</p>
                </div>
                <div className='mb-6'>
                  <h1 className='text-white 4xl:text-[30px] 3xl:text-[30px] 2xl:text-[21px] xl:text-[21px] lg:text-[21px] md:text-[21px] sm:text-[21px] s:text-[21px] font-bold'>Easy Claims Process</h1>
                  <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] font-bold mb-3'>Streamline your claims with a hassle-free,<br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> straightforward procedure.</p>
                </div>
                <div className='mb-6'>
                  <h1 className='text-white 4xl:text-[30px] 3xl:text-[30px] 2xl:text-[21px] xl:text-[21px] lg:text-[21px] md:text-[21px] sm:text-[21px] s:text-[21px] font-bold'>Better Customer Support</h1>
                  <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] font-bold mb-3'>Receive quick assistance with a responsive and <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> helpful support team.</p>
                </div>
                <div className='mb-6'>
                  <h1 className='text-white 4xl:text-[30px] 3xl:text-[30px] 2xl:text-[21px] xl:text-[21px] lg:text-[21px] md:text-[21px] sm:text-[21px] s:text-[21px] font-bold'>Multiple Option Plans</h1>
                  <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] font-bold mb-3'>Enjoy multiple option warranty plans with a variety of terms and coverage, including accidental damage from handling ADH</p>
                </div>
                <button className='font-semibold text-[#323148] bg-white rounded-lg 4xl:text-[26px] 3xl:text-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] px-5 py-4'>Learn More</button>
              </div>
            </div>
          </FadeIn>
          <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-14 xl:py-14 lg:py-14 md:py-10 sm:py-8 s:py-8'>
            <h1 className='text-[40px] font-bold text-center leading-[48px] text-white'>Testimonials</h1>
            <Carousel
              responsive={responsive1}
              arrows={false}
              infinite={true}
              renderDotsOutside={true}
              ref={CarouselRef2}
            >

              <div className='grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6 gap-4 2xl:my-8 xl:my-8 lg:my-8 md:my-6 sm:my-4 s:my-4'>

                <div className='col-span-6 self-center 2xl:order-1 xl:order-1 lg:order-1 md:order-1	sm:order-2 s:order-2'>
                  <div>
                    <p className='text-[#B8AEDA] 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] '>“ I’ve used many warranty services but my experience with
                      Get Cover was very fast and easy to understand ”</p>
                    <h1 className='my-5 4xl:text-[35px] 3xl:text-[35px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] text-white font-bold'>Patricia</h1>
                    <div className='self-center flex'>
                      <img src={left} onClick={() => CarouselRef2.current.previous()} className='w-4 h-4 mr-4 cursor-pointer opacity-50 hover:opacity-100' alt='left' />
                      <img src={right} onClick={() => CarouselRef2.current.next()} className='w-4 h-4 mr-4 cursor-pointer opacity-50 hover:opacity-100' alt='right' />
                    </div>
                  </div>
                </div>
                <div className='col-span-6 2xl:order-2 xl:order-2 lg:order-2 md:order-2	sm:order-1 s:order-1'>
                  <img src={image} className='w-[200px] mx-auto' alt='Images' />
                </div>
              </div>
              <div className='grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6 gap-4 2xl:my-8 xl:my-8 lg:my-8 md:my-6 sm:my-4 s:my-4'>

                <div className='col-span-6 self-center 2xl:order-1 xl:order-1 lg:order-1 md:order-1	sm:order-2 s:order-2'>
                  <div>
                    <p className='text-[#B8AEDA] 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] '>“ I’ve used many warranty services but my experience with
                      Get Cover was very fast and easy to understand ”</p>
                    <h1 className='my-5 4xl:text-[40px] 3xl:text-[40px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] text-white font-bold'>Patricia</h1>
                    <div className='self-center flex'>
                      <img src={left} onClick={() => CarouselRef2.current.previous()} className='w-4 h-4 mr-4 cursor-pointer opacity-50 hover:opacity-100' alt='left' />
                      <img src={right} onClick={() => CarouselRef2.current.next()} className='w-4 h-4 mr-4 cursor-pointer opacity-50 hover:opacity-100' alt='right' />
                    </div>
                  </div>
                </div>
                <div className='col-span-6 2xl:order-2 xl:order-2 lg:order-2 md:order-2	sm:order-1 s:order-1'>
                  <img src={image} className='w-[200px] mx-auto' alt='Images' />
                </div>
              </div>
              <div className='grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6 gap-4 2xl:my-8 xl:my-8 lg:my-8 md:my-6 sm:my-4 s:my-4'>

                <div className='col-span-6 self-center 2xl:order-1 xl:order-1 lg:order-1 md:order-1	sm:order-2 s:order-2'>
                  <div>
                    <p className='text-[#B8AEDA] 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] '>“ I’ve used many warranty services but my experience with
                      Get Cover was very fast and easy to understand ”</p>
                    <h1 className='my-5 4xl:text-[35px] 3xl:text-[35px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] text-white font-bold'>Patricia</h1>
                    <div className='self-center flex'>
                      <img src={left} onClick={() => CarouselRef2.current.previous()} className='w-4 h-4 mr-4 cursor-pointer opacity-50 hover:opacity-100' alt='left' />
                      <img src={right} onClick={() => CarouselRef2.current.next()} className='w-4 h-4 mr-4 cursor-pointer opacity-50 hover:opacity-100' alt='right' />
                    </div>
                  </div>
                </div>
                <div className='col-span-6 2xl:order-2 xl:order-2 lg:order-2 md:order-2	sm:order-1 s:order-1'>
                  <img src={image} className='w-[200px] mx-auto' alt='Images' />
                </div>
              </div>
              <div className='grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6 gap-4 2xl:my-8 xl:my-8 lg:my-8 md:my-6 sm:my-4 s:my-4'>

                <div className='col-span-6 self-center 2xl:order-1 xl:order-1 lg:order-1 md:order-1	sm:order-2 s:order-2'>
                  <div>
                    <p className='text-[#B8AEDA] 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] '>“ I’ve used many warranty services but my experience with
                      Get Cover was very fast and easy to understand ”</p>
                    <h1 className='my-5 4xl:text-[35px] 3xl:text-[35px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] text-white font-bold'>Patricia</h1>
                    <div className='self-center flex'>
                      <img src={left} onClick={() => CarouselRef2.current.previous()} className='w-4 h-4 mr-4 cursor-pointer opacity-50 hover:opacity-100' alt='left' />
                      <img src={right} onClick={() => CarouselRef2.current.next()} className='w-4 h-4 mr-4 cursor-pointer opacity-50 hover:opacity-100' alt='right' />
                    </div>
                  </div>
                </div>
                <div className='col-span-6 2xl:order-2 xl:order-2 lg:order-2 md:order-2	sm:order-1 s:order-1'>
                  <img src={image} className='w-[200px] mx-auto' alt='Images' />
                </div>
              </div>
              <div className='grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6 gap-4 2xl:my-8 xl:my-8 lg:my-8 md:my-6 sm:my-4 s:my-4'>

                <div className='col-span-6 self-center 2xl:order-1 xl:order-1 lg:order-1 md:order-1	sm:order-2 s:order-2'>
                  <div>
                    <p className='text-[#B8AEDA] 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] '>“ I’ve used many warranty services but my experience with
                      Get Cover was very fast and easy to understand ”</p>
                    <h1 className='my-5 4xl:text-[35px] 3xl:text-[35px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] text-white font-bold'>Patricia</h1>
                    <div className='self-center flex'>
                      <img src={left} onClick={() => CarouselRef2.current.previous()} className='w-4 h-4 mr-4 cursor-pointer opacity-50 hover:opacity-100' alt='left' />
                      <img src={right} onClick={() => CarouselRef2.current.next()} className='w-4 h-4 mr-4 cursor-pointer opacity-50 hover:opacity-100' alt='right' />
                    </div>
                  </div>
                </div>
                <div className='col-span-6 2xl:order-2 xl:order-2 lg:order-2 md:order-2	sm:order-1 s:order-1'>
                  <img src={image} className='w-[200px] mx-auto' alt='Images' />
                </div>
              </div>
              <div className='grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6 gap-4 2xl:my-8 xl:my-8 lg:my-8 md:my-6 sm:my-4 s:my-4'>

                <div className='col-span-6 self-center 2xl:order-1 xl:order-1 lg:order-1 md:order-1	sm:order-2 s:order-2'>
                  <div>
                    <p className='text-[#B8AEDA] 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] '>“ I’ve used many warranty services but my experience with
                      Get Cover was very fast and easy to understand ”</p>
                    <h1 className='my-5 4xl:text-[35px] 3xl:text-[35px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] text-white font-bold'>Patricia</h1>
                    <div className='self-center flex'>
                      <img src={left} onClick={() => CarouselRef2.current.previous()} className='w-4 h-4 mr-4 cursor-pointer opacity-50 hover:opacity-100' alt='left' />
                      <img src={right} onClick={() => CarouselRef2.current.next()} className='w-4 h-4 mr-4 cursor-pointer opacity-50 hover:opacity-100' alt='right' />
                    </div>
                  </div>
                </div>
                <div className='col-span-6 2xl:order-2 xl:order-2 lg:order-2 md:order-2	sm:order-1 s:order-1'>
                  <img src={image} className='w-[200px] mx-auto' alt='Images' />
                </div>
              </div>
            </Carousel>

          </FadeIn>
          <div id='contact-us'></div>
          <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto 2xl:py-14 xl:py-14 lg:py-14 md:py-10 sm:py-8 s:py-8' >
            <div className='bg-Contact bg-cover bg-no-repeat rounded-[16px]'>
              <div className='grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 gap-4 2xl:p-12 xl:p-12 lg:p-12 md:p-10 sm:p-8 s:p-8'>
                <div className='2xl:col-span-5 xl:col-span-5 lg:col-span-5 md:col-span-6 sm:col-span-6  self-center'>
                  <p className='2xl:text-[50px] xl:text-[45px] lg:text-[45px] md:text-[32px] sm:text-[28px] s:text-[28px] text-white 2xl:leading-[55px] xl:leading-[50px] lg:leading-[50px] md:leading-[37px] sm:leading-[32px] s:leading-[32px]  font-bold'>Are you ready to Get Covered? Contact Us</p>
                </div>
                <div className='2xl:col-span-7 xl:col-span-7 lg:col-span-7 md:col-span-6 sm:col-span-6 '>
                  <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-2 gap-4'>
                      <div className='2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 s:col-span-2'>
                        <Input
                          name='firstName'
                          value={firstName}
                          required
                          type='text'
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="First Name" />
                      </div>
                      <div className='2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 s:col-span-2'>
                        <Input
                          type='text'
                          name='lastName'
                          required
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      <div className='col-span-2'>
                        <Input
                          type='email'
                          name='email'
                          required
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className='col-span-2'>
                        <Input
                          type='text'
                          name='description'
                          placeholder="How We Can Help You?"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                      <div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-2 s:col-span-2 flex'>
                        <button type='submit' className='font-semibold text-[#323148] bg-white rounded-lg 4xl:text-[26px] 3xl:text-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px]  px-5 py-4'>Send Message</button>
                        {show && <p className='self-center pl-5 text-[#feb0a3] text-lg' >Message sent successfully!</p>}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </FadeIn>
          <div className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto'>
            <Footer />
          </div>
        </div>
      </>}

    </>

  );
}

export default App;
