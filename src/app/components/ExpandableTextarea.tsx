import { useState, useRef, useEffect, ChangeEvent } from "react";

interface ExpandableTextareaProps {
    placeholder?: string;
    className?: string;
    initialValue?: string;
    minRows?: number;
    maxRows?: number;
    onChange?: (value: string) => void;
}

export default function ExpandableTextarea({
    placeholder = "Type something...",
    className = "",
    initialValue = "",
    minRows = 3,
    maxRows = 10,
    onChange,
}: ExpandableTextareaProps) {
    const [value, setValue] = useState(initialValue);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const [rows, setRows] = useState(3);

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        // Reset height to calculate the proper scrollHeight
        textarea.style.height = "auto";

        // Calculate the number of rows based on scrollHeight
        const lineHeight =
            parseInt(getComputedStyle(textarea).lineHeight) || 20;
        const paddingTop = parseInt(getComputedStyle(textarea).paddingTop) || 0;
        const paddingBottom =
            parseInt(getComputedStyle(textarea).paddingBottom) || 0;

        // Calculate the content height excluding padding
        const contentHeight =
            textarea.scrollHeight - paddingTop - paddingBottom;

        // Calculate the number of rows
        let rows = Math.ceil(contentHeight / lineHeight);

        // Apply min/max constraints
        rows = Math.max(minRows, Math.min(maxRows, rows));

        setRows(rows);

        // // Set the final height
        // textarea.style.height = `${
        //     rows * lineHeight + paddingTop + paddingBottom
        // }px`;
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };

    // Adjust height on value change
    useEffect(() => {
        adjustHeight();
    }, [value]);

    // Initial height adjustment
    useEffect(() => {
        adjustHeight();
    }, []);

    return (
        <div className="m-20 max-w-2xl mx-auto">
            <textarea
                ref={textareaRef}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-height duration-200 
                    ${
                        rows === maxRows
                            ? "overflow-y-scroll"
                            : "overflow-y-hidden"
                    } ${className}`}
                rows={rows}
            />
        </div>
    );
}
