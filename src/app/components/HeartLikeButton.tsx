"use client";
import { Car, Heart } from "lucide-react";
import React, { useState } from "react";

export default function HeartLikeButton() {
    const [isLiked, setIsLiked] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsLiked(!isLiked);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 300);
    };

    return (
        <div className="flex items-center justify-center p-8">
            <button
                onClick={handleClick}
                className={`relative transition-transform duration-200 ${
                    isAnimating ? "scale-125" : "scale-100"
                }`}
                aria-label="Like"
            >
                {/* Heart outline - always visible */}
                <Heart
                    size={32}
                    className="text-gray-800"
                    fill="none"
                    strokeWidth={2}
                />

                {/* Heart fill - animated from bottom to top */}
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                        clipPath: isLiked
                            ? "inset(0 0 0 0)"
                            : "inset(100% 0% 0% 0%)",
                        transition: "clip-path 0.2s ease-out",
                    }}
                >
                    <Heart
                        size={32}
                        className="text-fuchsia-500"
                        fill="currentColor"
                        strokeWidth={2}
                    />
                </div>

                <div className="mt-16 relative">
                    <Car
                        size={32}
                        className="text-fuchsia-500"
                        strokeWidth={2}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            clipPath: isLiked
                                ? "inset(0 0 0 0)"
                                : "inset(100% 0% 0% 0%)",
                        }}
                    >
                        <Car
                            size={32}
                            className="text-fuchsia-500"
                            fill="currentColor"
                            strokeWidth={2}
                        />
                    </div>
                </div>
            </button>
        </div>
    );
}
