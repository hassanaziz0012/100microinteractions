import { useState, useEffect, useRef } from "react";
import { Save, Check } from "lucide-react";

export default function FormAutoSave() {
    const initialFormState = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "(555) 123-4567",
        title: "Software Engineer",
        department: "Engineering",
        location: "New York",
    };

    const [formData, setFormData] = useState(initialFormState);
    const [showToast, setShowToast] = useState(false);
    const [lastSaved, setLastSaved] = useState<Date | null>(null);
    const toastTimeoutRef = useRef(null);

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Auto-save when an input field loses focus
    const handleBlur = () => {
        // In a real app, you would make an API call here
        saveData();
    };

    // Save data function (simulates API call)
    const saveData = () => {
        // Simulate saving data
        setLastSaved(new Date());

        // Show toast notification
        setShowToast(true);

        // Clear any existing timeout to prevent multiple toasts
        if (toastTimeoutRef.current) {
            clearTimeout(toastTimeoutRef.current);
        }

        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    // Clean up timeout on unmount
    useEffect(() => {
        return () => {
            if (toastTimeoutRef.current) {
                clearTimeout(toastTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">
                    Edit Profile
                </h1>
                {lastSaved && (
                    <p className="text-sm text-gray-500">
                        Last saved: {lastSaved.toLocaleTimeString()}
                    </p>
                )}
            </div>

            <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Job Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="department"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Department
                        </label>
                        <input
                            type="text"
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="location"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <button
                        type="button"
                        onClick={saveData}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        <Save size={18} className="mr-2" />
                        Save Changes
                    </button>
                </div>
            </form>

            {/* Toast Notification */}
            <div
                className={`fixed bottom-4 right-4 flex items-center bg-white border border-gray-200 px-4 py-3 rounded-lg shadow-lg transform transition-transform duration-300 ${
                    showToast ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                        <Check size={18} className="text-green-600" />
                    </div>
                    <p className="text-gray-700 font-medium">
                        Changes auto-saved.
                    </p>
                </div>
            </div>
        </div>
    );
}
