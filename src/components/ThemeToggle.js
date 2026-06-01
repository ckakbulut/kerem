"use client";

import { useEffect, useState } from "react";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import "../styles/ThemeToggle.css";

function ThemeToggle() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const current =
            document.documentElement.dataset.theme === "light"
                ? "light"
                : "dark";
        if (current !== theme) setTheme(current);
    }, [theme]);

    const toggle = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        if (next === "light") {
            document.documentElement.dataset.theme = "light";
        } else {
            delete document.documentElement.dataset.theme;
        }
        try {
            localStorage.setItem("theme", next);
        } catch (e) {
            /* ignore storage failures */
        }
    };

    const Icon = theme === "dark" ? LightModeRoundedIcon : DarkModeRoundedIcon;
    const label =
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

    return (
        <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-label={label}
            title={label}
            suppressHydrationWarning
        >
            <Icon style={{ fontSize: 22 }} suppressHydrationWarning />
        </button>
    );
}

export default ThemeToggle;
