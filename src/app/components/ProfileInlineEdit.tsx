"use client";
import { Check } from "lucide-react";
import React, { useState } from "react";

type Profile = {
    img?: string;
    name: string;
    bio: string;
};

export default function ProfileInlineEdit() {
    const [profile, setProfile] = useState<Profile>({
        img: "https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Anthony Lester",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, atque aliquam a ipsa impedit quasi.",
    });

    const [editingField, setEditingField] = useState<"name" | "bio" | null>(
        null
    );
    const [tempName, setTempName] = useState(profile.name);
    const [tempBio, setTempBio] = useState(profile.bio);

    const handleSave = () => {
        if (editingField === "name") {
            setProfile({ ...profile, name: tempName });
        } else if (editingField === "bio") {
            setProfile({ ...profile, bio: tempBio });
        }
        setEditingField(null);
    };

    return (
        <div className="max-w-xs mx-auto m-20 bg-white rounded-lg overflow-hidden shadow-lg">
            {/* Profile Image */}
            <div className="flex justify-center p-6 bg-gray-50">
                <div className="size-64 rounded-full overflow-hidden">
                    {profile.img && (
                        <img
                            src={profile.img}
                            alt="Profile"
                            className="size-full aspect-square object-cover"
                        />
                    )}
                </div>
            </div>

            {/* Profile Info */}
            <div className="p-6 text-center">
                {/* Name Field */}
                {editingField === "name" ? (
                    <input
                        type="text"
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                        className="text-xl font-semibold text-center w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 pb-1"
                        autoFocus
                    />
                ) : (
                    <h2
                        className="text-xl font-semibold mb-2 cursor-pointer hover:text-blue-600"
                        onClick={() => {
                            setTempName(profile.name);
                            setEditingField("name");
                        }}
                    >
                        {profile.name}
                    </h2>
                )}

                {/* Bio Field */}
                {editingField === "bio" ? (
                    <textarea
                        value={tempBio}
                        onChange={(e) => setTempBio(e.target.value)}
                        className="text-gray-600 w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500 text-sm"
                        rows={4}
                        autoFocus
                    />
                ) : (
                    <p
                        className="text-gray-600 cursor-pointer hover:text-blue-600 text-sm text-center"
                        onClick={() => {
                            setTempBio(profile.bio);
                            setEditingField("bio");
                        }}
                    >
                        {profile.bio}
                    </p>
                )}

                {/* Save Button */}
                {editingField && (
                    <div className="flex justify-end mt-4">
                        <button
                            onClick={handleSave}
                            className="bg-slate-900 text-white p-2 rounded-full flex items-center justify-center w-10 h-10 shadow-md hover:bg-slate-800 transition-colors"
                        >
                            <Check size={18} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
