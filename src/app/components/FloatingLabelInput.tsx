import React from "react";

export default function FloatingLabelInput() {
    return (
        <div className="m-20">
            <div className="relative">
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="px-4 pt-5 py-2 max-w-64 w-full duration-200 border-b border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500 peer"
                />
                <label
                    htmlFor="name"
                    className="absolute left-4 top-3 text-gray-600 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 duration-200 ease-in-out"
                >
                    Name
                </label>
            </div>
        </div>
    );
}
