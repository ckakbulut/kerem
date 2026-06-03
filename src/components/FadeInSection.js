"use client";

import { useEffect, useRef, useState } from "react";

function FadeInSection({ children, delay }) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        const node = domRef.current;
        if (!node) return undefined;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(node);
        return () => observer.unobserve(node);
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: delay }}
            ref={domRef}
        >
            {children}
        </div>
    );
}

export default FadeInSection;
