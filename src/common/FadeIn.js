import React, { useEffect, useRef, useState } from 'react';

const FadeIn = ({ children, className = '', ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            });
        });

        observer.observe(domRef.current);

        return () => observer.disconnect();
    }, [isVisible]);

    return (
        <div
            className={`fade-in-section ${isVisible ? 'show' : ''} ${className}`}
            ref={domRef}
            {...props}
        >
            {children}
        </div>
    );
};

export default FadeIn;
