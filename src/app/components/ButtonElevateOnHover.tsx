import React from "react";

export default function ButtonElevateOnHover() {
    return (
        <div className="m-20 flex justify-center">
            <button className="px-6 py-3 bg-teal-500 text-white rounded-lg cursor-pointer hover:-translate-y-0.5 active:scale-90 duration-300">Hover on me</button>
        </div>
    );
}
