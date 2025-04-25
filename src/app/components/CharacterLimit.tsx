"use client";
import { Send } from "lucide-react";
import React, { useState } from "react";

export default function CharacterLimit() {
    const limit = 240;
    const [chars, setChars] = useState(0);

    const updateChars = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setChars(value.length);
    };

    return (
        <div className="m-20 flex justify-center">
            <div className="p-10 rounded-xl bg-slate-900 text-white flex flex-col w-lg">
                <div className="p-5 mb-6 border border-slate-700 rounded-[calc(2.5rem-0.75rem-1.25rem)] flex flex-col focus-within:border-white">
                    <textarea
                        name="text"
                        id="text"
                        rows={6}
                        onChange={updateChars}
                        placeholder="Start writing..."
                        className="placeholder:text-slate-300 text-lg resize-none focus:outline-none"
                    />
                    <p
                        className={`${
                            chars >= limit ? "text-rose-500" : "text-slate-300"
                        } self-end`}
                    >
                        {chars || 0}/{limit}
                    </p>
                </div>
                <button
                    disabled={chars >= limit}
                    className="p-3 rounded-full bg-sky-500 text-white block self-end disabled:bg-sky-500/50 disabled:scale-75 duration-500 cursor-pointer"
                >
                    <Send />
                </button>
            </div>
        </div>
    );
}
