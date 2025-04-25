import React, { useState } from "react";

export default function TabsSwitch() {
    const tabs = ["Content", "Marketing", "Sales"];

    const [activeTab, setActiveTab] = useState(tabs[0]);

    const switchTab = (tabname: string) => {
        setActiveTab(tabname);
    };

    return (
        <div className="m-20 flex justify-center">
            <div className="flex">
                {tabs.map((tab, i) => (
                    <button
                        key={i}
                        onClick={() => switchTab(tab)}
                        className={`px-6 py-2 border border-gray-200 cursor-pointer hover:bg-gray-100 duration-300 font-mono active:scale-95
                            ${activeTab === tab && "bg-gray-100 font-bold"}
                            ${i === 0 && "rounded-s-md"} 
                            ${i === tabs.length - 1 && "rounded-e-md"}
                        `}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
}
