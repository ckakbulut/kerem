"use client";

import { useEffect, useState } from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import "../styles/Intro.css";

const FULL_TITLE = "Hi, I'm Kerem.";
const NAME_START = FULL_TITLE.indexOf("Kerem");

function Intro() {
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    const start = setTimeout(() => {
      const id = setInterval(() => {
        setTyped((n) => {
          if (n >= FULL_TITLE.length) {
            clearInterval(id);
            return n;
          }
          return n + 1;
        });
      }, 130);
      return () => clearInterval(id);
    }, 600);
    return () => clearTimeout(start);
  }, []);

  const before = FULL_TITLE.slice(0, Math.min(typed, NAME_START));
  const name = FULL_TITLE.slice(NAME_START, typed);

  return (
    <div id="intro">
      <span className="intro-title">
        {before}
        <span className="intro-name">{name}</span>
        <span className="intro-cursor" aria-hidden="true">
          |
        </span>
      </span>
      <div className="intro-subtitle">
        ex-@UCL | currently @Columbia | building things and shipping
        code
      </div>
      <div className="intro-desc">
        I&apos;m an MS CS student at Columbia University, currently based in New York. I&apos;m interested in foundational models, interpretability research and the occasional tinkering with whatever fascinates me that day.
      </div>
      <a
        href="mailto:cankeremakbulut@gmail.com"
        className="intro-contact"
      >
        <EmailRoundedIcon fontSize="small" />
        <span>Say hi!</span>
      </a>
    </div>
  );
}

export default Intro;
