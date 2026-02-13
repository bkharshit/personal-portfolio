"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ModeToggle from "./ModeToggle";

export default function Header() {
    const pathname = usePathname();
    const isCreator = pathname === "/creator";

    const [scrolled, setScrolled] = useState(false);
    // Initialize with true (default dark) to match server element
    const [darkMode, setDarkMode] = useState(true);
    const [mounted, setMounted] = useState(false);
    // ... keeps going, just update the top imports and the logo link

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        // Check localStorage on mount
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            setDarkMode(false);
        } else if (savedTheme === "dark") {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const theme = darkMode ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [darkMode, mounted]);

    return (
        <motion.header
            className={`header ${scrolled ? "scrolled" : ""}`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
            <div className="header-inner">
                <Link className="header-logo" href="/">
                    <Image
                        src="/travel_logo_bw.svg"
                        alt="Harshit B K"
                        width={40}
                        height={40}
                        className="header-logo-img"
                    />
                </Link>

                <ModeToggle isCreator={isCreator} />

                <button
                    className="theme-toggle"
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label="Toggle theme"
                    title={
                        darkMode
                            ? "Switch to light mode"
                            : "Switch to dark mode"
                    }
                >
                    <span className="theme-toggle-icon">
                        {darkMode ? (
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line
                                    x1="4.22"
                                    y1="4.22"
                                    x2="5.64"
                                    y2="5.64"
                                />
                                <line
                                    x1="18.36"
                                    y1="18.36"
                                    x2="19.78"
                                    y2="19.78"
                                />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line
                                    x1="4.22"
                                    y1="19.78"
                                    x2="5.64"
                                    y2="18.36"
                                />
                                <line
                                    x1="18.36"
                                    y1="5.64"
                                    x2="19.78"
                                    y2="4.22"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </span>
                </button>
            </div>
        </motion.header>
    );
}
