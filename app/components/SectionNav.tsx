"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "internship", label: "INTERNSHIP" },
    { id: "education", label: "EDUCATION" },
    { id: "connect", label: "CONNECT" },
];

export default function SectionNav() {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -40% 0px", // Trigger when section is in middle of viewport
                threshold: 0,
            }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleClick = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 75, // Offset for header
                behavior: "smooth",
            });
            setActiveSection(id);
        }
    };

    return (
        <motion.nav
            className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6 group p-4 transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
        >
            {sections.map(({ id, label }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => handleClick(id, e)}
                    className="flex items-center gap-4 cursor-pointer"
                >
                    {/* Line Indicator */}
                    <div
                        className={`h-[1px] transition-all duration-300 ${activeSection === id
                            ? "w-8 bg-[var(--nav-line-active)]"
                            : "w-4 bg-[var(--nav-line-inactive)] group-hover:bg-[var(--nav-line-inactive)]"
                            } group-hover:${activeSection === id ? "w-12" : "w-6"
                            }`}
                    />

                    {/* Label - Reveals on Sidebar Hover */}
                    <span
                        className={`text-xs font-bold tracking-widest transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 ${activeSection === id
                            ? "text-[var(--nav-text-active)]"
                            : "text-[var(--nav-text-inactive)] group-hover:text-[var(--nav-text-inactive)]"
                            }`}
                    >
                        {label}
                    </span>
                </a>
            ))}
        </motion.nav>
    );
}
