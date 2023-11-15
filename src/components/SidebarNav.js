import React, { useRef } from "react";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const isMobile = window.innerWidth <= 500;

const sections = ["Intro", "About", "Experience", "Project"];

function SidebarNav(props) {
    // create a ref for the different nav sections to scroll to
    const navRef = useRef([]);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    const handleClick = (index) => {
        scrollToSection(navRef.current[index]);
    };

    return (
        <div id="sidebarnav-container">
            <ul id="sidebarnav">
                {!isMobile &&
                    sections.map((section, index) => (
                        <li
                            key={index}
                            id={section}
                            onClick={() => handleClick(index)}
                        >
                            {section}
                        </li>
                    ))}
            </ul>
            <div className="sidebar-logos" href="/">
                <a href="mailto:cankeremakbulut@gmail.com">
                    <EmailRoundedIcon
                        style={{ fontSize: 20 }}
                    ></EmailRoundedIcon>
                </a>
                <a href="https://github.com/yellowskybolt">
                    <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
                </a>
                <a href="https://www.linkedin.com/in/cankeremakbulut">
                    <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
                </a>
            </div>
        </div>
    );
}

export default SidebarNav;
