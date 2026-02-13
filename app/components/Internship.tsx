"use client";

import { motion } from "framer-motion";

interface InternshipItem {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string[];
}

const internships: InternshipItem[] = [
    {
        company: "Bharat Electronics Limited (BEL)",
        role: "Intern",
        period: "Mar 2021 – April 2021",
        location: "Bengaluru, India",
        description: [
            "Gained knowledge about working and applications of various communications equipment and radars in Military Communication department.",
        ],
    },
    {
        company: "Hindustan Aeronautics Limited (HAL)",
        role: "Intern",
        period: "Jan 2020",
        location: "Bengaluru, India",
        description: [
            "Gained knowledge of Flight Radar, Navigation and Communication System.",
            "Performed testing and verifying various grounding points of Mirage2000 fighter jet.",
        ],
    },
];

const cardVariants = {
    hidden: (direction: number) => ({
        opacity: 0,
        x: direction * 60,
    }),
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" as const },
    },
};

const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" as const },
    },
};

export default function Internship() {
    return (
        <section className="experience" id="internship">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-tag">Internship</span>
                <h2 className="section-title">Industry Exposure</h2>
                <p className="section-subtitle">
                    Hands-on experience at India&apos;s premier defence and
                    aerospace organizations.
                </p>
            </motion.div>

            <div className="timeline">
                {internships.map((intern, index) => (
                    <div className="timeline-item" key={intern.company}>
                        <motion.div
                            className="timeline-dot"
                            variants={dotVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        />

                        <motion.div
                            className="timeline-card"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            custom={index % 2 === 0 ? -1 : 1}
                            whileHover={{
                                y: -6,
                                boxShadow: "0 12px 40px rgba(124, 92, 252, 0.15)",
                                transition: { duration: 0.3 },
                            }}
                        >
                            <div className="timeline-card-header">
                                <span className="timeline-date">
                                    {intern.period}
                                </span>
                                <span className="timeline-location">
                                    📍 {intern.location}
                                </span>
                            </div>
                            <h3 className="timeline-company">{intern.company}</h3>
                            <p className="timeline-role">{intern.role}</p>
                            <ul className="timeline-bullets">
                                {intern.description.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
