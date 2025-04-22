"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";

export default function PasswordStrengthMeter() {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState(0);
    const [nextRequirement, setNextRequirement] = useState("");
    const [show, setShow] = useState(false);

    // Check password requirements
    useEffect(() => {
        const requirements = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            digit: /[0-9]/.test(password),
            symbol: /[^A-Za-z0-9]/.test(password),
        };

        // Count fulfilled requirements
        const fulfilledCount =
            Object.values(requirements).filter(Boolean).length;
        setStrength(fulfilledCount);

        // Set next requirement message
        if (!requirements.length) {
            setNextRequirement("Add at least 8 characters");
        } else if (!requirements.uppercase) {
            setNextRequirement("Add at least 1 uppercase letter");
        } else if (!requirements.digit) {
            setNextRequirement("Add at least 1 digit");
        } else if (!requirements.symbol) {
            setNextRequirement("Add at least 1 symbol");
        } else {
            setNextRequirement("Password is strong!");
        }
    }, [password]);

    // Get strength color based on fulfilled requirements
    const getStrengthColor = () => {
        switch (strength) {
            case 0:
                return "bg-gray-200"; // Empty
            case 1:
                return "bg-red-500"; // Weak
            case 2:
                return "bg-orange-500"; // Less weak
            case 3:
                return "bg-yellow-500"; // Acceptable
            case 4:
                return "bg-green-500"; // Strong
            default:
                return "bg-gray-200";
        }
    };

    // Get descriptive text for strength
    const getStrengthText = () => {
        switch (strength) {
            case 0:
                return "Very Weak";
            case 1:
                return "Weak";
            case 2:
                return "Fair";
            case 3:
                return "Good";
            case 4:
                return "Strong";
            default:
                return "";
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                Password
            </label>

            <div className="px-3 w-full border border-gray-300 rounded-md flex focus-within:ring-2 focus-within:ring-blue-500">
                <input
                    id="password"
                    type={show === true ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 focus:outline-none "
                    placeholder="Enter your password"
                />

                <button onClick={() => setShow(!show)} className="text-gray-700 *:stroke-1">
                    {show === true ? <EyeOff /> : <Eye />}
                </button>
            </div>

            {/* Strength meter bar */}
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className={`h-2.5 rounded-full transition-all duration-300 ${getStrengthColor()}`}
                    style={{ width: `${(strength / 4) * 100}%` }}
                ></div>
            </div>

            {/* Strength indicator */}
            <div className="mt-1 flex justify-between text-xs">
                <span className="text-gray-500">{getStrengthText()}</span>
                <span className="text-blue-600">{nextRequirement}</span>
            </div>
        </div>
    );
}
