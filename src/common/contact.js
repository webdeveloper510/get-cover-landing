import React, { useState } from 'react';
import Input from './Input';
import Select from './select';

function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [text, setText] = useState('');
    const [emailError, setEmailError] = useState('');
    const [category, setCategory] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [show, setShow] = useState(false);

    // Dummy data for Select options (adjust as needed)
    const [categorys, setCategorys] = useState([   // Initialize options array
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ]);

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
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };
    const handlePhoneChange = (e) => {
        // Extract digits from the input
        let digitsOnly = e.target.value.replace(/\D/g, '');

        // Limit to 10 digits
        if (digitsOnly.length > 10) {
            digitsOnly = digitsOnly.slice(0, 10);
        }

        // Set the raw input value
        setPhoneNumber(e.target.value.slice(0, 10));

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
            category,
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
                setShow(true);
                setText(errorDetails.message);
                setTimeout(() => {
                    setText('');
                }, 10000);
                return;
            }

            setShow(true);
            setText('Message sent successfully!');
            setTimeout(() => {
                setText('');
            }, 10000);

            // Clear form fields
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhoneNumber('');
            setDescription('');
        } catch (error) {
            console.error('Error occurred while sending message:', error);
            alert('An error occurred. Please try again later.');
        }
    };
    return (
        <div>
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
                    <div className='2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 s:col-span-2'>
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
                    <div className='2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 s:col-span-2'>
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
                        <Select
                            name="category"
                            value={category}
                            onChange={handleCategoryChange}  // Correctly handle change
                            options={categorys}
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
    )
}

export default Contact
