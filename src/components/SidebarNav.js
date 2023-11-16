import React, { useRef } from "react";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import styled from "styled-components";

const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    right: 0;
    padding-right: 5%;
    bottom: 10%;
    background-color: transparent;
`;

const SidebarSection = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    text-align: right;
    font-family: "NTR", sans-serif;
    letter-spacing: 0em;
    line-height: 1.6em;
    font-size: 16px;
    padding: 0.2em;
    font-weight: bold;
`;

const SidebarSectionContainer = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: right;
    font-family: "NTR", sans-serif;
    letter-spacing: 0em;
    line-height: 1.5em;
    font-size: 16 px;
    padding: 0.2em;
    font-weight: bold;
`;

const SidebarLogosContainer = styled.div`
    padding-top: 42px;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 8px;
`;

const StyledAnchor = styled.a`
    text-decoration: none;
    color: green;
    &:hover {
        color: #df7093;
    }
`;

const isMobile = window.innerWidth <= 500;

const sections = [
    <StyledAnchor href="#intro">/home</StyledAnchor>,
    <StyledAnchor href="#about">/about</StyledAnchor>,
    <StyledAnchor href="#experience">/experience</StyledAnchor>,
    <StyledAnchor href="#projects">/projects</StyledAnchor>,
];

function SidebarNav() {
    // used to animate a scrolling effect when clicking on a sidebar section
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* if the screen is mobile, don't show the sidebar */}
            {!isMobile && (
                <StyledSidebar id="sidebar">
                    <SidebarSectionContainer className="sidebar-section-container">
                        {sections.map((section, i) => (
                            <SidebarSection
                                key={i}
                                className={"sidebar-section"}
                                onClick={(e) => scrollToSection(e.target.href)}
                            >
                                {section}
                            </SidebarSection>
                        ))}
                    </SidebarSectionContainer>
                    <SidebarLogosContainer
                        className="sidebar-logos-container"
                        href="/"
                    >
                        <StyledAnchor href="mailto:cankeremakbulut@gmail.com">
                            <EmailRoundedIcon
                                style={{ fontSize: 20 }}
                            ></EmailRoundedIcon>
                        </StyledAnchor>
                        <StyledAnchor href="https://github.com/yellowskybolt">
                            <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
                        </StyledAnchor>
                        <StyledAnchor href="https://www.linkedin.com/in/cankeremakbulut">
                            <LinkedInIcon
                                style={{ fontSize: 21 }}
                            ></LinkedInIcon>
                        </StyledAnchor>
                    </SidebarLogosContainer>
                </StyledSidebar>
            )}
        </>
    );
}

export default SidebarNav;
