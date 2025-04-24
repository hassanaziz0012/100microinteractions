"use client";
import { Star } from "lucide-react";
import React, { useState } from "react";

export default function AnimatedReviews() {
    const [rating, setRating] = useState(0);

    return (
        <div className="max-w-sm mx-auto m-20 p-20 bg-slate-900 text-white rounded-2xl flex flex-col items-start gap-y-4">
            <p className="text-2xl">Leave a Review</p>
            <div className="flex gap-x-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setRating(i + 1)}
                        className="cursor-pointer relative"
                    >
                        <Star />
                        <Star
                            className={`absolute inset-0 fill-yellow-500 duration-500 ${
                                rating >= i + 1
                                    ? "[clip-path:inset(0_0_0_0)]"
                                    : "[clip-path:inset(100%_0%_0%_0%)]"
                            }`}
                            style={{
                                transitionDelay: `${(i + 1) * 150}ms`,
                            }}
                        />
                    </button>
                ))}
            </div>
            <button
                onClick={() => setRating(0)}
                className="text-slate-300 border-b border-b-slate-700 cursor-pointer"
            >
                Reset
            </button>
        </div>
    );
}
