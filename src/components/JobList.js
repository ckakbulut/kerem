import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        height: 300,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    const isHorizontal = window.innerWidth < 600;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const a11yProps = (index, isHorizontal) => {
    return isHorizontal
        ? {
              id: `full-width-tab-${index}`,
              "aria-controls": `full-width-tabpanel-${index}`,
          }
        : {
              id: `vertical-tab-${index}`,
          };
};

const JobList = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [isHorizontal, setIsHorizontal] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setIsHorizontal(window.innerWidth < 600);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const experienceItems = {
        "Turkcell (CV)": {
            jobTitle: "Machine Learning Intern @",
            duration: "December 2023 - ongoing",
            desc: [
                "Working in the Computer Vision team focusing on developing AI services for contracting companies.",
                "Created and (currently) developing AIHub Web, Turkcell’s AI microservices platform, using Next.js.",
                "Developed a Flutter app and integrated RESTful APIs for contracted customers and developers to test and utilize Turkcell’s AI services - released the app on Apple Testflight for 15 developers.",
            ],
        },
        "Stellar Fusion Group": {
            jobTitle: "Software Engineering Intern @",
            duration: "November 2022 - June 2023",
            desc: [
                "Interned at a financial services startup, worked on front-end and back-end development of the company’s main web platform using JavaScript, TypeScript, and React 18.",
                "Implemented social media features such as being able to like other user estimations and built new API endpoints in an existing library (Amity.js) to decrease network response times by 50%.",
                "Developed unit and component tests using Jest and REACT Testing library in order to produce clean, bug-free code attaining over 95% branch and 97% line coverage.",
            ],
        },
        "Turkcell (BIP)": {
            jobTitle: "Software Engineering Intern @",
            duration: "August 2022 - September 2022",
            desc: [
                "Worked in a team specializing in rewriting BIP Web, Turkey’s largest messaging platform with 30+ million active monthly users, from Angular to React.",
                "Developed rigorous testing methods in REACT to catch 25+ bugs and improve efficiency of user interactions by reducing message load times by 20%.",
                "Learned and worked with integrating XMPP features through xmpp.js into BIP Web.",
            ],
        },
        IBM: {
            jobTitle: "Software Engineer & UX Designer @",
            duration: "September 2021 - May 2022",
            desc: [
                "Lead the development of the WAPETS 2.0 - a multiplatform application using AR pets with AI to help and assist the elderly with their daily tasks.",
                "Programmed in Unity to develop GUIs for Windows and Android, creating AR pets responding to different user input such as mouse clicks and screen touches - integrated chatbot functionalities, speech-to-text input and text-to-speech response using IBM’s Watson toolkit to allow users to command their virtual pets in various ways.",
                "Built and integrated RESTful APIs in Unity and Django enabling future developers to add new features and control databases containing user profile information, and to display local news and public transportation times depending on user location.",
            ],
        },
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation={!isHorizontal ? "vertical" : "horizontal"}
                variant={isHorizontal ? "fullWidth" : "scrollable"}
                value={value}
                onChange={handleChange}
                className={classes.tabs}
            >
                {Object.keys(experienceItems).map((key, i) => (
                    <Tab
                        label={isHorizontal ? `0${i}.` : key}
                        {...a11yProps(i, isHorizontal)}
                        key={i}
                    />
                ))}
            </Tabs>
            {Object.keys(experienceItems).map((key, i) => (
                <TabPanel value={value} index={i} key={i}>
                    <span className="joblist-job-title">
                        {experienceItems[key]["jobTitle"] + " "}
                    </span>
                    <span className="joblist-job-company">{key}</span>
                    <div className="joblist-duration">
                        {experienceItems[key]["duration"]}
                    </div>
                    <ul className="job-description">
                        {experienceItems[key]["desc"].map((descItem, j) => (
                            <FadeInSection delay={`${j + 1}00ms`} key={j}>
                                <li>{descItem}</li>
                            </FadeInSection>
                        ))}
                    </ul>
                </TabPanel>
            ))}
        </div>
    );
};

export default JobList;
