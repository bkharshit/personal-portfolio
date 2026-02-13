"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ModeToggleProps {
    mode: "professional" | "creator";
    onToggle: () => void;
}

export default function ModeToggle({ mode, onToggle }: ModeToggleProps) {
    const isCreator = mode === "creator";

    return (
        <div className="mode-toggle-wrapper">
            <button
                className="mode-toggle"
                onClick={onToggle}
                aria-label={`Switch to ${isCreator ? "professional" : "creator"} mode`}
            >
                <motion.div
                    className="mode-toggle-slider"
                    animate={{
                        left: isCreator ? "50%" : "0%",
                        background: isCreator
                            ? "linear-gradient(135deg, rgba(244, 114, 182, 0.25), rgba(124, 92, 252, 0.3), rgba(59, 130, 246, 0.25))"
                            : "linear-gradient(135deg, rgba(124, 92, 252, 0.2), rgba(59, 130, 246, 0.25), rgba(124, 92, 252, 0.2))",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 22,
                        mass: 0.6,
                    }}
                />
                <AnimatePresence mode="wait">
                    <motion.span
                        key={`pro-${isCreator}`}
                        className={`mode-toggle-label ${!isCreator ? "active" : ""}`}
                        animate={!isCreator ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        Professional
                    </motion.span>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                    <motion.span
                        key={`creator-${isCreator}`}
                        className={`mode-toggle-label ${isCreator ? "active" : ""}`}
                        animate={isCreator ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        Creator
                    </motion.span>
                </AnimatePresence>
            </button>
        </div>
    );
}
