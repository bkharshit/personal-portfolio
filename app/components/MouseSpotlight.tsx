"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";

export default function MouseSpotlight() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Update motion values directly
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        }

        const handleMouseEnter = () => {
            setIsVisible(true);
        }

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [isVisible, mouseX, mouseY]); // Added isVisible, mouseX, mouseY dependencies

    const background = useMotionTemplate`radial-gradient(circle 400px at ${springX}px ${springY}px, rgba(124, 92, 252, 0.08), transparent 80%)`;

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{
                opacity: isVisible ? 1 : 0,
                background,
            }}
        />
    );
}
