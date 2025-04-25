import React, { useState, useRef, useEffect } from "react";
import { Search, X, Menu } from "lucide-react";

export default function ExpandableSearchBar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const searchContainerRef = useRef<HTMLDivElement>(null);

    const handleSearchFocus = () => {
        setIsExpanded(true);
    };

    const handleSearchBlur = () => {
        if (searchInputRef.current?.value === "") {
            setIsExpanded(false);
        }
    };

    const clearSearch = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = "";
            searchInputRef.current.focus();
        }
    };

    const closeSearch = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = "";
            setIsExpanded(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchContainerRef.current &&
                !searchContainerRef.current.contains(event.target as Node)
            ) {
                if (
                    searchInputRef.current &&
                    searchInputRef.current.value === ""
                ) {
                    setIsExpanded(false);
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    {/* Logo and brand name */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <svg
                                className="h-8 w-8 text-indigo-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                            <span
                                className={`ml-2 font-bold text-gray-900 text-lg transition-opacity duration-300 ${
                                    isExpanded
                                        ? "opacity-0 lg:opacity-100"
                                        : "opacity-100"
                                }`}
                            >
                                BrandName
                            </span>
                        </div>
                    </div>

                    <div className="flex grow justify-end">
                        {/* Navigation links - hidden on mobile and when search is expanded */}
                        <div
                            className={`hidden md:ml-6 md:space-x-8 transition-opacity duration-300 ${
                                isExpanded
                                    ? "md:hidden opacity-0 lg:opacity-100"
                                    : "md:flex opacity-100"
                            }`}
                        >
                            <a
                                href="#"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-gray-300"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                            >
                                Features
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                            >
                                About
                            </a>
                        </div>

                        {/* Search bar */}
                        <div
                            className={`${
                                isExpanded && "flex-1"
                            } flex items-center justify-center px-2`}
                        >
                            <div
                                ref={searchContainerRef}
                                className={`max-w-xl w-full transition-all duration-300 ${
                                    isExpanded ? "flex-grow" : "md:max-w-xs"
                                }`}
                            >
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Search className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        placeholder="Search"
                                        className={`block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ${
                                            isExpanded
                                                ? "text-gray-900"
                                                : "text-gray-500"
                                        }`}
                                        onFocus={handleSearchFocus}
                                        onBlur={handleSearchBlur}
                                    />
                                    {isExpanded && (
                                        <div className="absolute inset-y-0 right-0 flex items-center">
                                            <button
                                                onClick={clearSearch}
                                                className="p-1 mr-1 text-gray-400 hover:text-gray-500 focus:outline-none"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={closeSearch}
                                                className="p-1 mr-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                                            >
                                                <span className="text-sm">
                                                    ESC
                                                </span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* CTA button and mobile menu button */}
                        <div className="flex items-center">
                            <div
                                className={`flex-shrink-0 transition-opacity duration-300 ${
                                    isExpanded
                                        ? "opacity-0 lg:opacity-100"
                                        : "opacity-100"
                                }`}
                            >
                                <a
                                    href="#"
                                    className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Get Started
                                </a>
                            </div>

                            {/* Mobile menu button */}
                            <div
                                className={`md:hidden ml-4 transition-opacity duration-300 ${
                                    isExpanded ? "opacity-0" : "opacity-100"
                                }`}
                            >
                                <button
                                    onClick={() =>
                                        setIsMobileMenuOpen(!isMobileMenuOpen)
                                    }
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                >
                                    <Menu className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <a
                            href="#"
                            className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                        >
                            Features
                        </a>
                        <a
                            href="#"
                            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                        >
                            About
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
