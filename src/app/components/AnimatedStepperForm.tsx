import React, { useState } from "react";

const AnimatedStepperForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        email: "",
        phone: "",
        address: "",
        username: "",
        password: "",
        interests: {
            sports: false,
            music: false,
            technology: false,
            art: false,
        },
        biography: "",
        resume: null,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type, checked, files } = target;

        if (type === "checkbox") {
            setFormData({
                ...formData,
                interests: {
                    ...formData.interests,
                    [name]: checked,
                },
            });
        } else if (type === "file" && files) {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission here
    };

    const steps = [
        {
            id: 0,
            title: "Personal Information",
            active: activeStep === 0,
            content: (
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">Personal Information</h2>

                    <div>
                        <label className="block text-sm mb-1">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded bg-gray-50"
                            placeholder="John"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded bg-gray-50"
                            placeholder="Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">
                            Date of Birth
                        </label>
                        <input
                            type="text"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="w-full p-2 border rounded bg-gray-50"
                            placeholder="mm/dd/yyyy"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Gender</label>
                        <div className="space-y-2">
                            <div>
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === "male"}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === "female"}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="female">Female</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="other"
                                    name="gender"
                                    value="other"
                                    checked={formData.gender === "other"}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="other">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 1,
            title: "Contact Information",
            active: activeStep === 1,
            content: (
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">Contact Information</h2>

                    <div>
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded bg-gray-50"
                            placeholder="john@gmail.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 border rounded bg-gray-50"
                            placeholder="+1(123) 456-7890"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full p-2 border rounded bg-gray-50"
                            placeholder="123 Main St"
                        />
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            title: "Account Details",
            active: activeStep === 2,
            content: (
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">Account Details</h2>

                    <div>
                        <label className="block text-sm mb-1">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full p-2 border rounded bg-gray-50"
                            placeholder="johndoe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded bg-gray-50"
                            placeholder="********"
                        />
                    </div>
                </div>
            ),
        },
        {
            id: 3,
            title: "Preferences",
            active: activeStep === 3,
            content: (
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">Preferences</h2>

                    <div>
                        <label className="block text-sm mb-2">Interests</label>
                        <div className="space-y-2">
                            <div>
                                <input
                                    type="checkbox"
                                    id="sports"
                                    name="sports"
                                    checked={formData.interests.sports}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="sports">Sports</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="music"
                                    name="music"
                                    checked={formData.interests.music}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="music">Music</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="technology"
                                    name="technology"
                                    checked={formData.interests.technology}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="technology">Technology</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="art"
                                    name="art"
                                    checked={formData.interests.art}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="art">Art</label>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 4,
            title: "Additional Information",
            active: activeStep === 4,
            content: (
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">
                        Additional Information
                    </h2>

                    <div>
                        <label className="block text-sm mb-1">Biography</label>
                        <textarea
                            name="biography"
                            value={formData.biography}
                            onChange={handleChange}
                            rows={4}
                            className="w-full p-2 border rounded bg-gray-50"
                            placeholder="I was bullied as a child, etc..."
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Resume</label>
                        <div className="border-2 border-dashed rounded p-4 text-center cursor-pointer bg-gray-50">
                            <input
                                type="file"
                                name="resume"
                                onChange={handleChange}
                                className="hidden"
                                id="resume-upload"
                            />
                            <label
                                htmlFor="resume-upload"
                                className="flex flex-col items-center cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-400 mb-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    />
                                </svg>
                                <span className="text-sm text-gray-500">
                                    Drag and drop or select a file
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    const navigateToStep = (stepId: number) => {
        setActiveStep(stepId);
    };

    const navigateNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
        }
    };

    const navigateBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };

    return (
        <div className="flex flex-col md:flex-row bg-blue-50 min-h-screen">
            {/* Sidebar */}
            <div className="md:w-1/4 p-6 bg-white shadow-md">
                <div className="space-y-4">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="flex items-center cursor-pointer py-2"
                            onClick={() => navigateToStep(step.id)}
                        >
                            <div className="relative isolate">
                                <div
                                    className={`w-1 h-8 rounded mr-3 bg-gray-300`}
                                ></div>
                                <div
                                    className={`w-1 h-8 absolute inset-0 rounded mr-3 z-1 bg-blue-500 duration-500 ${step.active ? "[clip-path:inset(0%_0%_0%_0%)]" : "[clip-path:inset(100%_0%_100%_0%)]"}`}
                                ></div>
                            </div>
                            <span
                                className={`text-sm ${
                                    step.active
                                        ? "text-blue-500 font-medium"
                                        : "text-gray-500"
                                }`}
                            >
                                {step.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main content */}
            <div className="md:w-3/4 p-6 @container">
                <div className="mb-12 flex @max-3xl:hidden justify-between items-center gap-x-">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className={`basis-0 grow flex flex-col gap-y-2 items-center cursor-pointer py-2 relative isolate group ${
                                activeStep === step.id + 1 && "prev-active"
                            } ${step.active && "active"}`}
                            onClick={() => navigateToStep(step.id)}
                        >
                            <div
                                className={`size-6 rounded-full text-white flex items-center justify-center bg-gray-500 group-[.active]:bg-blue-500 duration-300`}
                            >
                                <span
                                    className={`absolute -16 top-5 left-1/2 h-[2px] w-full -z-1 group-last:hidden bg-gray-500 group-[.active]:bg-blue-500 group-[.prev-active]:bg-blue-500`}
                                ></span>
                                {step.id}
                            </div>
                            <p
                                className={`text-sm text-gray-500 group-[.active]:text-blue-500 group-[.active]:font-medium duration-300`}
                            >
                                {step.title}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-md mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="bg-white rounded-lg shadow-md p-6 mb-4 transition-all duration-300 ease-in-out">
                            {steps[activeStep].content}
                        </div>

                        <div className="flex justify-between">
                            {activeStep > 0 && (
                                <button
                                    type="button"
                                    onClick={navigateBack}
                                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
                                >
                                    Back
                                </button>
                            )}

                            {activeStep < steps.length - 1 ? (
                                <button
                                    type="button"
                                    onClick={navigateNext}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition ml-auto"
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition ml-auto"
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AnimatedStepperForm;
