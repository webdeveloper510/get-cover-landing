import React, { useState } from 'react';
import open from '../assets/images/open.png';
import close from '../assets/images/close.png';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className={`accordion-item text-white mb-2 rounded-[15px] cursor-pointer bg-cover bg-center bg-no-repeat p-3 ${!isOpen ? 'bg-open-bg' : 'bg-close-bg'}`}>
    <div className={`accordion-header flex justify-between text-lg font-Lufga text-[#fff]`} onClick={onClick}>
      <span className='self-center'>{title}</span>
      <span>{!isOpen ? <img src={close} alt="close" /> : <img src={open} alt="open" />}</span>
    </div>
    {isOpen && (
      <div className="accordion-content pl-5 mt-3 bg-gradient-to-r from-[#ACA1DF] capitalize to-[#D8BCD2] bg-clip-text text-transparent">
        {content}
      </div>
    )}
  </div>
);

const CustomAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default CustomAccordion;
