"use client";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

export default function Accordion() {
    const [active, setActive] = useState(false);

    const toggle = () => setActive(!active);

    return (
        <div className="m-20 flex justify-center">
            <div className="[--radius:1rem] rounded-(--radius) shadow-lg max-w-xl">
                <div className="flex items-start bg-gray-50 p-5 shadow rounded-(--radius)">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium, nisi?
                    </p>
                    <button onClick={toggle} className="h-[1lh] cursor-pointer">
                        <ChevronDown
                            className={`duration-300 ${
                                active === true ? "rotate-180" : "rotate-0"
                            }`}
                        />
                    </button>
                </div>
                <div className="overflow-hidden">
                    <AnimatePresence>
                        {active && (
                            <motion.div
                                initial={{
                                    height: 0,
                                    opacity: 0,
                                    translateY: "-100%",
                                }}
                                animate={{
                                    height: "auto",
                                    opacity: 1,
                                    translateY: "0%",
                                }}
                                exit={{
                                    height: 0,
                                    opacity: 0,
                                    translateY: "-100%",
                                    transition: {
                                        opacity: {
                                            delay: 0.5,
                                            duration: 0,
                                        },
                                        translateY: {
                                            delay: 0.5,
                                            duration: 0,
                                        },
                                    },
                                }}
                                transition={{
                                    opacity: { delay: 0.5 },
                                    translateY: { delay: 0.5, bounce: 0 },
                                    type: "tween",
                                    bounce: 0,
                                }}
                                className={`bg-white rounded-(--radius)`}
                            >
                                <div className="p-5">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Error inventore autem
                                    sequi quos totam libero provident cupiditate
                                    veniam amet earum, iste maiores repellendus
                                    atque necessitatibus accusantium distinctio
                                    laboriosam omnis assumenda harum culpa at
                                    ex. Veritatis?
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
