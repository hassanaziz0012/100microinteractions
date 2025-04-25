import React, { useEffect, useState } from "react";
import LongArticle from "./placeholders/LongArticle";

export default function NavbarAutoShowHide() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            // Show navbar if scrolling up more than 100px
            if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }
            // Hide navbar if scrolling down more than 100px
            else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            }

            // Update last scroll position
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", controlNavbar);

        // Cleanup event listener
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <div>
            <nav
                className={`fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 z-50 ${
                    isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <span className="text-xl font-bold text-indigo-600">
                                Mindful Bytes
                            </span>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md font-medium"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-indigo-600 px-3 py-2 rounded-md font-medium"
                                >
                                    Articles
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-indigo-600 px-3 py-2 rounded-md font-medium"
                                >
                                    Categories
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-indigo-600 px-3 py-2 rounded-md font-medium"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-indigo-600 px-3 py-2 rounded-md font-medium"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button className="text-gray-500 hover:text-indigo-600 focus:outline-none">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="mt-20">
                <LongArticle />
            </main>
        </div>
    );
}
