import React, { useState } from "react";

const PlaceholderCard = ({ index }: { index: number }) => (
    <div className="min-h-64 rounded-lg bg-gray-100 flex flex-col justify-end overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold font-mono">
            {index + 1}
        </div>
        <div className="w-full h-16 bg-gray-200"></div>
    </div>
);

export default function SeeMoreBtn() {
    const [show, setShow] = useState(false);

    return (
        <div className="m-10 max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-6 relative">
                {new Array(show === true ? 15 : 9).fill("").map((_, i) => (
                    <PlaceholderCard key={i} index={i} />
                ))}
                <div
                    className={`absolute inset-0 bg-gradient-to-t from-white/50 to-transparent flex items-end justify-center ${
                        show === true && "hidden"
                    }`}
                >
                    <div className="mb-8">
                        <button
                            onClick={() => setShow(true)}
                            className="px-6 py-2 rounded-full bg-blue-500 text-white cursor-pointer shadow"
                        >
                            See more
                        </button>
                    </div>
                </div>
                <div
                    className={`absolute inset-0 -bottom-20 flex items-end justify-center ${
                        show === false && "hidden"
                    }`}
                >
                    <div className="mb-6">
                        <button
                            onClick={() => setShow(false)}
                            className="px-6 py-2 rounded-full bg-blue-500 text-white cursor-pointer shadow"
                        >
                            See less
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
