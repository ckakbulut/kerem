import React, { useState, useEffect, useRef } from "react";

const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: `${props.delay}` }}
            ref={domRef}
        >
            {props.children}
        </div>
    );
};

export default FadeInSection;
