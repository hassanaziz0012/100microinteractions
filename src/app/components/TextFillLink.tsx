import React from "react";

export default function TextFillLink() {
    const text = "Link text here";
    return (
        <div className="m-20 flex justify-center">
            <a
                href="#"
                className="font-semibold text-black border-b-4 border-b-sky-500 text-lg relative isolate group hover:scale-105 duration-1000 will-change-transform"
            >
                <div>{text}</div>
                <div className={`absolute inset-0 text-transparent group-hover:text-sky-500 transition-[clip-path] duration-1000 [clip-path:inset(100%_0%_0%_0%)] group-hover:[clip-path:inset(0_0_0_0)]`}>{text}</div>
            </a>
        </div>
    );
}
