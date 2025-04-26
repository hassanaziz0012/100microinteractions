import React, { useEffect, useRef, useState } from "react";

export default function FormInView() {
    const [isFormInView, setIsFormInView] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFormInView(entry.isIntersecting);
            },
            {
                threshold: 0.5, // Trigger when at least 50% of the form is visible
            }
        );

        if (formRef.current) {
            observer.observe(formRef.current);
        }

        return () => {
            if (formRef.current) {
                observer.unobserve(formRef.current);
            }
        };
    }, []);

    return (
        <div className="flex flex-col">
            {/* Full height header section */}
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <h1 className="text-3xl font-bold text-gray-800">
                    Scroll below to see form
                </h1>
            </div>

            {/* Form section */}
            <div
                ref={formRef}
                className="min-h-screen flex items-center justify-center bg-white p-6"
            >
                <div className="w-full max-w-md p-8 bg-gray-50 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        Contact Form
                    </h2>
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                                    isFormInView
                                        ? "border-blue-500 shadow-lg ring-2 ring-blue-300 animate-pulse duration-500 delay-500"
                                        : "border-gray-300 focus:ring-blue-500"
                                }`}
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
