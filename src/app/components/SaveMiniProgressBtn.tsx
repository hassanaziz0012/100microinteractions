import { useState, useEffect } from "react";
import { Check } from "lucide-react";

export default function SaveMiniProgressBtn() {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (isLoading) {
            const startTime = Date.now();
            const duration = 2000; // 2 seconds

            const updateProgress = () => {
                const elapsed = Date.now() - startTime;
                const newProgress = Math.min(elapsed / duration, 1);
                setProgress(newProgress);

                if (newProgress < 1) {
                    requestAnimationFrame(updateProgress);
                } else {
                    setIsLoading(false);
                    setSaved(true);
                }
            };

            requestAnimationFrame(updateProgress);
        }
    }, [isLoading]);

    const handleClick = () => {
        if (!isLoading && !saved) {
            setIsLoading(true);
            setSaved(false);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={isLoading}
            className="relative overflow-hidden bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 flex items-center justify-center min-w-32"
        >
            <div className="flex items-center">
                <span>{saved ? "Saved" : "Save"}</span>
                {saved && <Check className="ml-1 w-4 h-4" />}
            </div>

            {/* Progress bar overlay */}
            {isLoading && (
                <div
                    className="absolute bottom-0 left-0 h-1 bg-blue-300"
                    style={{ width: `${progress * 100}%` }}
                ></div>
            )}
        </button>
    );
}
