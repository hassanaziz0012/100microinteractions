"use client";
import React, { useEffect, useState } from "react";
import { Mic, MoonStar, Play, Stars, Sun } from "lucide-react";
import { motion } from "motion/react";

export default function LightDarkToggle() {
    return (
        <div className="bg-white dark:bg-slate- dark:mix-blend-difference dark:text-white transition-all duration-300">
            <DarkCover>
                <Navbar />
                <Hero />
            </DarkCover>
        </div>
    );
}

function Navbar() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <nav className="py-3 duration-300 dark:text-white flex justify-between items-center max-w-6xl mx-auto px-5">
            <p className="text-xl font-semibold">REVO</p>

            <ul className="flex gap-x-6 items-center max-md:hidden">
                <li>
                    <a href="#">About us</a>
                </li>
                <li>
                    <a href="#">How it works</a>
                </li>
                <li>
                    <a href="#">Pricing</a>
                </li>
                <li>
                    <button className="rounded-md px-6 py-3 text-white bg-indigo-500">
                        Login
                    </button>
                </li>
                <li></li>
            </ul>
            <div
                className={`flex w-16 min-h-8 rounded-full border-2 border-sky-400 dark:border-sky-800 ${
                    theme === "light" ? "justify-start" : "justify-end"
                }`}
            >
                <motion.button
                    layout
                    onClick={toggleTheme}
                    className="size-8 rounded-full bg-sky-400 dark:bg-sky-800 cursor-pointer flex items-center justify-center"
                >
                    <div className="text-white">
                        {theme === "light" ? (
                            <motion.div
                                key={"light"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Sun size={20} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key={"dark"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <MoonStar size={20} />
                            </motion.div>
                        )}
                    </div>
                </motion.button>
            </div>
        </nav>
    );
}

