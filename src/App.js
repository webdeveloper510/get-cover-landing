import { useEffect, useState } from 'react';
import './App.css';

// -------------Component imported
import Header from './common/Header';
import FadeIn from './common/FadeIn';

// -------------Media Images imported
import banner from './assets/images/banner.png';
import loader from './assets/images/loader.gif';
import Input from './common/Input';



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
      const response = await fetch('https://api.getcover.com/api-v1/user/contact-us', {
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
      // alert('An error occurred. Please try again later.');
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
        <div className='fixed top-0 left-0 right-0 bg-black'>
          <div className='flex self-center h-screen'>
            <img src={loader} className='w-1/2 m-auto' alt='loading' />
          </div>
        </div></> : <>
        <Header className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto' />
        <div className='2xl:bg-full-bg xl:bg-full-bg lg:bg-tab-bg md:bg-tab-bg sm:bg-mobile-bg bg-mobile-bg bg-cover bg-no-repeat pt-[90px] 2xl:px-0 xl:px-0 lg:px-0 md:px-10 sm:px-6 s:px-6 min-h-screen'>
          <FadeIn className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto'>

            <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
              <div className='self-center 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center s:text-center'>
                <h1 className='4xl:text-[104px] 3xl:text-[72px] 2xl:text-[60px] xl:text-[60px] lg:text-[60px] md:text-[52px] sm:text-[42px] s:text-[38px] font-bold leading-none text-white'> Check Back <br /> <span className='text-[#dacdffda]'> Soon </span> </h1>
                <p className='text-[#dacdffda] 4xl:text-[50px] 3xl:text-[38px] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] md:text-[28px] sm:text-[28px] s:text-[28px] font-bold leading-none my-4'>Expertise You Can Trust, Assurance  <br className='2xl:block xl:block lg:hidden md:block sm:hidden s:hidden' />  You Can Rely On</p>
                <p className='text-[#fff] 4xl:text-[40px] 3xl:text-[28px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] s:text-[18px] mb-8'>Premium Technology and Warranty Solutions,<br className='4xl:hidden 3xl:hidden 2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden' /> Enhanced <br className='2xl:hidden xl:hidden lg:hidden md:block sm:hidden s:hidden' /> by Financial Strength </p>
                <div className='2xl:flex xl:flex lg:flex md:hidden sm:hidden s:hidden'>
                </div>
              </div>
              <div>
                <img className='mx-auto 4xl:w-[90%] 3xl:w-[90%] 2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:w-[320px] sm:w-[320px] s:w-auto' src={banner} alt='Banner' />
              </div>
            </div>
          </FadeIn>
          <div id='contact-us'></div>
          <div className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto 2xl:py-14 xl:py-14 lg:py-14 md:py-10 sm:py-8 s:py-8' >
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
          </div>
        </div>
      </>}

    </>

  );
}

export default App;
