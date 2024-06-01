import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
    const aboutMe = (
        <p>
            I am currently a <b>Machine Learning Intern</b> at{" "}
            <a href="https://www.turkcell.com.tr/en/aboutus?gad_source=1&gclid=CjwKCAjwjeuyBhBuEiwAJ3vuoZnS-2WQepI3p6eRQ-I1L9jx32EqZjxC4I2YpirXQy1g4lb3FeBnxhoCuJIQAvD_BwE&gclsrc=aw.ds">
                Turkcell
            </a>
            , working in the Artificial Intelligence department under the
            Computer Vision team.
        </p>
    );

    const currentHobbies = (
        <p>
            Outside of work, I'm interested in following developments in the
            world of LLM's, frequenting the gym, playing video games, and
            (currently) binge watching The Office skits.
        </p>
    );

    const tech_stack = [
        "Python",
        "Typescript",
        "Javascript",
        "React/nextJS",
        "Java",
        "C++",
    ];

    return (
        <div id="about">
            <FadeInSection>
                <div className="section-header">
                    <span className="section-title">/ about-me</span>
                </div>
                <div className="about-content">
                    <div className="about-description">
                        {aboutMe}
                        Here are some technologies I have been working with:
                        <ul className="tech-stack">
                            {tech_stack.map((tech_item, i) => (
                                <FadeInSection key={i} delay={`${i + 1}00ms`}>
                                    <li>{tech_item}</li>
                                </FadeInSection>
                            ))}
                        </ul>
                        {currentHobbies}
                    </div>
                    <div className="about-image">
                        <img alt="Can Kerem Akbulut" src={"/me.jpeg"} />
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
};

export default About;
