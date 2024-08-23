import { useRef } from 'react';
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




function App() {
  const CarouselRef = useRef(null);
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
  return (
    <>
      <Header className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto' />
      <div className='2xl:bg-full-bg xl:bg-full-bg lg:bg-tab-bg md:bg-tab-bg sm:bg-mobile-bg bg-mobile-bg bg-cover bg-no-repeat pt-[90px] 2xl:px-0 xl:px-0 lg:px-0 md:px-10 sm:px-6 s:px-6 '>
        <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto'>

          <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
            <div className='self-center 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center s:text-center'>
              <h1 className='2xl:text-[60px] xl:text-[60px] lg:text-[60px] md:text-[52px] sm:text-[42px] s:text-[38px] font-bold leading-none text-white'><span className='text-[#dacdffda]'> A New Era <br className='2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden' /> of </span> <br className='2xl:hidden xl:hidden lg:hidden md:block sm:hidden s:hidden' />  Warranty <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> Assurance</h1>
              <p className='text-[#dacdffda] text-[28px] font-bold leading-none my-4'>Expertise You Can Trust, Assurance  <br className='2xl:block xl:block lg:hidden md:block sm:hidden s:hidden' />  You Can Rely On</p>
              <p className='text-[#dacdffda] text-[18px] mb-8'>Premium Technology and Warranty Solutions,<br className='2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden' /> Enhanced <br className='2xl:hidden xl:hidden lg:hidden md:block sm:hidden s:hidden' /> by Financial Strength </p>
              <div className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden'>
                <a href='#plan' className='bg-gradient text-base font-semibold text-[#323148] py-4 px-12 rounded-lg '>Explore More</a>
              </div>
            </div>
            <div>
              <img className='mx-auto 2xl:w-auto xl:w-auto lg:w-auto md:w-[320px] sm:w-[320px] s:w-auto' src={banner} alt='Banner' />
            </div>
            <div className='text-center 2xl:hidden xl:hidden lg:hidden md:block sm:block s:block pb-3'>
              <a href='#plan' className='bg-gradient text-base font-semibold text-[#323148] py-4 px-12 rounded-lg'>Explore More</a>
            </div>

          </div>
        </FadeIn>
        <FadeIn className=' mb-16'>
          <img className='object-cover w-full' src={overlay} alt='Overlay' />
          <div id='plan'></div>
        </FadeIn>
        <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto py-16' >
          <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            <div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-1'>
              <h1 className='text-[35px] font-bold leading-none my-4 text-white'>Our Featured <br /> Protection Plans</h1>
              <p className='text-[#B8AEDA] text-xl leading-1 w-[75%]'>Our protection plans are designed to cover a wide range of products, from corporate equipment to home essentials.</p>
              <div className='flex mt-4'>
                <p className='bg-gradient-to-r from-[#FFC7AD] to-[#FF9E9C] bg-clip-text text-transparent text-[22px] font-bold'>Corporate Enterprise Protection Plans</p>
                <div className='h-[1px] self-center my-auto bg-[#B8AEDA] w-[20%] ml-2'></div>
              </div>
            </div>
            <div className='2xl:col-span-1 xl:col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-1 2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden '></div>
            <div className='col-span-1'>
              <div className='pr-5'>
                <img className='mb-3' src={plainImage} alt='plainImage' />
                <p className='bg-gradient-to-r from-[#FFC7AD] capitalize to-[#FF9E9C] bg-clip-text text-transparent text-[14px] font-bold mb-3'>K12 Education Plan</p>
                <h1 className='text-xl font-semibold text-white leading-tight capitalize'>Protect your school’s <br /> digital devices with our <br /> K12 Education Plans.</h1>
                <p className='bg-gradient-to-r mb-3 from-[#ACA1DF] to-[#D8BCD2] bg-clip-text capitalize text-transparent text-base'>Affordable plans, <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> comprehensive protection, <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> and reliable service.</p>
                <a href="#contact-us" className='text-white text-[11px] border border-[#AB9CC0] py-2 px-5  rounded-lg'> Get Started Today</a>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='pr-5'>
                <img className='mb-3' src={plainImage1} alt='plainImage' />
                <p className='bg-gradient-to-r from-[#FFC7AD] capitalize to-[#FF9E9C] bg-clip-text text-transparent text-[14px] font-bold mb-3'>Manufacturing Industry</p>
                <h1 className='text-xl font-semibold text-white capitalize leading-tight'>Let Get Cover handle your <br /> manufacturer's warranty, <br /> including product registration.</h1>
                <p className='bg-gradient-to-r mb-3 from-[#ACA1DF] to-[#D8BCD2] bg-clip-text capitalize text-transparent text-base'>Various plans, <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> Comprehensive protection, <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> and Easy Claim Process.</p>
                <a href="#contact-us" className='text-white text-[11px] border border-[#AB9CC0] py-2 px-5 mt-3 rounded-lg'> Get Started Today</a>
              </div>
            </div>
            <div className='col-span-1'>
              <div className=''>
                <img className='mb-3' src={plainImage2} alt='plainImage' />
                <p className='bg-gradient-to-r from-[#FFC7AD] capitalize to-[#FF9E9C] bg-clip-text text-transparent mt-6 text-[14px] font-bold mb-3'>Reseller Extended Warranty</p>
                <h1 className='text-xl font-semibold text-white leading-tight capitalize'>Getcover Offers Comprehensive <br /> Protection Plans for Resellers to <br /> Resell Under Your Own Brand.</h1>
                <p className='bg-gradient-to-r mb-3 from-[#ACA1DF] to-[#D8BCD2] capitalize bg-clip-text text-transparent text-base'>Multiple Plans, Complete <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> Coverage, and a Hassle-Free <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> Claims Process.</p>
                <a href="#contact-us" className='text-white text-[11px] border border-[#AB9CC0] py-2 px-5 mt-3 rounded-lg'> Get Started Today</a>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto py-16'>
          <div className='flex justify-between'>
            <p className='text-[35px] font-bold leading-none text-white '>Essential Gadgets <br /> Protection Plans</p>
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
                      <p className='text-white text-[15px]'>Mobile Protection <br /> Plans</p>
                    </div>
                  </div>
                  <div className='bg-Headphone bg-cover bg-no-repeat px-4 py-7 rounded-[20px]'>
                    <div className='flex pl-4'>
                      <div className='self-center w-[30%]'>
                        <img className='mx-auto' src={HeadphoneIcon} alt='Headphone' />
                      </div>
                      <p className='text-white text-[15px]'>Headphone  <br /> Protection</p>
                    </div>
                  </div>
                </div>
                <div className='mx-3'>
                  <div className='bg-Power bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                    <div className='flex pl-4'>
                      <div className='self-center w-[30%]'>
                        <img className='mx-auto' src={PowerIcon} alt='Power' />
                      </div>
                      <p className='text-white text-[15px]'>Power Tool  <br /> Protection</p>
                    </div>
                  </div>
                  <div className='bg-Smartwatch bg-cover bg-no-repeat px-4 py-7 rounded-[20px]'>
                    <div className='flex pl-4'>
                      <div className='self-center w-[30%]'>
                        <img className='mx-auto' src={SmartwatchIcon} alt='Smartwatch' />
                      </div>
                      <p className='text-white text-[15px]'>Smartwatch  <br /> Protection</p>
                    </div>
                  </div>
                </div>
                <div className='mx-3'>
                  <div className='bg-Laptop bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                    <div className='flex pl-4'>
                      <div className='self-center w-[30%]'>
                        <img className='mx-auto' src={LaptopIcon} alt='Laptop' />
                      </div>
                      <p className='text-white text-[15px]'>Laptop  <br /> Protection</p>
                    </div>
                  </div>
                  <div className='bg-Fitness bg-cover bg-no-repeat px-4 py-7 rounded-[20px]'>
                    <div className='flex pl-4'>
                      <div className='self-center w-[30%]'>
                        <img className='mx-auto' src={FitnessIcon} alt='Fitness' />
                      </div>
                      <p className='text-white text-[15px]'>Fitness Equipment  <br /> Protection</p>
                    </div>
                  </div>
                </div>
                <div className='mx-3'>
                  <div className='bg-Gaming bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                    <div className='flex pl-4'>
                      <div className='self-center w-[30%]'>
                        <img className='mx-auto' src={GamingIcon} alt='Gaming' />
                      </div>
                      <p className='text-white text-[15px]'>Gaming Console  <br /> Protection</p>
                    </div>
                  </div>
                  <div className='bg-Major bg-cover bg-no-repeat px-4 py-7 rounded-[20px]'>
                    <div className='flex pl-4'>
                      <div className='self-center w-[30%]'>
                        <img className='mx-auto' src={MajorIcon} alt='Major' />
                      </div>
                      <p className='text-white text-[15px]'>Major Appliance  <br /> Protection</p>
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
                ref={CarouselRef}
              >
                <div className='mx-3'>
                  <div className='bg-Mobile bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                    <div className='flex pl-4'>
                      <div className='self-center w-[30%]'>
                        <img className='mx-auto' src={MobileIcon} alt='mobile' />
                      </div>
                      <p className='text-white text-[15px]'>Mobile Protection <br /> Plans</p>
                    </div>
                  </div>
                  <div className='bg-Headphone bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                    <div className='flex pl-4'>
                      <div className='self-center w-[30%]'>
                        <img className='mx-auto' src={HeadphoneIcon} alt='Headphone' />
                      </div>
                      <p className='text-white text-[15px]'>Headphone  <br /> Protection</p>
                    </div>
                  </div>

                  <div className='bg-Power bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                    <div className='flex pl-4'>
                      <div className='self-center w-[30%]'>
                        <img className='mx-auto' src={PowerIcon} alt='Power' />
                      </div>
                      <p className='text-white text-[15px]'>Power Tool  <br /> Protection</p>
                    </div>
                  </div>
                  <div className='bg-Smartwatch bg-cover bg-no-repeat px-4 py-7 rounded-[20px]'>
                    <div className='flex pl-4'>
                      <div className='self-center w-[30%]'>
                        <img className='mx-auto' src={SmartwatchIcon} alt='Smartwatch' />
                      </div>
                      <p className='text-white text-[15px]'>Smartwatch  <br /> Protection</p>
                    </div>
                  </div>
                </div>
                <div className='mx-3'>
                  <div className='bg-Laptop bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                    <div className='flex pl-4'>
                      <div className='self-center w-[30%]'>
                        <img className='mx-auto' src={LaptopIcon} alt='Laptop' />
                      </div>
                      <p className='text-white text-[15px]'>Laptop  <br /> Protection</p>
                    </div>
                  </div>
                  <div className='bg-Fitness bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                    <div className='flex pl-4'>
                      <div className='self-center w-[30%]'>
                        <img className='mx-auto' src={FitnessIcon} alt='Fitness' />
                      </div>
                      <p className='text-white text-[15px]'>Fitness Equipment  <br /> Protection</p>
                    </div>
                  </div>

                  <div className='bg-Gaming bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]'>
                    <div className='flex pl-4'>
                      <div className='self-center w-[30%]'>
                        <img className='mx-auto' src={GamingIcon} alt='Gaming' />
                      </div>
                      <p className='text-white text-[15px]'>Gaming Console  <br /> Protection</p>
                    </div>
                  </div>
                  <div className='bg-Major bg-cover bg-no-repeat px-4 py-7 rounded-[20px]'>
                    <div className='flex pl-4'>
                      <div className='self-center w-[30%]'>
                        <img className='mx-auto' src={MajorIcon} alt='Major' />
                      </div>
                      <p className='text-white text-[15px]'>Major Appliance  <br /> Protection</p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>

        </FadeIn>
        <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto py-12'>
          <p className='text-[35px] font-bold leading-none text-white '>Get Cover truly  <br /> cares for you</p>
          <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-12 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center s:text-center'>
            <div className=' 2xl:flex xl:flex lg:flex md:block sm:block s:block col-span-1 '>
              <div className='2xl:w-[25%] xl:w-[25%] lg:w-[25%] md:w-full sm:w-full s:w-full self-center '>
                <img className='mx-auto' src={Time} alt='Save Time' />
              </div>
              <div>
                <h1 className='text-white font-semibold text-lg'>Save Time</h1>
                <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent text-[14px] font-bold mb-3'>One click is all it <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> takes. We take <br className='2xl:hidden xl:hidden lg:hidden md:block sm:block s:block' /> care  of <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> the rest</p>
              </div>
            </div>
            <div className='2xl:flex xl:flex lg:flex md:block sm:block s:block 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center s:text-center col-span-1'>
              <div className='2xl:w-[25%] xl:w-[25%] lg:w-[25%] md:w-full sm:w-full s:w-full self-center'>
                <img className='mx-auto' src={Money} alt='Save Money' />
              </div>
              <div>
                <h1 className='text-white font-semibold text-lg'>Save Money</h1>
                <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent text-[14px] font-bold mb-3'>Avoid heavy <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> repair <br className='2xl:hidden xl:hidden lg:hidden md:block sm:block s:block' /> & replacement<br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> costs</p>
              </div>
            </div>
            <div className='2xl:flex xl:flex lg:flex md:block sm:block s:block 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-1 s:col-span-1'>
              <div className='2xl:w-[25%] xl:w-[25%] lg:w-[25%] md:w-full sm:w-full s:w-full 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center s:text-center self-center'>
                <img className='mx-auto' src={Hassles} alt='Save Hassles' />
              </div>
              <div>
                <h1 className='text-white font-semibold text-lg'>Save Hassles</h1>
                <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent text-[14px] font-bold mb-3'>No more waiting on hold or running <br /> around finding out of
                  the area repair <br /> centers in case things go wrong</p>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto py-12'>
          <div className='grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 gap-4'>
            <div className='2xl:col-span-5 xl:col-span-5 lg:col-span-5 md:col-span-6 sm:col-span-6 self-center'>
              <h1 className='text-[35px] font-bold leading-[40px] text-white mb-3'>Why Get Device <br /> Protection Plans?</h1>
              <p className='text-lg text-[#B8AEDA] leading-[24px] mb-8'>One major benefit of having a device <br /> protection plan is saving money on expensive <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> repairs that safeguards against damage, <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> loss, and malfunctions.</p>
              <div className='mb-6'>
                <h1 className='text-white text-[21px] font-bold'>Repair Plans</h1>
                <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent text-[14px] font-bold mb-3'>Efficient and effective solutions for fixing your <br /> products, ensuring they work like new.</p>
              </div>
              <div className='mb-6'>
                <h1 className='text-white text-[21px] font-bold'>Replacement Plans</h1>
                <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent text-[14px] font-bold mb-3'>Get Cover offers warranty programs that <br /> replace products versus repair.</p>
              </div>
              <div className='mb-6'>
                <h1 className='text-white text-[21px] font-bold'>Accidental Damage Plans</h1>
                <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent text-[14px] font-bold mb-3'>Finding skilled and experienced technicians <br /> for appliance repairs can be
                  difficult.
                </p>
              </div>
            </div>
            <div className='2xl:col-span-7 xl:col-span-7 lg:col-span-7 md:col-span-6 sm:col-span-6'>
              <div className='2xl:hidden xl:hidden lg:hidden md:block sm:block s:block'>
                <h1 className='text-[35px] font-bold leading-[40px] text-white mb-3'>Why Choose US</h1>
                <p className='text-lg text-[#B8AEDA] leading-[24px] mb-8'>Get Cover protection plans are transparent and based on what you value most. We offer a  true technology solution backed by the strength of Newpoint Financial Group.</p>
              </div>
              <img className='mx-auto' src={Why} alt='Why Get' />
              <div id='about-us'></div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto py-16' >
          <FadeIn className='bg-About bg-cover bg-no-repeat text-center 2xl:p-16 xl:p-16 lg:p-16 md:p-12 sm:p-8 s:p-8 rounded-[16px]'>
            <h1 className='text-white text-3xl font-bold mb-5'>About Us</h1>
            <p className='text-center 2xl:w-[73%] xl:w-[73%] lg:w-[73%] md:[80%] sm:w-[95%] s:w-[95%] text-[20px] mx-auto text-[#B8AEDA]'><span className='text-white font-bold'> GetCover </span> is an InsureTech leader, delivering innovative warranty and technology solutions for businesses and individuals. Backed by the resources and global expertise of <a href="https://nfgsa.com/" className='text-[#c1c1c1] ' target='_blank'> Newpoint Financial Group </a> , we ensure reliable and efficient services across North America, Europe, Africa, and the Middle East. Our mission is to offer peace of mind with comprehensive and dependable coverage.</p>
          </FadeIn>
        </FadeIn>
        <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto py-16'>
          <div className='2xl:flex xl:flex lg:flex md:block sm:block s:block 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center s:text-center justify-between py-10 ' id="why-us">
            <h1 className='text-[40px] font-bold leading-[48px] text-[#B8AEDB]'>To experience the <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> <span className='text-white'> GetCover </span> difference.</h1>
            <div className='h-[1px] 2xl:my-0 xl:my-0 lg:my-0 md:my-3 sm:my-3 s:my-5 self-center mx-auto bg-[#B8AEDA] w-[40%] xl:ml-2'></div>
            <div className='self-center'>
              <button className='font-semibold text-[#323148] bg-white text-sm rounded-lg px-5 py-4 ml-5'>Book An Appointment</button>
            </div>
          </div>
          <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-12 gap-4' >
            <div>
              <div className='2xl:hidden xl:hidden lg:hidden md:block sm:block s:block'>
                <h1 className='text-[35px] font-bold leading-[40px] text-white mb-3'>Why Choose US</h1>
                <p className='text-lg text-[#B8AEDA] leading-[24px] mb-8'>Get Cover protection plans are transparent and based on what you value most. We offer a  true technology solution backed by the strength of Newpoint Financial Group.</p>
              </div>
              <img className='mx-auto' src={WhyUs} alt='Why Us' />
            </div>
            <div>
              <div className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden'>
                <h1 className='text-[35px] font-bold leading-[40px] text-white mb-3'>Why Choose US</h1>
                <p className='text-lg text-[#B8AEDA] leading-[24px] mb-8'>Get Cover protection plans are transparent and based on what you value most. We offer a  true technology solution backed by the strength of Newpoint Financial Group.</p>
              </div>
              <div className='mb-6'>
                <h1 className='text-white text-[21px] font-bold'>Easy Claims Process</h1>
                <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent text-[14px] font-bold mb-3'>Streamline your claims with a hassle-free,<br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> straightforward procedure.</p>
              </div>
              <div className='mb-6'>
                <h1 className='text-white text-[21px] font-bold'>Better Customer Support</h1>
                <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent text-[14px] font-bold mb-3'>Receive quick assistance with a responsive and <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> helpful support team.</p>
              </div>
              <div className='mb-6'>
                <h1 className='text-white text-[21px] font-bold'>Multiple Option Plans</h1>
                <p className='bg-gradient-to-r from-[#9B91C8] capitalize to-[#BCA7B8] bg-clip-text text-transparent text-[14px] font-bold mb-3'>Enjoy multiple option warranty plans with a variety of terms and coverage, including accidental damage from handling ADH</p>
              </div>
              <button className='font-semibold text-[#323148] bg-white rounded-lg text-sm px-5 py-4'>Learn More</button>
            </div>
          </div>
        </FadeIn>
        <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto py-14'>
          <h1 className='text-[40px] font-bold text-center leading-[48px] text-white'>Testimonials</h1>
          <div className='grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 gap-4 my-8'>
            <div className='col-span-2'></div>
            <div className='col-span-4 self-center'>
              <div>
                <p className='text-[#B8AEDA]'>“ I’ve used many warranty services but my experience with
                  Get Cover was very fast and easy to understand ”</p>
                <h1 className='my-5 text-lg text-white font-bold'>Patricia</h1>
                <div className='self-center flex'>
                  <img src={left} className='w-4 h-4 mr-4 cursor-pointer opacity-50 hover:opacity-100' alt='left' />
                  <img src={right} className='w-4 h-4 mr-4 cursor-pointer opacity-50 hover:opacity-100' alt='right' />
                </div>
              </div>
            </div>
            <div className='col-span-4'>
              <img src={image} className='w-[200px] mx-auto' alt='Images' />
            </div>
            <div className='col-span-2'></div>
          </div>
          <div id='contact-us'></div>
        </FadeIn>
        <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto py-14' >
          <div className='bg-Contact bg-cover bg-no-repeat rounded-[16px]'>
            <div className='grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 gap-4 p-12'>
              <div className='2xl:col-span-5 xl:col-span-5 lg:col-span-5 md:col-span-6 sm:col-span-6  self-center'>
                <p className='2xl:text-[50px] xl:text-[45px] lg:text-[45px] md:text-[32px] sm:text-[28px] s:text-[28px] text-white 2xl:leading-[55px] xl:leading-[50px] lg:leading-[50px] md:leading-[37px] sm:leading-[32px] s:leading-[32px]  font-bold'>Are you ready to Get Covered? Contact Us</p>
              </div>
              <div className='2xl:col-span-7 xl:col-span-7 lg:col-span-7 md:col-span-6 sm:col-span-6 '>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 s:col-span-2'>
                    <Input placeholder="First Name" />
                  </div>
                  <div className='2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 s:col-span-2'>
                    <Input placeholder="Last Name" />
                  </div>
                  <div className='col-span-2'>
                    <Input placeholder="Email" />
                  </div>
                  <div className='col-span-2'>
                    <Input placeholder="How We Can Help You?" />
                  </div>
                  <div className='2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 s:col-span-2'>
                    <button className='font-semibold text-[#323148] bg-white rounded-lg text-sm  px-5 py-4'>Send Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <div className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto'>
          <Footer />
        </div>
      </div>
    </>

  );
}

export default App;
