import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";

function Intro() {
    return (
        <div id="intro">
            <Typist avgTypingDelay={150}>
                <Typist.Delay ms={1500} />
                {"Hi, "}
                <span className="intro-name">{"Kerem"} </span>
                {" here."}
            </Typist>
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
