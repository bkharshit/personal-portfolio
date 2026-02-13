"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="footer-inner">
                <div className="footer-links">
                    <a
                        href="https://github.com/bkharshit"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/bkharshit"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://leetcode.com/u/bkharshit/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LeetCode
                    </a>
                    <a href="mailto:bkharshit27@gmail.com">Email</a>
                </div>
                {/* <p className="footer-copy">
                    © {new Date().getFullYear()} B K Harshit. Built with
                    Next.js.
                </p> */}
            </div>
        </motion.footer>
    );
}
