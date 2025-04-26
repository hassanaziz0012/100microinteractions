import { useState, useEffect } from "react";
import { Save } from "lucide-react";

export default function UndoToast() {
    const [showToast, setShowToast] = useState(false);

    // Auto-hide toast after 5 seconds
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (showToast) {
            timer = setTimeout(() => {
                setShowToast(false);
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [showToast]);

    const handleSave = () => {
        setShowToast(true);
    };

    const handleUndo = () => {
        // Implement your undo logic here
        console.log("Undo clicked");
        setShowToast(false);
    };

    const handleClose = () => {
        setShowToast(false);
    };

    return (
        <div className="flex flex-col items-center p-8">
            <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
            >
                <Save size={16} />
                Save Changes
            </button>

            {/* Toast notification */}
            <div
                className={`fixed bottom-4 right-4 bg-white shadow-lg rounded-md p-4 flex flex-col gap-3 transition-all duration-300 max-w-xs transform ${
                    showToast
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full opacity-0"
                }`}
            >
                <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-800">Changes saved.</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={handleUndo}
                        className="py-1 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm transition-colors"
                    >
                        Undo
                    </button>
                    <button
                        onClick={handleClose}
                        className="py-1 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
