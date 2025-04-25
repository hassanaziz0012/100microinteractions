import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const FormWithHoverInstructions = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [validFields, setValidFields] = useState({
        username: false,
        email: false,
        password: false,
    });

    const requirements = {
        username: ["Must be at least 8 characters long", "Must only contain alphabets"],
        email: ["Must be a valid email address"],
        password: ["Must be at least 8 characters long", "Must include 1 digit"],
    };

    const validateUsername = (value: string) => {
        if (value.length < 8) {
            return "Username must be at least 8 characters long";
        }
        if (!/^[a-zA-Z]+$/.test(value)) {
            return "Username must only contain alphabets";
        }
        return "";
    };

    const validateEmail = (value: string) => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            return "Please enter a valid email address";
        }
        return "";
    };

    const validatePassword = (value: string) => {
        if (value.length < 8) {
            return "Password must be at least 8 characters long";
        }
        if (!/\d/.test(value)) {
            return "Password must include at least 1 digit";
        }
        return "";
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Validate on change for live feedback
        let errorMessage = "";
        let isValid = false;

        if (name === "username") {
            errorMessage = validateUsername(value);
        } else if (name === "email") {
            errorMessage = validateEmail(value);
        } else if (name === "password") {
            errorMessage = validatePassword(value);
        }

        // Update errors state
        setErrors({
            ...errors,
            [name]: errorMessage,
        });

        // Update validFields state
        isValid = errorMessage === "";
        setValidFields({
            ...validFields,
            [name]: isValid,
        });
    };

    const handleFocus = (field: keyof typeof validFields) => {
        // Only set focus if the field is not valid yet
        if (!validFields[field]) {
            setFocusedField(field);
        }
    };

    const handleBlur = (field: keyof typeof validFields) => {
        setFocusedField(null);

        // Validate the field when it loses focus
        let errorMessage = "";

        if (field === "username") {
            errorMessage = validateUsername(formData[field]);
        } else if (field === "email") {
            errorMessage = validateEmail(formData[field]);
        } else if (field === "password") {
            errorMessage = validatePassword(formData[field]);
        }

        setErrors({
            ...errors,
            [field]: errorMessage,
        });

        // Update validFields
        setValidFields({
            ...validFields,
            [field]: errorMessage === "",
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate all fields
        const usernameError = validateUsername(formData.username);
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);

        setErrors({
            username: usernameError,
            email: emailError,
            password: passwordError,
        });

        setValidFields({
            username: usernameError === "",
            email: emailError === "",
            password: passwordError === "",
        });

        // If no errors, submit the form
        if (!usernameError && !emailError && !passwordError) {
            alert("Form submitted successfully!");
            // Here you would typically send the data to your backend
        }
    };

    const getInputClasses = (field: keyof typeof validFields) => {
        const baseClasses =
            "w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ";

        if (formData[field]) {
            if (errors[field]) {
                return baseClasses + "border-red-500 focus:ring-red-500";
            } else if (validFields[field]) {
                return baseClasses + "border-green-500 focus:ring-green-500";
            }
        }

        return baseClasses + "border-gray-300 focus:ring-blue-500";
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Registration Form
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4 relative">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className={getInputClasses("username")}
                            value={formData.username}
                            onChange={handleChange}
                            onFocus={() => handleFocus("username")}
                            onBlur={() => handleBlur("username")}
                        />
                        {formData.username && (
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                {errors.username ? (
                                    <XCircle className="h-5 w-5 text-red-500" />
                                ) : validFields.username ? (
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : null}
                            </div>
                        )}
                    </div>
                    {focusedField === "username" && !validFields.username && (
                        <div className="absolute z-10 mt-1 p-2 bg-gray-100 border border-gray-300 rounded-md shadow-md">
                            <p className="font-semibold text-sm text-gray-700 mb-1">
                                Requirements:
                            </p>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                                {requirements.username.map((req, index) => (
                                    <li key={index}>{req}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {errors.username && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.username}
                        </p>
                    )}
                </div>

                <div className="mb-4 relative">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={getInputClasses("email")}
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => handleFocus("email")}
                            onBlur={() => handleBlur("email")}
                        />
                        {formData.email && (
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                {errors.email ? (
                                    <XCircle className="h-5 w-5 text-red-500" />
                                ) : validFields.email ? (
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : null}
                            </div>
                        )}
                    </div>
                    {focusedField === "email" && !validFields.email && (
                        <div className="absolute z-10 mt-1 p-2 bg-gray-100 border border-gray-300 rounded-md shadow-md">
                            <p className="font-semibold text-sm text-gray-700 mb-1">
                                Requirements:
                            </p>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                                {requirements.email.map((req, index) => (
                                    <li key={index}>{req}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.email}
                        </p>
                    )}
                </div>

                <div className="mb-6 relative">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={getInputClasses("password")}
                            value={formData.password}
                            onChange={handleChange}
                            onFocus={() => handleFocus("password")}
                            onBlur={() => handleBlur("password")}
                        />
                        {formData.password && (
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                {errors.password ? (
                                    <XCircle className="h-5 w-5 text-red-500" />
                                ) : validFields.password ? (
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : null}
                            </div>
                        )}
                    </div>
                    {focusedField === "password" && !validFields.password && (
                        <div className="absolute z-10 mt-1 p-2 bg-gray-100 border border-gray-300 rounded-md shadow-md">
                            <p className="font-semibold text-sm text-gray-700 mb-1">
                                Requirements:
                            </p>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                                {requirements.password.map((req, index) => (
                                    <li key={index}>{req}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {errors.password && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.password}
                        </p>
                    )}
                </div>

                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormWithHoverInstructions;