function Hero() {
    const imgs = [
        "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/28408585/pexels-photo-28408585/free-photo-of-close-up-portrait-of-a-man-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/27897903/pexels-photo-27897903/free-photo-of-close-up-portrait-of-a-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.unsplash.com/photo-1688888745596-da40843a8d45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    return (
        <div className="relative isolate">
            <div className="absolute inset-0 bg-[url(https://i.imgur.com/WvEf2jT.jpeg)] bg-center bg-contain opacity-5 -z-1"></div>

            <div className="min-h-screen py-20 max-w-6xl mx-auto px-5 grid grid-cols-[repeat(auto-fit,minmax(min(var(--col-size),100%),1fr))] gap-x-6 gap-y-12 @container [--grid-size:calc(var(--col-size)*2)] [--col-size:28rem]">
                <div className="">
                    <div className="flex flex-col items-start @max-[calc(28rem*2)]:text-center @max-[calc(28rem*2)]:items-center">
                        <div className="py-1 px-3 font-semibold rounded-full border border-indigo-500 text-indigo-500 inline-flex gap-x-2 items-start">
                            <p>Limited slot. Grab it fast!</p>
                            <span className="h-[1lh] flex items-center text-yellow-500">
                                <Stars />
                            </span>
                        </div>
                        <h1 className="text-[clamp(2.25rem,1.179rem+2.857vw,3.75rem)] font-semibold my-6">
                            All-in-One AI Tools in One Platform, One Price
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Get unlimited access to all AI models and enjoy the
                            seamless work that supports your productivity in one
                            platform.
                        </p>

                        <button className="py-3 px-6 rounded-md bg-indigo-500 text-white mt-12">
                            Subscribe Now
                        </button>

                        <div className="flex flex-col gap-y-2 mt-6">
                            <div className="flex">
                                {imgs.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt=""
                                        className={`rounded-full size-10 border border-white object-cover object-center relative`}
                                        style={{ left: `-${i * 6}px` }}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">
                                Trusted by 10,000+ users
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    {/* <img
                        src="https://i.imgur.com/Zj6RbT6.png"
                        className="object-contain object-center rounded-xl"
                    /> */}
                    <AppPreview />
                </div>
            </div>
        </div>
    );
}

function DarkCover({ children }: { children: React.ReactNode }) {
    return (
        <div className="overflow-hidden relative isolate">
            {children}
            <div className="absolute inset-0 w-[100vw] h-[100vh] -translate-x-full dark:translate-x-0 duration-300 bg-slate-900 -z-1"></div>
        </div>
    );
}

function AppPreview() {
    const [browsing, setBrowsing] = useState(false);

    return (
        <div className="max-w-lg mx-auto py-5 bg-white dark:bg-slate-900">
            {/* Header */}
            <header className="p-4 flex items-center border-b border-slate-300 dark:border-slate-700">
                <div className="bg-black p-1 rounded">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
                <span className="ml-2 font-bold">RevoAI</span>
            </header>

            {/* Greeting Section */}
            <div className="p-6">
                <h1 className="text-purple-700 dark:text-purple-500 text-2xl font-bold">
                    Hello, Revo.
                </h1>
                <p className="text-slate-700 dark:text-slate-400 mt-1">
                    What can I help you learn or explore today?
                </p>
            </div>

            {/* Toggle Options */}
            <div className="px-6 flex flex-wrap gap-2 mb-4">
                <div className="bg-slate-100 dark:bg-slate-800 rounded-full px-3 py-1 text-xs flex items-center">
                    <span className="mr-1">🧠</span>
                    <span className="text-slate-700 dark:text-slate-300">
                        deepseek-nvidia
                    </span>
                    <span className="ml-1 text-slate-500 dark:text-slate-400 text-xs">
                        LLM
                    </span>
                </div>

                <div
                    className="bg-slate-100 dark:bg-slate-800 rounded-full px-3 py-1 text-xs flex items-center cursor-pointer"
                    onClick={() => setBrowsing(!browsing)}
                >
                    <span className="mr-1">🌐</span>
                    <span className="text-slate-700 dark:text-slate-300">
                        Browsing: Google
                    </span>
                    <span
                        className={`ml-1 text-xs ${
                            browsing
                                ? "text-green-500"
                                : "text-slate-500 dark:text-slate-400"
                        }`}
                    >
                        {browsing ? "ON" : "OFF"}
                    </span>
                </div>
            </div>

            {/* Action Cards Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] gap-2 px-6 mb-6">
                <div className="border rounded-lg p-3 flex flex-col items-center text-center cursor-pointer">
                    <div className="w-6 h-6 mb-2 text-slate-400">✏️</div>
                    <p className="text-xs text-slate-700 dark:text-slate-400">
                        Write a story in my favorite genre
                    </p>
                </div>

                <div className="border rounded-lg p-3 flex flex-col items-center text-center cursor-pointer">
                    <div className="w-6 h-6 mb-2 text-slate-400">💭</div>
                    <p className="text-xs text-slate-700 dark:text-slate-400">
                        Overcome procrastination
                    </p>
                </div>

                <div className="border rounded-lg p-3 flex flex-col items-center text-center cursor-pointer">
                    <div className="w-6 h-6 mb-2 text-slate-400">📍</div>
                    <p className="text-xs text-slate-700 dark:text-slate-400">
                        Morning routine for productivity
                    </p>
                </div>

                <div className="border rounded-lg p-3 flex flex-col items-center text-center cursor-pointer">
                    <div className="w-6 h-6 mb-2 text-slate-400">📄</div>
                    <p className="text-xs text-slate-700 dark:text-slate-400">
                        Python script for daily email reports
                    </p>
                </div>
            </div>

            {/* Feature Cards */}
            <div className="px-6 space-y-3">
                <div className="bg-purple-50 dark:bg-purple-900 rounded-lg p-4 flex items-center">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-700 rounded-lg flex items-center justify-center mr-3">
                        <Mic
                            size={20}
                            className="text-purple-500 dark:text-purple-300"
                        />
                    </div>
                    <div>
                        <p className="font-medium text-sm">
                            Voice Transcription
                        </p>
                        <p className="text-xs text-purple-600 dark:text-purple-300">
                            Convert audio to text with AI
                        </p>
                    </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-700 rounded-lg flex items-center justify-center mr-3">
                        <Play
                            size={20}
                            className="text-blue-500 dark:text-blue-300"
                        />
                    </div>
                    <div>
                        <p className="font-medium text-sm">Text to Speech</p>
                        <p className="text-xs text-blue-600 dark:text-blue-300">
                            Convert text to natural voice
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
