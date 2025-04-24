import { Upload, CheckCircle, Loader } from "lucide-react";
import React, { useState } from "react";

type Profile = {
    img?: string;
    name: string;
    bio: string;
};

export default function ProfilePictureUploadPreview() {
    const [profile, setProfile] = useState<Profile>({
        img: "https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Anthony Lester",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, atque aliquam a ipsa impedit quasi.",
    });

    const [isUploading, setIsUploading] = useState(false);
    const [hasChanges, setHasChanges] = useState(false);
    const [tempImg, setTempImg] = useState<string | undefined>(undefined);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setIsUploading(true);

            // Simulate file upload
            const reader = new FileReader();
            reader.onload = (event) => {
                // Simulate network delay
                setTimeout(() => {
                    setTempImg(event.target?.result as string);
                    setIsUploading(false);
                    setHasChanges(true);
                }, 1500);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveChanges = () => {
        setProfile({ ...profile, img: tempImg });
        setHasChanges(false);
    };

    const displayImage = tempImg || profile.img;

    return (
        <div className="m-20">
            <div className="max-w-sm mx-auto bg-gray-100 rounded-xl p-5 flex flex-col items-center text-center">
                <div className="rounded-full overflow-hidden relative group">
                    <img
                        src={displayImage}
                        alt={profile.name}
                        className="rounded-full max-w-72 w-full h-72 aspect-square object-cover object-center"
                    />

                    {isUploading && (
                        <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center">
                            <Loader
                                className="text-white animate-spin"
                                size={48}
                            />
                        </div>
                    )}

                    <div className="absolute bottom-0 w-full bg-slate-900/50 h-1/4 translate-y-full group-hover:translate-y-0 duration-300 flex items-center justify-center">
                        {hasChanges ? (
                            <button
                                className="text-white p-3 rounded-full bg-slate-900 hover:bg-slate-800 cursor-pointer"
                                onClick={handleSaveChanges}
                            >
                                <CheckCircle />
                            </button>
                        ) : (
                            <button
                                className="text-white p-3 rounded-full bg-slate-900 hover:bg-slate-800 cursor-pointer"
                                onClick={handleUploadClick}
                            >
                                <Upload />
                            </button>
                        )}
                    </div>
                </div>
                <p className="text-2xl font-semibold mt-6 mb-2">
                    {profile.name}
                </p>
                <p className="text-gray-600">{profile.bio}</p>

                {/* Hidden file input */}
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </div>
        </div>
    );
}
