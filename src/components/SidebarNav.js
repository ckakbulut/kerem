"use client";

import { useEffect, useState } from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/SidebarNav.css";

const SECTIONS = [
    { href: "#intro", label: "/home", mobileLabel: "/home" },
    { href: "#about", label: "/about", mobileLabel: "/about" },
    { href: "#experience", label: "/experience", mobileLabel: "/exp" },
    { href: "#projects", label: "/projects", mobileLabel: "/projects" },
];

function SidebarNav() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth <= 500);
        update();
        window.addEventListener("resize", update, { passive: true });
        return () => window.removeEventListener("resize", update);
    }, []);

    if (isMobile) {
        return (
            <nav className="mobile-nav" aria-label="Site navigation">
                {SECTIONS.map((section) => (
                    <a
                        key={section.href}
                        className="mobile-nav-link"
                        href={section.href}
                    >
                        {section.mobileLabel}
                    </a>
                ))}
                <a
                    className="mobile-nav-link"
                    href="mailto:cankeremakbulut@gmail.com"
                    aria-label="Email"
                >
                    <EmailRoundedIcon style={{ fontSize: 20 }} />
                </a>
            </nav>
        );
    }

    return (
        <div className="sidebar-nav" id="sidebar">
            <ul className="sidebar-section-container">
                {SECTIONS.map((section) => (
                    <li key={section.href} className="sidebar-section">
                        <a className="sidebar-link" href={section.href}>
                            {section.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="sidebar-logos-container">
                <a
                    className="sidebar-link"
                    href="mailto:cankeremakbulut@gmail.com"
                >
                    <EmailRoundedIcon style={{ fontSize: 24 }} />
                </a>
                <a
                    className="sidebar-link"
                    href="https://github.com/ckakbulut"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHubIcon style={{ fontSize: 23 }} />
                </a>
                <a
                    className="sidebar-link"
                    href="https://www.linkedin.com/in/cankeremakbulut"
                    target="_blank"
                    rel="noreferrer"
                >
                    <LinkedInIcon style={{ fontSize: 25 }} />
                </a>
            </div>
        </div>
    );
}

export default SidebarNav;
