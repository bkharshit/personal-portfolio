"use client";

import { motion } from "framer-motion";

const connectLinks = [
    {
        name: "Email",
        value: "bkharshit27@gmail.com",
        href: "mailto:bkharshit27@gmail.com",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
        ),
        gradient: "from-blue-500/20 to-purple-500/20",
        border: "group-hover:border-blue-500/50",
        textGradient: "from-blue-200 to-purple-200",
    },
    {
        name: "LinkedIn",
        value: "linkedin.com/in/bkharshit",
        href: "https://www.linkedin.com/in/bkharshit/",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.21-.43-2-1.52-2A1.6 1.6 0 0013 13.37V19h-3v-9h3v1.3a3.2 3.2 0 012.8-1.4c2 0 3.2 1.3 3.2 4.14z" />
            </svg>
        ),
        gradient: "from-blue-600/20 to-cyan-500/20",
        border: "group-hover:border-blue-400/50",
        textGradient: "from-blue-200 to-cyan-200",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut" as const,
        },
    }),
};

export default function Connect() {
    return (
        <section className="experience" id="connect">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-tag">Connect</span>
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-subtitle">
                    Have an opportunity you want to discuss about or just wanted to say Hi?
                </p>
                <p className="section-subtitle">
                    I&apos;d love to hear from you.
                </p>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full mt-12">
                {connectLinks.map((link, i) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`connect-card-link group relative h-25 px-6 w-72 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center gap-2 text-center overflow-hidden`}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        {/* Hover Gradient Background */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        />

                        {/* Border Glow */}
                        <div className={`absolute inset-0 border-2 border-transparent ${link.border} rounded-2xl transition-colors duration-300`} />

                        {/* Icon */}
                        <div className="connect-card-icon relative z-10 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300 text-slate-300 group-hover:text-white group-hover:scale-110 transform">
                            {link.icon}
                        </div>

                        {/* Text */}
                        <div className="relative z-10">
                            {/* <h3 className="text-xl font-bold text-slate-200 group-hover:text-white mb-1">
                                {link.name}
                            </h3> */}
                            <p className={`connect-card-text text-sm font-medium bg-gradient-to-r ${link.textGradient} bg-clip-text text-transparent opacity-80 group-hover:opacity-100`}>
                                {link.value}
                            </p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
