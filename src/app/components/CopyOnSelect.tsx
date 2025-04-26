import { useState, useEffect, useRef } from "react";
import { Copy, CheckCircle } from "lucide-react";

export default function CopyOnSelect() {
    const [selection, setSelection] = useState("");
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const [copied, setCopied] = useState(false);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleSelectionChange = () => {
            const selectedText = window.getSelection()?.toString() || "";
            const anchorNode = window.getSelection()?.anchorNode as Node;

            if (selectedText && paragraphRef.current?.contains(anchorNode)) {
                setSelection(selectedText);

                // Calculate position for tooltip
                const selection = window.getSelection();
                if (selection && selection.rangeCount > 0) {
                    const range = selection.getRangeAt(0);
                    const selectionRect = range.getBoundingClientRect();

                    // Get the center of the selection
                    const selectionCenter =
                        selectionRect.left + selectionRect.width / 2;

                    setTooltipPosition({
                        top: selectionRect.top - 40, // Position above the text with some spacing
                        left: selectionCenter, // Center the tooltip horizontally over the selection
                    });
                }

                setShowTooltip(true);
            } else {
                // Don't hide immediately to allow clicking the copy button
                if (!tooltipRef.current?.contains(document.activeElement)) {
                    setShowTooltip(false);
                }
            }
        };

        document.addEventListener("selectionchange", handleSelectionChange);
        document.addEventListener("mouseup", handleSelectionChange);

        // Hide tooltip when clicking outside
        const handleClickOutside = (e: MouseEvent) => {
            if (
                tooltipRef.current &&
                !tooltipRef.current.contains(e.target as Node)
            ) {
                setShowTooltip(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "selectionchange",
                handleSelectionChange
            );
            document.removeEventListener("mouseup", handleSelectionChange);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(selection);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
                setShowTooltip(false);
            }, 1500);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto relative">
            {tooltipPosition.left}
            <p ref={paragraphRef} className="text-gray-700 select-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
                porttitor. Ut in nulla enim. Phasellus molestie magna non est
                bibendum non venenatis nisl tempor. Suspendisse dictum feugiat
                nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id
                metus massa, ut blandit odio. Proin quis tortor orci. Etiam at
                risus et justo dignissim congue. Donec congue lacinia dui, a
                porttitor lectus condimentum laoreet.
            </p>

            {showTooltip && (
                <div
                    ref={tooltipRef}
                    className="absolute bg-white shadow-lg rounded-md py-2 px-3 transform -translate-x-1/2 z-10 flex items-center gap-2 transition-opacity duration-150"
                    style={{
                        top: `${tooltipPosition.top}px`,
                        left: `${tooltipPosition.left}px`,
                    }}
                >
                    <button
                        onClick={copyToClipboard}
                        className="flex items-center text-sm text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-150"
                    >
                        {copied ? (
                            <>
                                <CheckCircle
                                    size={16}
                                    className="mr-1 text-green-500"
                                />
                                <span>Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy size={16} className="mr-1" />
                                <span>Copy to clipboard</span>
                            </>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}
