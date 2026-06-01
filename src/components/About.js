import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const TECH_STACK = [
    "Python",
    "TypeScript",
    "JavaScript",
    "React / Next.js",
    "PyTorch",
    "C / C++",
];

function About() {
    return (
        <div id="about">
            <FadeInSection>
                <div className="section-header">
                    <span className="section-title">/ about-me</span>
                </div>
                <div className="about-content">
                    <div className="about-description">
                        <p>
                            I&apos;m currently a{" "}
                            <b>Computer Science master&apos;s student</b> at{" "}
                            <a
                                href="https://www.engineering.columbia.edu/academics/departments/computer-science"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Columbia University
                            </a>
                            . Before Columbia, I spent time as an{" "}
                            <b>LLM Research Engineer</b> at{" "}
                            <a
                                href="https://www.baykartech.com/en/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Baykar
                            </a>
                            , working on the alignment and continual
                            pre-training of T3AI — Turkey&apos;s first
                            large language model.
                        </p>
                        Here are some of the technologies I&apos;ve been
                        working with:
                        <ul className="tech-stack">
                            {TECH_STACK.map((item, i) => (
                                <FadeInSection key={item} delay={`${i + 1}00ms`}>
                                    <li>{item}</li>
                                </FadeInSection>
                            ))}
                        </ul>
                        <p>
                            Outside of work, I follow developments in
                            mechanistic interpretability and LLM research,
                            frequent the gym, play video games, and (currently)
                            binge-watch The Office.
                        </p>
                    </div>
                    <div className="about-image">
                        <img alt="Can Kerem Akbulut" src="/me.jpeg" />
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
}

export default About;
