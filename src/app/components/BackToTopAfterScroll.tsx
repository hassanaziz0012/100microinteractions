"use client";
import React, { useEffect, useState } from "react";
import LongArticle from "./placeholders/LongArticle";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function BackToTopAfterScroll() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => setScroll(window.scrollY));

        return () =>
            window.removeEventListener("scroll", () =>
                setScroll(window.scrollY)
            );
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative">
            <LongArticle />

            <AnimatePresence>
                {scroll >= 200 && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={scrollToTop}
                        className="sticky bottom-6 right-6 ml-auto cursor-pointer size-12 bg-slate-900 text-white rounded-full flex items-center justify-center focus:ring-2 focus:ring-offset-4 focus:ring-slate-900"
                    >
                        <ArrowUp />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
