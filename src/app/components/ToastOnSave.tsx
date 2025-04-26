import { useState } from "react";
import { Check, Loader2, Save } from "lucide-react";

export default function ToastOnSave() {
    const [isSaving, setIsSaving] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleSave = () => {
        setIsSaving(true);

        // Simulate saving process for 1 second
        setTimeout(() => {
            setIsSaving(false);
            setIsSaved(true);
            setShowToast(true);

            // Reset button state after 3 seconds
            setTimeout(() => {
                setIsSaved(false);
            }, 3000);

            // Hide toast after 5 seconds
            setTimeout(() => {
                setShowToast(false);
            }, 5000);
        }, 1000);
    };

    return (
        <div className="p-8 relative flex gap-x-4 items-center">
            <button
                onClick={handleSave}
                disabled={isSaving}
                className={`
          flex items-center justify-center gap-2 px-4 py-2 rounded-md text-white font-medium transition-all
          ${
              isSaved
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-blue-500 hover:bg-blue-600"
          }
          ${isSaving ? "cursor-not-allowed opacity-80" : ""}
        `}
            >
                {isSaving ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                ) : isSaved ? (
                    <Check className="h-5 w-5" />
                ) : (
                    <>
                        <Save className="h-5 w-5" />
                        Save
                    </>
                )}
            </button>

            <button onClick={() => {
                setIsSaved(false);
                setIsSaving(false);
            }} className="px-4 mt-6 text-blue-500 border-b cursor-pointer">Reset</button>

            {/* Toast Notification */}
            <div
                className={`
          fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-xs
          transform transition-all duration-500 flex items-start gap-3
          ${
              showToast
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
          }
        `}
            >
                <div className="bg-green-100 p-2 rounded-full">
                    <Check className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-gray-800">Saved!</span>
                    <span className="text-gray-500 text-sm">
                        Your changes have been successfully saved.
                    </span>
                </div>
            </div>
        </div>
    );
}
