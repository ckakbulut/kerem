import React from "react";
import { TypeAnimation } from "react-type-animation";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";

function Intro() {
    return (
        <div id="intro">
            <TypeAnimation
                sequence={[1000, "Hi", 1000, "I'm Kerem"]}
                wrapper="span"
                speed={50}
                style={{ fontsize: "2em", display: "inline-block" }}
                repeat={0}
            />
            <div classname="intro-subtitle">
                ex-@UCL | currently creating things and working on some stuff
            </div>
            <div classname="intro-description">
                I'm a software engineer based part-time in Istanbul and
                part-time in London. I'm interested in building websites,
                learning about artificial intelligence and studying computer
                systems.
            </div>
            <a
                href="mailto:cankeremakbulut@gmail.com"
                className="intro-contact"
            >
                <EmailRoundedIcon></EmailRoundedIcon>
                {"  " + "Say hi!"}
            </a>
        </div>
    );
}

export default Intro;
