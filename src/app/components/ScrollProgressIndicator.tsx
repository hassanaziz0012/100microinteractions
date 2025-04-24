"use client";
import { motion, useScroll } from "motion/react";
import React from "react";
import LongArticle from "./placeholders/LongArticle";

export default function ScrollProgressIndicator() {
    const { scrollYProgress } = useScroll();

    return (
        <div>
            <div className="fixed top-0 left-0 right-0 w-full h-2 bg-gray-300">
                <motion.div
                    className="bg-amber-600 h-full absolute left-0 w-full"
                    style={{
                        scaleX: scrollYProgress,
                        transformOrigin: "left",
                    }}
                ></motion.div>
            </div>
            <LongArticle />
        </div>
    );
}


