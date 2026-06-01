"use client";

import { useEffect, useState } from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/SidebarNav.css";

const SECTIONS = [
    { href: "#intro", label: "/home" },
    { href: "#about", label: "/about" },
    { href: "#experience", label: "/experience" },
    { href: "#projects", label: "/projects" },
];

function SidebarNav() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth <= 500);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    if (isMobile) return null;

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
