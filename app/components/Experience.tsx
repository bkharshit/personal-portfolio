"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    duration: string;
    current: boolean;
    location: string;
    description: string[];
}

const experiences: ExperienceItem[] = [
    {
        company: "Lowe's India",
        role: "Software Engineer",
        period: "Oct 2024 – Present",
        duration: "Current",
        current: true,
        location: "Bengaluru, India",
        description: [
            "Building scalable applications for one of the largest home improvement retailers in US.",
            "Core part of building and maintaining the user session recording platform using open source technology to replace a licensed product, to save licensing cost of about $500K+ per year",
            "Scaled the application from recording a single session to over 600K+ sessions per day.",
        ],
    },
    {
        company: "Tata Consultancy Services (TCS)",
        role: "Systems Engineer - Digital",
        period: "Aug 2021 – Oct 2024",
        duration: "3 Years",
        current: false,
        location: "Bengaluru, India",
        description: [
            "Full Stack Java Developer and Automation Engineer for American Express (AmEx) — payment cards, banking and financial services.",
            "Designed & implemented RESTful APIs for seamless front-end ↔ back-end communication.",
            "Automated business processes, saving millions of dollars annually in operational costs.",
            "Built web applications using React & Angular 13 with reusable component libraries.",
            "Developed a wrapper REST API for HCM, reducing data refresh from 4 hours to real-time.",
        ],
    },
];

const cardVariants = {
    hidden: (direction: number) => ({
        opacity: 0,
        x: direction * 60,
        scale: 0.95,
    }),
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.7, ease: "easeOut" as const },
    },
};

const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 400,
            damping: 15,
        },
    },
};

const bulletVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: 0.1 * i, duration: 0.4, ease: "easeOut" as const },
    }),
};

export default function Experience() {
    return (
        <section className="experience" id="experience">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-tag">Career</span>
                <h2 className="section-title">Work Experience</h2>
                <p className="section-subtitle">
                    A timeline of my professional journey in software
                    engineering.
                </p>
            </motion.div>

            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={exp.company}>
                        {/* Dot on the center line */}
                        <motion.div
                            className={`timeline-dot ${exp.current ? "current" : ""}`}
                            variants={dotVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-50px" }}
                        />

                        {/* Card */}
                        <motion.div
                            className="timeline-card"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-100px" }}
                            custom={index % 2 === 0 ? -1 : 1}
                            whileHover={{
                                y: -6,
                                boxShadow: "0 12px 40px rgba(124, 92, 252, 0.15)",
                                transition: { duration: 0.3 },
                            }}
                        >
                            <div className="timeline-card-header">
                                <span
                                    className={`timeline-date ${exp.current ? "current-badge" : ""}`}
                                >
                                    {exp.current && "● "}
                                    {exp.period}
                                </span>
                                <span className="timeline-location">
                                    📍 {exp.location}
                                </span>
                            </div>
                            <h3 className="timeline-company">{exp.company}</h3>
                            <p className="timeline-role">{exp.role}</p>
                            <ul className="timeline-bullets">
                                {exp.description.map((bullet, i) => (
                                    <motion.li
                                        key={i}
                                        variants={bulletVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        custom={i}
                                    >
                                        {bullet}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
