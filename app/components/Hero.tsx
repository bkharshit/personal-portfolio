"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay, ease: "easeOut" as const },
    }),
};

export default function Hero() {
    return (
        <section className="hero" id="hero">
            {/* Background layers */}
            <div className="hero-bg">
                <div className="hero-bg-gradient" />
                <div className="hero-grid" />
                <div className="hero-particles">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="hero-particle" />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="hero-content" id="about">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.2}
                >
                    <div className="hero-badge">
                        <span className="hero-badge-dot" />
                        Available for opportunities
                    </div>
                </motion.div>

                <motion.h1
                    className="hero-name"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.4}
                >
                    Hi, I&apos;m{" "}
                    <span className="hero-name-gradient">Harshit</span>
                    {/* <span className="creator-name-gradient">Harshit</span> */}
                </motion.h1>

                {/* <motion.p
                    className="hero-title"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.6}
                >
                    Software Engineer
                </motion.p> */}

                <motion.p
                    className="hero-description"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.8}
                >
                    I am software engineer passionate about solving problems
                    and optimizing workflows—making tasks easier and faster for
                    both humans and machines, one Jira ticket at a time (mostly
                    more than one).
                    <br />
                    <br />
                    With experience across a diverse tech stack, I&apos;m always
                    expanding my expertise, learning new things, and delivering
                    impactful solutions along the way.
                </motion.p>

                <motion.div
                    className="hero-skills"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.9}
                >
                    {[
                        "Java",
                        "Spring Boot",
                        "React",
                        "Golang",
                        "Python",
                        "Database",
                        "System Design",
                        "Microservices",
                        "Docker",
                        "Kubernetes",
                        "SQL",
                    ].map((skill) => (
                        <span key={skill} className="skill-tag">
                            {skill}
                        </span>
                    ))}
                </motion.div>

                <motion.div
                    className="hero-cta"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={1.0}
                >
                    <a
                        className="btn-secondary"
                        href="#experience"
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById("experience");
                            if (element) {
                                window.scrollTo({
                                    top: element.offsetTop - 75,
                                    behavior: "smooth",
                                });
                            }
                        }}
                    >
                        View My Work ↓
                    </a>
                    <a href="#connect" className="btn btn-primary">
                        Get In Touch
                    </a>
                </motion.div>
            </div>
        </section >
    );
}
