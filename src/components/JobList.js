"use client";

import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FadeInSection from "./FadeInSection";

const EXPERIENCE_ITEMS = {
    Baykar: {
        jobTitle: "LLM Research Engineer @",
        duration: "October 2024 - January 2025",
        desc: [
            "Researched continual pre-training, instruction fine-tuning and alignment of 8B–9B parameter open-source models as part of the team building T3AI, Turkey's first large language model.",
            "Trained a BERTurk-based Turkish content classifier on 150k samples synthetically annotated with zero-shot-CoT, hitting 70%+ F1 as a binary educational-quality filter.",
            "Built data pipelines with MinHash deduplication and Gopher-style heuristic filtering, lifting T3AI's Turkish MMLU / Winogrande / HellaSwag / ARC scores by ~4% on average.",
            "Implemented a Direct Preference Optimization pipeline on top of HuggingFace TRL, adding state-of-the-art RLHF methods that yielded a further ~2.5% gain on the same benchmarks.",
        ],
    },
    Turkcell: {
        jobTitle: "Machine Learning Intern @",
        duration: "December 2023 - June 2024",
        desc: [
            "Worked in the Computer Vision team developing AI services for contracting companies.",
            "Implemented SoTA optimizers and algorithms in PyTorch, improving Turkcell's face detection F1 score by 3%.",
            "Created AIHub Web, Turkcell's AI microservices platform, using Next.js — designed and built landing, products, details, and demo pages with token-based access via JSON Web Tokens.",
            "Built a Flutter companion app with RESTful APIs for 30+ contracted developers, released on Apple TestFlight.",
        ],
    },
    "Stellar Fusion": {
        jobTitle: "Software Engineering Intern @",
        duration: "November 2022 - June 2023",
        desc: [
            "Interned at a FinTech startup, working on front-end and back-end of the main web platform in JavaScript, TypeScript, and React.",
            "Built social features (likes on user estimations) and added new endpoints to the Amity.js library, cutting network response times by 50%.",
            "Wrote unit and component tests with Jest and React Testing Library, achieving over 95% branch and 97% line coverage.",
        ],
    },
    IBM: {
        jobTitle: "Software Engineer & UX Designer @",
        duration: "September 2021 - May 2022",
        desc: [
            "Led development of WAPETS 2.0 — a multiplatform AR companion app using AI pets to help the elderly with daily tasks.",
            "Built Unity GUIs for Windows and Android with AR pets responding to mouse and touch input; integrated chatbot, speech-to-text, and TTS via IBM's Watson toolkit.",
            "Wrote RESTful APIs in Unity and Django so future contributors could extend features and surface local news and transit times based on user location.",
        ],
    },
};

const TabPanel = ({ children, value, index }) => (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
    >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
);

function JobList() {
    const [value, setValue] = useState(0);
    const [isHorizontal, setIsHorizontal] = useState(false);

    useEffect(() => {
        const update = () => setIsHorizontal(window.innerWidth < 600);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const keys = Object.keys(EXPERIENCE_ITEMS);

    return (
        <div className="joblist-root">
            <Tabs
                orientation={isHorizontal ? "horizontal" : "vertical"}
                variant={isHorizontal ? "fullWidth" : "scrollable"}
                value={value}
                onChange={(_, next) => setValue(next)}
                TabIndicatorProps={{
                    sx: { backgroundColor: "var(--green-bright)" },
                }}
                sx={{
                    borderRight: isHorizontal
                        ? "none"
                        : "1px solid var(--lightest-navy)",
                    borderBottom: isHorizontal
                        ? "1px solid var(--lightest-navy)"
                        : "none",
                    minWidth: isHorizontal ? "auto" : 200,
                    "& .MuiTab-root": {
                        color: "var(--lightest-slate)",
                        fontFamily: "var(--font-ntr), sans-serif",
                        fontSize: 16,
                        textAlign: "left",
                        alignItems: "flex-start",
                        textTransform: "none",
                    },
                    "& .Mui-selected": {
                        color: "var(--green-bright) !important",
                    },
                }}
            >
                {keys.map((key, i) => (
                    <Tab
                        label={isHorizontal ? `0${i}.` : key}
                        id={`tab-${i}`}
                        key={key}
                    />
                ))}
            </Tabs>
            {keys.map((key, i) => (
                <TabPanel value={value} index={i} key={key}>
                    <span className="joblist-job-title">
                        {EXPERIENCE_ITEMS[key].jobTitle}{" "}
                    </span>
                    <span className="joblist-job-company">{key}</span>
                    <div className="joblist-duration">
                        {EXPERIENCE_ITEMS[key].duration}
                    </div>
                    <ul className="job-description">
                        {EXPERIENCE_ITEMS[key].desc.map((descItem, j) => (
                            <FadeInSection delay={`${j + 1}00ms`} key={j}>
                                <li>{descItem}</li>
                            </FadeInSection>
                        ))}
                    </ul>
                </TabPanel>
            ))}
        </div>
    );
}

export default JobList;
