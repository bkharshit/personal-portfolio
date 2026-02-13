"use client";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

interface ModeToggleProps {
    isCreator: boolean;
}

export default function ModeToggle({ isCreator }: ModeToggleProps) {
    const controls = useAnimation();

    useEffect(() => {
        // Reset animation when mode changes to ensure it's ready for next interaction
        controls.set({ x: 0 });
    }, [isCreator, controls]);

    const handleActiveClick = async () => {
        // Vibrate animation
        await controls.start({
            x: [0, -4, 4, -4, 4, 0],
            transition: { duration: 0.3 }
        });
    };

    return (
        <motion.div
            className="mode-toggle-wrapper"
            animate={controls}
        >
            <div className="mode-toggle">
                {/* Background Slider */}
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

                {/* Professional Button/Link */}
                {isCreator ? (
                    <Link
                        href="/"
                        className="mode-toggle-label"
                        scroll={true}
                    >
                        Professional
                    </Link>
                ) : (
                    <button
                        className="mode-toggle-label active"
                        onClick={handleActiveClick}
                    >
                        Professional
                    </button>
                )}

                {/* Creator Button/Link */}
                {!isCreator ? (
                    <Link
                        href="/creator"
                        className="mode-toggle-label"
                        scroll={true}
                    >
                        Creator
                    </Link>
                ) : (
                    <button
                        className="mode-toggle-label active"
                        onClick={handleActiveClick}
                    >
                        Creator
                    </button>
                )}
            </div>
        </motion.div>
    );
}
