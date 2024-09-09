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
import AboutUs from './assets/images/aboutUs.png';
import WHY_Get from './assets/images/about.png';
import Hand from './assets/images/MobileHand.png';
import plainImage from './assets/images/K12 Education Plan.png';
import plainImage2 from './assets/images/Reseller Extended Warranty.png';
import plainImage1 from './assets/images/Government Programs.png';
import plainImage3 from './assets/images/Brokers and Distributors.png';
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
import Email from './assets/images/Email.png';
import Phone from './assets/images/phone.png';
import Address from './assets/images/Address.png';
import check from './assets/images/check.png';
import FadeIn from './common/FadeIn';
import loader from './assets/images/loader.gif';
import CustomAccordion from './common/Accordion';



function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhonenumber] = useState('');
  const [text, setText] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
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
            setTimeout(() => {
              setLoading(false);
            }, 2000);
          }
        };
        img.onerror = () => {
          imagesLoaded++;
          if (imagesLoaded === images.length) {
            setTimeout(() => {
              setLoading(false);
            }, 2000);
          }
        };
      }
    });

    if (imagesLoaded === images.length) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
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

  const accordionItems = [
    {
      title: 'Q: Is a proof of purchase necessary for me to warranty my item?',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    },
    {
      title: 'Q: What is considered proof of purchase?',
      content: 'Proof of purchase is provided by uploading Receipts: Printed or digital receipts from a store or online retailer, Invoices, Order Confirmations: Emails or other documents confirming your order from an online retailer, Credit Card Statements: Showing the transaction amount and merchant or Purchase Orders.'
    },
    {
      title: 'Q: What type of repairs are covered under the warranty?',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    },
    {
      title: 'Q: When will my coverage start after I purchase my warranty?',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    },
    {
      title: 'Q: How long does the repair process take?',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    },
  ];

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailValue)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handlePhoneChange = (e) => {
    // Extract digits from the input
    let digitsOnly = e.target.value.replace(/\D/g, '');

    // Limit to 10 digits
    if (digitsOnly.length > 10) {
      digitsOnly = digitsOnly.slice(0, 10);
    }

    // Set the raw input value
    setPhonenumber(e.target.value.slice(0, 10));

    // Format the number as (XXX) XXX-XXXX if it contains 10 digits
    if (digitsOnly.length === 10) {
      const formattedPhone = digitsOnly.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
      // Optionally, you could display this formatted number instead of the raw input
      // setPhonenumber(formattedPhone);
    }

    // Validate the phone number only if it contains 10 digits
    if (digitsOnly.length !== 10) {
      setPhoneError('Phone number must be 10 digits.');
    } else {
      setPhoneError('');
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailError || phoneError) {
      setShow(true);
      setText('Please fix the validation errors before submitting.');
      setTimeout(() => {
        setText('');
      }, 4000);
      return;
    }

    const payload = {
      firstName,
      lastName,
      email,
      phoneNumber,
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
        setShow(true);
        setText(errorDetails.message);

        // Clear the message after 10 seconds
        setTimeout(() => {
          setText('');
        }, 10000);

        return;
      }

      const result = await response.json();
      // console.log('Message sent successfully!', result);
      setShow(true);
      setText('Message sent successfully!');
      setTimeout(() => {
        setText('');
      }, 10000);

      // Clear form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhonenumber('');
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
                {/* <h1 className='4xl:text-[104px] 3xl:text-[72px] 2xl:text-[60px] xl:text-[60px] lg:text-[60px] md:text-[52px] sm:text-[42px] s:text-[38px] font-bold leading-none text-white'> Check Back <br /> <span className='text-[#dacdffda]'> Soon </span> </h1> */}
                <p className='bg-gradient-to-r from-[#FFC7AD] capitalize to-[#FF9E9C] bg-clip-text text-transparent 4xl:text-[36px] 3xl:text-[36px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[24px] s:text-[24px] font-bold mb-2'>Device Protection Simplified</p>
                <h1 className='4xl:text-[104px] 3xl:text-[72px] 2xl:text-[50px] xl:text-[50px] lg:text-[50px] md:text-[42px] sm:text-[38 px] s:text-[38px] font-bold leading-none text-white'><span className=''> Expecrtise You Can <br className='4xl:hidden 3xl:hidden 2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden' /> Trust </span> <br className='2xl:hidden xl:hidden lg:hidden md:block sm:hidden s:hidden' />  Assurance <br className='4xl:hidden 3xl:hidden 2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> You Can Rely On.</h1>
                {/* <p className='text-[#dacdffda] 4xl:text-[50px] 3xl:text-[38px] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] md:text-[28px] sm:text-[28px] s:text-[28px] font-bold leading-none my-4'>Expertise You Can Trust, Assurance  <br className='2xl:block xl:block lg:hidden md:block sm:hidden s:hidden' />  You Can Rely On</p> */}
                <p className='text-[#dacdffda] font-bold 4xl:text-[40px] 3xl:text-[34px] 2xl:text-[22px] xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[22px] s:text-[18px] mb-8'> Warranty Cover Solutions, And Premium <br className='4xl:hidden 3xl:hidden 2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden' /> Technology <br className='2xl:hidden xl:hidden lg:hidden md:block sm:hidden s:hidden' /> With Hassle-Free service To <br /> Maximize Our Customer's Experience </p>
                <div className='2xl:flex xl:flex lg:flex md:hidden sm:hidden s:hidden'>
                  {/* <p onClick={() => scrollToSection('plan')} className='bg-gradient 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px] font-semibold text-[#323148] py-4 px-12 rounded-lg '>Explore More</p> */}
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
          <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-12 xl:py-16 lg:py-16 md:py-12 sm:py-8 s:py-8'>
            <div className='grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6 gap-4'>

              <div className='2xl:col-span-7 xl:col-span-7 lg:col-span-7 md:col-span-7 sm:col-span-6 '>
                <div className='self-center'>
                  <div className='2xl:hidden xl:hidden lg:hidden md:hidden sm:block s:block'>
                    <h1 className='4xl:text-[50px] 3xl:text-[50px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] s:text-[35px] font-bold leading-[40px] text-white mb-3'>Why Get Device <br /> Protection Plans?</h1>
                    <p className='text-lg text-[#B8AEDA] leading-[24px] mb-8'>One major benefit of having a device <br /> protection plan is saving money on expensive <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> repairs that safeguards against damage, <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> loss, and malfunctions.</p>
                  </div>
                  <img className='mx-auto w-2/3' src={AboutUs} alt='Why Get' />
                </div>
              </div>
              <div className='2xl:col-span-5 xl:col-span-5 lg:col-span-5 md:col-span-5 sm:col-span-6  self-center'>
                <div className='2xl:block xl:block lg:block md:block sm:hidden s:hidden'>
                  <h1 className='4xl:text-[50px] 3xl:text-[50px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] s:text-[35px] font-bold 4xl:leading-[55px] 3xl:leading-[55px] 2xl:leading-[40px] xl:leading-[40px] lg:leading-[40px] md:leading-[40px] sm:leading-[40px] s:leading-[40px] text-white mb-3'>About Us</h1>
                  <p className='4xl:text-[30px] 3xl:text-[24px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] s:text-[18px] text-[#B8AEDA] 4xl:leading-[35px] 3xl:leading-[30px] 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] md:leading-[24px] sm:leading-[24px] s:leading-[24px] mb-8'>Get Cover is an InsureTech leader
                    delivering warranty coverage solutions
                    through its proprietary technology to both enterprise corporate organizations
                    (B2B) and individuals (B2C) clients.
                    <br />
                    <br />
                    Get Cover LLC is a subsidiary of NFG SA. a London based global private
                    investment firm focused on private equity and structured finance
                    investments into operating companies engaged in the insurance, financial
                    services, energy, infrastructure and real estate sectors.</p>
                </div>
              </div>
              <div className='col-span-12'>
                <p className='w-[80%] mx-auto  mt-3 4xl:text-[30px] 3xl:text-[24px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] s:text-[18px] text-[#B8AEDA] 4xl:leading-[35px] 3xl:leading-[30px] 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] md:leading-[24px] sm:leading-[24px] s:leading-[24px] mb-8 text-center'>With more than $2.5 billion in firm capital and a focus on
                  transformative business combinations across our target industry sectors
                  throughout North America, Europe, Africa, and the Middle East creating a
                  strategic international presence, coupled with a deep understanding of the
                  importance of capital, NFG has the experience, expertise, and financial
                  capability to fund bespoke structured finance transactions creating
                  efficient and cost- effective financing programs <br />
                  that drive long term value
                  creation.
                </p>
              </div>
            </div>
          </FadeIn>
          <div className='bg-tech-bg bg-contain bg-center bg-no-repeat'>
            <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-12 xl:py-16 lg:py-16 md:py-12 sm:py-8 s:py-8'>
              <div className='grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6 gap-4'>

                <div className='2xl:col-span-5 xl:col-span-5 lg:col-span-5 md:col-span-6 sm:col-span-6'>
                  <div className='self-center'>
                    <h1 className='4xl:text-[50px] 3xl:text-[50px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] s:text-[35px] font-bold 4xl:leading-[55px] 3xl:leading-[55px] 2xl:leading-[40px] xl:leading-[40px] lg:leading-[40px] md:leading-[40px] sm:leading-[40px] s:leading-[40px] text-white mb-3'>Cutting-edge Solution  with Innovation</h1>
                    <p className='4xl:text-[30px] 3xl:text-[24px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] s:text-[18px] text-[#B8AEDA] 4xl:leading-[35px] 3xl:leading-[30px] 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] md:leading-[24px] sm:leading-[24px] s:leading-[24px] mb-8'>At Get Cover, we leverage cutting-edge, proprietary technology to simplify warranty management for our customers. Our advanced systems automate claims and provide real-time data tracking, ensuring seamless interactions and minimizing manual effort. Serving both individual (B2C) and corporate (B2B) clients, we deliver innovative, efficient warranty solutions
                      across industries.</p>
                    <div className='text-left'>
                      <button className='bg-white 4xl:text-[35px] 3xl:text-[35px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px] font-semibold text-[#323148] py-4 px-12 rounded-lg'>Learn More</button>
                    </div>
                  </div>
                </div>
                <div className='2xl:col-span-7 xl:col-span-7 lg:col-span-7 md:col-span-6 sm:col-span-6  self-center pl-8'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='flex justify-between mb-4'>
                      <img src={check} className='w-[45px] h-[45px] self-center' alt='check' />
                      <p className='text-white text-xl ml-3'>Automated Claims Processing</p>
                    </div>
                    <div className='flex justify-between mb-4'>
                      <img src={check} className='w-[45px] h-[45px] self-center' alt='check' />
                      <p className='text-white text-xl ml-3'>Advanced Data Analytics</p>
                    </div>
                    <div className='flex justify-between mb-4'>
                      <img src={check} className='w-[45px] h-[45px] self-center' alt='check' />
                      <p className='text-white text-xl ml-3'>Real-Time Warranty Tracking</p>
                    </div>
                    <div className='flex  mb-4'>
                      <img src={check} className='w-[45px] h-[45px] self-center' alt='check' />
                      <p className='text-white text-xl ml-3'>Sales <br /> Enhancement</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-12 xl:py-16 lg:py-16 md:py-12 sm:py-8 s:py-8 '>
            <div className='grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6 gap-4'>

              <div className='2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6'>
                <div className='self-center'>
                  <div className='2xl:hidden xl:hidden lg:hidden md:hidden sm:block s:block'>
                    <h1 className='4xl:text-[50px] 3xl:text-[50px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] s:text-[35px] font-bold leading-[40px] text-white mb-3'>Why Get Device <br /> Protection Plans?</h1>
                    <p className='text-lg text-[#B8AEDA] leading-[24px] mb-8'>One major benefit of having a device <br /> protection plan is saving money on expensive <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> repairs that safeguards against damage, <br className='2xl:block xl:block lg:block md:hidden sm:hidden s:hidden' /> loss, and malfunctions.</p>
                  </div>
                  <img className='mx-auto' src={WHY_Get} alt='Why Get' />
                </div>
              </div>
              <div className='2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6  self-center pl-8'>
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
            </div>
          </FadeIn>

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
          <div id='plan' className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-16 xl:py-16 lg:py-16 md:py-12 sm:py-8 s:py-8' >
            <FadeIn className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
              <div className='2xl:col-span-3 xl:col-span-3 lg:col-span-2 md:col-span-2 sm:col-span-1'>
                <h1 className=' 4xl:text-[45px] 3xl:text-[45px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[30px] s:text-[30px] font-bold leading-none my-4 text-white text-center'>Enterprise</h1>
                <p className='text-[#B8AEDA] 4xl:text-[30px] 3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] leading-1 text-center'>Enterprise programs are available for the following channels:</p>
              </div>
            </FadeIn>
            <FadeIn className='grid 2xl:grid-cols-4 mt-16 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 s:grid-cols-1 gap-4'>
              <div className='col-span-1'>
                <div className='pr-5'>
                  <img className='mb-3' src={plainImage} alt='plainImage' />
                  <h1 className='4xl:text-[30px] 3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] font-semibold text-white leading-tight capitalize'>Education</h1>
                  <p className='bg-gradient-to-r mb-3 from-[#ACA1DF] to-[#D8BCD2] bg-clip-text capitalize text-transparent 4xl:text-[25px] 3xl:text-[25px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px]'>Customized warranty plans for educational institutions, ensuring the protection of devices and equipment essential for learning environments.</p>
                  <div className='flex'>
                    <p onClick={() => scrollToSection('contact-us')} className='text-white 4xl:text-[20px] 3xl:text-[20px] 2xl:text-[11px] xl:text-[11px] lg:text-[11px] md:text-[11px] sm:text-[11px] s:text-[11px] border border-[#AB9CC0] py-2 px-5  rounded-lg'> Get Started Today</p>
                  </div>
                </div>
              </div>
              <div className='col-span-1'>
                <div className='pr-5'>
                  <img className='mb-3' src={plainImage2} alt='plainImage' />
                  <h1 className='4xl:text-[30px] mt-7 3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] font-semibold text-white leading-tight capitalize'>Corporate Accounts</h1>
                  <p className='bg-gradient-to-r mb-3 from-[#ACA1DF] to-[#D8BCD2] bg-clip-text capitalize text-transparent 4xl:text-[25px] 3xl:text-[25px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px]'>Scalable warranty solutions for businesses of all sizes, enhancing asset protection and reducing downtime across various
                    <br /> sectors.</p>
                  <div className='flex'>
                    <p onClick={() => scrollToSection('contact-us')} className='text-white 4xl:text-[20px] 3xl:text-[20px] 2xl:text-[11px] xl:text-[11px] lg:text-[11px] md:text-[11px] sm:text-[11px] s:text-[11px] border border-[#AB9CC0] py-2 px-5  rounded-lg'> Get Started Today</p>
                  </div>
                </div>
              </div>
              <div className='col-span-1'>
                <div className='pr-5'>
                  <img className='mb-3' src={plainImage1} alt='plainImage' />
                  <h1 className='4xl:text-[30px] mt-6 3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] font-semibold text-white capitalize leading-tight'>Government Programs</h1>
                  <p className='bg-gradient-to-r  from-[#ACA1DF] to-[#D8BCD2] bg-clip-text capitalize text-transparent 4xl:text-[25px] 3xl:text-[25px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px]'>Specialized warranty management for government organizations, ensuring compliance
                    and streamlined
                    operations.</p>
                  <div className='flex mt-7'>
                    <p onClick={() => scrollToSection('contact-us')} className='text-white 4xl:text-[20px] 3xl:text-[20px] 2xl:text-[11px] xl:text-[11px] lg:text-[11px] md:text-[11px] sm:text-[11px] s:text-[11px] border border-[#AB9CC0] py-2 px-5 mt-3 rounded-lg'> Get Started Tody</p>
                  </div>
                </div>
              </div>
              <div className='col-span-1'>
                <div className=' h-full'>
                  <img className='mb-3' src={plainImage3} alt='plainImage' />
                  <h1 className='4xl:text-[30px] mt-4 3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] font-semibold text-white leading-tight capitalize'>Brokers and Distributors</h1>
                  <p className='bg-gradient-to-r mb-3 from-[#ACA1DF] to-[#D8BCD2] capitalize bg-clip-text text-transparent 4xl:text-[25px] 3xl:text-[25px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px]'>Partner-focused warranty management, enabling smooth and effective service delivery.</p>
                  <div className='flex mt-[74px]'>
                    <div onClick={() => scrollToSection('contact-us')} className='text-white 4xl:text-[20px] w-auto mr-auto 3xl:text-[20px] 2xl:text-[11px] xl:text-[11px] lg:text-[11px] md:text-[11px] sm:text-[11px] s:text-[11px] border border-[#AB9CC0] py-2 px-5 mt-3 rounded-lg'> Get Started Tody</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto mt-20 2xl:py-14 xl:py-14 lg:py-14 md:py-10 sm:py-8 s:py-8' >
            <div className='bg-soon-bg bg-cover bg-no-repeat rounded-[16px]'>
              <div className='grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 gap-4 2xl:px-12 xl:px-12 lg:px-12 md:px-10 sm:px-8 s:px-8'>
                <div className='2xl:col-span-5 xl:col-span-5 lg:col-span-5 md:col-span-6 sm:col-span-6  self-center'>
                  <p className='2xl:text-[90px] xl:text-[85px] lg:text-[45px] md:text-[32px] sm:text-[28px] s:text-[28px] leading-[1] text-white pl-14 font-bold'>Coming <br /> Soon!</p>
                  <p className='pl-14 text-[#B8AEDA]'>Check Back Soon to download <br />
                    <span className='text-white'> the Get Cover APP.   </span> </p>
                </div>
                <div className='2xl:col-span-7 xl:col-span-7 lg:col-span-7 md:col-span-6 sm:col-span-6 '>
                  <img src={Hand} className='-mt-24' alt='mobile Hand' />
                </div>
              </div>
            </div>
          </FadeIn>
          <div id='faq'></div>
          <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto 2xl:py-14 xl:py-14 lg:py-14 md:py-10 sm:py-8 s:py-8' >
            <div className='lg:w-[80%] md:w-[90%] sm:w-[90%] s:w-[90%] mx-auto'>
              <p className='capitalize font-bold text-white text-[30px] text-center'>frequently asked questions</p>
              <p className='text-[#B8AEDA] text-center mb-5'>Reference site about Lorem Ipsum, giving information on its origins.</p>
              <CustomAccordion items={accordionItems} />
            </div>
          </FadeIn>
          <div id='contact-us'></div>
          <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto 2xl:py-14 xl:py-14 lg:py-14 md:py-10 sm:py-8 s:py-8' >
            <div className='bg-Contact bg-cover bg-no-repeat rounded-[16px]'>
              <div className='grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 gap-4 2xl:p-12 xl:p-12 lg:p-12 md:p-10 sm:p-8 s:p-8'>
                <div className='2xl:col-span-5 xl:col-span-5 lg:col-span-5 md:col-span-6 sm:col-span-6  self-center px-6'>
                  <p className='2xl:text-[50px] xl:text-[45px] lg:text-[45px] md:text-[32px] sm:text-[28px] s:text-[28px] text-white 2xl:leading-[55px] xl:leading-[50px] lg:leading-[50px] md:leading-[37px] sm:leading-[32px] s:leading-[32px]  font-bold'>Are you ready to Get Covered? Contact Us</p>
                  <div className='my-4'>
                    <div className='flex'>
                      <img src={Address} className='w-[30px] h-[30px]' alt='Address' />
                      <div className='pl-5'>
                        <p className='text-white font-semibold'>Address</p>
                        <p className='bg-gradient-to-r from-[#ACA1DF] capitalize to-[#D8BCD2] bg-clip-text text-transparent'>9701 Wilshire Blvd., Suite 930, Beverly Hills, CA
                          90212</p>
                      </div>
                    </div>

                  </div>
                  <div className='mb-4'>
                    <div className='flex'>
                      <img src={Phone} className='w-[30px] h-[30px]' alt='Phone' />
                      <div className='pl-5'>
                        <p className='text-white font-semibold'>Phone</p>
                        <p className='bg-gradient-to-r from-[#ACA1DF] capitalize to-[#D8BCD2] bg-clip-text text-transparent'> <a href='tel:3107730033' > 310-773-0033 </a>     or    <a href='tel:8882095598' >888-209-5598</a> </p>
                      </div>
                    </div>

                  </div>
                  <div className='mb-4'>
                    <div className='flex'>
                      <img src={Email} className='w-[30px] h-[23px]' alt='Email' />
                      <div className='pl-5'>
                        <p className='text-white font-semibold'>Email</p>
                        <p className='bg-gradient-to-r from-[#ACA1DF] capitalize to-[#D8BCD2]  bg-clip-text text-transparent underline'><a href='mailto:info@getcover.com' className='undeline' >info@getcover.com </a> <br />
                          <a href='mailto:customerservice@getcover.com' className='undeline' > customerservice@getcover.com </a></p>
                      </div>
                    </div>

                  </div>
                </div>
                <div className='2xl:col-span-7 self-center xl:col-span-7 lg:col-span-7 md:col-span-6 sm:col-span-6 '>
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
                      <div className='col-span-1'>
                        <Input
                          type='email'
                          name='email'
                          required
                          placeholder="Email"
                          value={email}
                          onChange={(e) => handleEmailChange(e)}
                        />
                        {emailError && <div className="text-sm text-red-600 ">{emailError}</div>}
                      </div>
                      <div className='col-span-1'>
                        <Input
                          type='number'
                          name='phoneNumber'
                          required
                          minLength={9}
                          maxLength={10}
                          placeholder="Phone #"
                          value={phoneNumber}
                          onChange={(e) => handlePhoneChange(e)}
                        />
                        {phoneError && <div className="text-sm text-red-600">{phoneError}</div>}
                      </div>
                      <div className='col-span-2'>
                        <Input
                          type='text'
                          name='lastName'
                          required
                          placeholder="Choose Category"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
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
                        {show && <p className='self-center pl-5 text-[#feb0a3] text-lg' >{text}</p>}
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
