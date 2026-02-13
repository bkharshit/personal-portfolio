"use client";

import { motion } from "framer-motion";

interface EducationItem {
    institution: string;
    degree: string;
    period: string;
    location: string;
    grade: string;
}

const education: EducationItem[] = [
    {
        institution: "Sapthagiri College Of Engineering",
        degree: "B.E in Electronics and Communications Engineering (ECE)",
        period: "Aug 2017 – Aug 2021",
        location: "Bengaluru, India",
        grade: "8.75/10 CGPA",
    },
    {
        institution: "Kendriya Vidyalaya MG Railway",
        degree: "12th Standard",
        period: "April 2016 – March 2017",
        location: "Bengaluru, India",
        grade: "87%",
    },
    {
        institution: "Kendriya Vidyalaya MG Railway",
        degree: "10th Standard",
        period: "April 2014 – March 2015",
        location: "Bengaluru, India",
        grade: "10/10 CGPA",
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

export default function Education() {
    return (
        <section className="experience" id="education">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-tag">Education</span>
                <h2 className="section-title">Academic Journey</h2>
                <p className="section-subtitle">
                    My educational background and academic achievements.
                </p>
            </motion.div>

            <div className="timeline">
                {education.map((edu, index) => (
                    <div className="timeline-item" key={`${edu.institution}-${edu.degree}`}>
                        <motion.div
                            className="timeline-dot"
                            variants={dotVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-50px" }}
                        />

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
                                <span className="timeline-date">
                                    {edu.period}
                                </span>
                                <span className="timeline-location">
                                    📍 {edu.location}
                                </span>
                            </div>
                            <h3 className="timeline-company">{edu.institution}</h3>
                            <p className="timeline-role">{edu.degree}</p>
                            <div className="education-grade">
                                <span className="grade-badge">
                                    🎓 Grade: {edu.grade}
                                </span>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
