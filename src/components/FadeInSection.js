"use client";

import { useEffect, useRef, useState } from "react";

const callbacks = new Map();
let sharedObserver = null;

function getObserver() {
    if (!sharedObserver) {
        sharedObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const cb = callbacks.get(entry.target);
                    if (cb) {
                        cb();
                        callbacks.delete(entry.target);
                        sharedObserver.unobserve(entry.target);
                    }
                }
            });
        });
    }
    return sharedObserver;
}

function FadeInSection({ children, delay }) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        const node = domRef.current;
        if (!node) return undefined;
        const observer = getObserver();
        callbacks.set(node, () => setVisible(true));
        observer.observe(node);
        return () => {
            callbacks.delete(node);
            observer.unobserve(node);
        };
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
