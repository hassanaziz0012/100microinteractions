import { Check, Loader2 } from "lucide-react";
import React, { useState } from "react";

export default function ButtonSpinnerCheckmark() {
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(false);

    const handleClick = () => {
        if (loading === false) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setFinished(true);
            }, 1000);
        }
    };

    const reset = () => {
        setLoading(false);
        setFinished(false);
    };

    return (
        <div className="m-20 flex flex-col items-center gap-y-4">
            <button
                onClick={handleClick}
                className="bg-blue-500 text-white rounded-md px-6 py-3 cursor-pointer disabled:cursor-default disabled:bg-blue-300"
                disabled={loading === true}
            >
                {loading === false && finished === false && "Submit"}

                {loading === true && (
                    <div className="flex items-center gap-x-2">
                        <Loader2 className="animate-spin" />
                        Loading
                    </div>
                )}

                {finished === true && loading === false && (
                    <div className="flex items-center gap-x-2">
                        <Check />
                        Finished
                    </div>
                )}
            </button>

            <button
                onClick={reset}
                className="text-blue-500 font-semibold border-b-2 cursor-pointer border-b-blue-500"
            >
                Reset
            </button>
        </div>
    );
}
