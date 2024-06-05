import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import "../styles/Intro.css";

function Intro() {
    return (
        <div id="intro">
            <Typist avgTypingDelay={150}>
                <span className="intro-title">
                    <Typist.Delay ms={1500} />
                    {"Hi, "}
                    {"I'm "}
                    <span className="intro-name">{"Kerem."} </span>
                </span>
            </Typist>
            <div className="intro-subtitle">
                ex-@UCL | currently creating things and working on some stuff
            </div>
            <div className="intro-desc">
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
                {"  Say hi!"}
            </a>
        </div>
    );
}

export default Intro;
