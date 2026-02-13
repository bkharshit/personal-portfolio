"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    // ... (rest of imports/variants remain same, just adding Image import)

    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const visualVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.8, ease: "backOut" },
    },
};



export default function CreatorPortfolio() {
    return (
        <section className="creator-portfolio" id="creator">
            {/* Background */}
            <div className="hero-bg">
                <div className="hero-bg-gradient" />
                <div className="hero-grid" />
                <div className="hero-particles">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="hero-particle" />
                    ))}
                </div>
            </div>

            {/* Hero-like intro */}
            <div className="creator-hero">
                {/* Centered Tagline */}
                <motion.div
                    className="creator-hero-header"
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                >
                    <span className="creator-tagline">
                        ✨ Turning dreams into chapters
                    </span>
                </motion.div>

                <div className="creator-hero-split">
                    <motion.div
                        className="creator-hero-content"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1 className="creator-name" variants={itemVariants}>
                            Hey, It&apos;s me{" "}
                            <span className="creator-name-gradient">Harshit</span>{" "}
                            again
                        </motion.h1>
                        <motion.p className="creator-description" variants={itemVariants}>
                            When I&apos;m not writing code, you&apos;ll find me
                            trekking mountain trails, travelling through places,
                            walking alongside beaches, enjoying
                            music, dancing, sketching, or capturing life through my Pixel
                            lens. This is my creative side.
                        </motion.p>

                        {/* Mobile Visual (Interleaved) */}
                        <motion.div
                            className="creator-mobile-visual"
                            variants={visualVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-50px" }}
                        >
                            <div className="big-profile-wrapper">
                                <Image
                                    src="/harshit-creator.jpg"
                                    className="big-profile-base"
                                    alt="Harshit Creator"
                                    width={220}
                                    height={220}
                                />
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <a
                                className="btn-instagram"
                                href="https://www.instagram.com/harshitbk/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                                Follow @harshitbk
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Big Visual on Right */}
                    <motion.div
                        className="creator-hero-visual"
                        variants={visualVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="big-profile-wrapper">
                            {/* Animated Ring (Commented out by user) */}
                            {/* <motion.div
                                className="big-loader-ring"
                                animate={{ rotate: 360 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 8,
                                    ease: "linear",
                                }}
                            /> */}
                            <Image
                                src="/harshit-creator.jpg"
                                className="big-profile-base"
                                alt="Harshit Creator"
                                width={220}
                                height={220}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Coming Soon Section */}
            <motion.div
                className="coming-soon-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <motion.div className="coming-soon-card" variants={itemVariants}>
                    <div className="coming-soon-content">
                        <motion.h2 className="coming-soon-title" variants={itemVariants}>
                            Cooking something...
                        </motion.h2>
                        <motion.p className="coming-soon-subtitle" variants={itemVariants}>
                            This space of the site would be ready pretty soon
                        </motion.p>

                        <motion.div className="loader-wrapper" variants={itemVariants}>
                            <motion.div
                                className="loader-ring"
                                animate={{ rotate: 360 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "linear",
                                }}
                            />
                            <motion.div
                                className="loader-core"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                }}
                            />
                        </motion.div>

                        {/* Connect Section (Commented out by user) */}
                        {/* <div className="connect-section">
                            <p className="connect-text">
                                until then let&apos;s connect on instagram :
                            </p>

                            <div className="profile-connect">
                                <div className="profile-image-wrapper">
                                    <img
                                        src="/harshit-creator.jpg"
                                        alt="Harshit"
                                        className="profile-image"
                                    />
                                    <div className="profile-status-dot" />
                                </div>
                                <motion.a
                                    href="https://www.instagram.com/harshitbk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="instagram-connect-btn"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                    <span>Follow @harshitbk</span>
                                </motion.a>
                            </div>
                        </div> */}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
