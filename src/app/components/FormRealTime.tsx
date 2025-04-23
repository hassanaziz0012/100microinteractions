import React, { useState, useEffect } from "react";
import { Check, X } from "lucide-react";

export default function FormRealTime() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        password: false,
    });

    // Validation functions
    const validateName = (name: string) => {
        if (!name) return "Name is required";
        if (!/^[A-Za-z\s]+$/.test(name))
            return "Name can only contain alphabets and spaces";
        return "";
    };

    const validateEmail = (email: string) => {
        if (!email) return "Email is required";
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
            return "Invalid email address";
        return "";
    };

    const validatePassword = (password: string) => {
        if (!password) return "Password is required";
        if (password.length < 8)
            return "Password must be at least 8 characters";
        if (!/[A-Z]/.test(password))
            return "Password must contain at least 1 uppercase letter";
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
            return "Password must contain at least 1 symbol";
        if (!/\d/.test(password))
            return "Password must contain at least 1 digit";
        return "";
    };

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Mark field as touched
        const field = name as keyof typeof touched;
        if (!touched[field]) {
            setTouched((prev) => ({ ...prev, [name]: true }));
        }
    };

    // Validate on change
    useEffect(() => {
        const nameError = validateName(formData.name);
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);

        setErrors({
            name: nameError,
            email: emailError,
            password: passwordError,
        });
    }, [formData]);

    // Form submission handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Mark all fields as touched
        setTouched({
            name: true,
            email: true,
            password: true,
        });

        // Check if form is valid
        const nameError = validateName(formData.name);
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);

        if (!nameError && !emailError && !passwordError) {
            // Form is valid, handle submission
            alert("Form submitted successfully!");
            console.log("Form data:", formData);
        }
    };

    // Helper function to determine field status
    const getFieldStatus = (field: keyof typeof touched) => {
        if (!touched[field]) return null;
        return errors[field] ? "error" : "success";
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Registration Form
            </h2>

            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Name
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                                getFieldStatus("name") === "success"
                                    ? "border-green-500 focus:ring-green-200"
                                    : getFieldStatus("name") === "error"
                                    ? "border-red-500 focus:ring-red-200"
                                    : "border-gray-300 focus:ring-blue-200"
                            }`}
                            placeholder="Enter your name"
                        />
                        {getFieldStatus("name") === "success" && (
                            <Check
                                className="absolute right-3 top-2.5 text-green-500"
                                size={20}
                            />
                        )}
                        {getFieldStatus("name") === "error" && (
                            <X
                                className="absolute right-3 top-2.5 text-red-500"
                                size={20}
                            />
                        )}
                    </div>
                    {touched.name && errors.name && (
                        <p className="mt-1 text-red-500 text-sm">
                            {errors.name}
                        </p>
                    )}
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Email
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                                getFieldStatus("email") === "success"
                                    ? "border-green-500 focus:ring-green-200"
                                    : getFieldStatus("email") === "error"
                                    ? "border-red-500 focus:ring-red-200"
                                    : "border-gray-300 focus:ring-blue-200"
                            }`}
                            placeholder="Enter your email"
                        />
                        {getFieldStatus("email") === "success" && (
                            <Check
                                className="absolute right-3 top-2.5 text-green-500"
                                size={20}
                            />
                        )}
                        {getFieldStatus("email") === "error" && (
                            <X
                                className="absolute right-3 top-2.5 text-red-500"
                                size={20}
                            />
                        )}
                    </div>
                    {touched.email && errors.email && (
                        <p className="mt-1 text-red-500 text-sm">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Password Field */}
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                                getFieldStatus("password") === "success"
                                    ? "border-green-500 focus:ring-green-200"
                                    : getFieldStatus("password") === "error"
                                    ? "border-red-500 focus:ring-red-200"
                                    : "border-gray-300 focus:ring-blue-200"
                            }`}
                            placeholder="Enter your password"
                        />
                        {getFieldStatus("password") === "success" && (
                            <Check
                                className="absolute right-3 top-2.5 text-green-500"
                                size={20}
                            />
                        )}
                        {getFieldStatus("password") === "error" && (
                            <X
                                className="absolute right-3 top-2.5 text-red-500"
                                size={20}
                            />
                        )}
                    </div>
                    {touched.password && errors.password && (
                        <p className="mt-1 text-red-500 text-sm">
                            {errors.password}
                        </p>
                    )}
                    {touched.password && !errors.password && (
                        <p className="mt-1 text-green-500 text-sm">
                            Password meets all requirements
                        </p>
                    )}
                    <div className="mt-2 text-xs text-gray-600">
                        <p>Password requirements:</p>
                        <ul className="list-disc ml-5 mt-1">
                            <li>At least 8 characters</li>
                            <li>At least 1 uppercase letter</li>
                            <li>At least 1 symbol</li>
                            <li>At least 1 digit</li>
                        </ul>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                    Register
                </button>
            </form>
        </div>
    );
}
