import React, { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";

// Shake animation component
const FormErrorShake = ({
    error,
    children,
}: {
    error: string;
    children: React.ReactNode;
}) => {
    const [shouldShake, setShouldShake] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (error) {
                setShouldShake(true);
                const timer = setTimeout(() => setShouldShake(false), 500);
                return () => clearTimeout(timer);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [error]);

    return (
        <div
            className={`transition-transform ${
                shouldShake ? "animate-shake focus-within:animate-none!" : ""
            }`}
        >
            {children}
        </div>
    );
};

// Custom animation class added to tailwind
const style = document.createElement("style");
style.textContent = `
@keyframes shake {
    0% { transform: translateX(0); }
    20% { transform: translateX(-10px); }
    40% { transform: translateX(10px); }
    60% { transform: translateX(-5px); }
    80% { transform: translateX(5px); }
    100% { transform: translateX(0); }
}

.animate-shake {
    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both infinite;
}
`;
document.head.appendChild(style);

// Main Registration Form component
export default function FormErrorShakeField() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) return "Email is required";
        if (!emailRegex.test(email))
            return "Please enter a valid email address";
        return "";
    };

    const validatePassword = (password: string) => {
        if (!password) return "Password is required";
        if (password.length < 8)
            return "Password must be at least 8 characters long";
        if (!/\d/.test(password))
            return "Password must contain at least one digit";
        return "";
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Real-time validation
        if (name === "email") {
            setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
        } else if (name === "password") {
            setErrors((prev) => ({
                ...prev,
                password: validatePassword(value),
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate all fields
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);

        setErrors({
            email: emailError,
            password: passwordError,
        });

        // If no errors, proceed with form submission
        if (!emailError && !passwordError) {
            alert("Form submitted successfully!");
            // Here you would typically make an API call to register the user
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Register
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <FormErrorShake error={errors.email}>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 rounded-md border ${
                                        errors.email
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    } focus:outline-none focus:ring-2 ${
                                        errors.email
                                            ? "focus:ring-red-200"
                                            : "focus:ring-blue-200"
                                    }`}
                                    placeholder="you@example.com"
                                />
                                {errors.email && (
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <AlertCircle className="h-5 w-5 text-red-500" />
                                    </div>
                                )}
                            </div>
                        </FormErrorShake>
                        {errors.email && (
                            <p className="text-sm text-red-600">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <FormErrorShake error={errors.password}>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 rounded-md border ${
                                        errors.password
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    } focus:outline-none focus:ring-2 ${
                                        errors.password
                                            ? "focus:ring-red-200"
                                            : "focus:ring-blue-200"
                                    }`}
                                    placeholder="Password"
                                />
                                {errors.password && (
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <AlertCircle className="h-5 w-5 text-red-500" />
                                    </div>
                                )}
                            </div>
                        </FormErrorShake>
                        {errors.password && (
                            <p className="text-sm text-red-600">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
