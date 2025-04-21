"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

export default function Toggler() {
    const [active, setActive] = useState(false);

    const toggle = () => setActive(!active);

    return (
        <div className="py-24 bg-slate-900 text-white flex items-center justify-center">
            <div
                className={`flex border-4 p-5 rounded-full w-108 duration-300 ${
                    active && "justify-end border-emerald-500"
                }`}
            >
                <motion.button
                    layout
                    onClick={toggle}
                    className={`size-48 rounded-full overflow-hidden cursor-pointer`}
                >
                    <div
                        className={`w-full h-full duration-300 ${
                            active ? "bg-emerald-500" : "bg-white"
                        }`}
                    ></div>
                </motion.button>
            </div>
        </div>
    );
}
