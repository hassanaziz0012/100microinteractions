import React from "react";

const CourseCard = ({ title, description, imageUrl }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="h-48 bg-gray-200">
                <img
                    src={imageUrl || "/api/placeholder/400/200"}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {title}
                </h3>
                <p className="text-gray-600">{description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                    Learn More
                </button>
            </div>
        </div>
    );
};

const CardHoverShadow = () => {
    const courses = [
        {
            title: "Introduction to React",
            description:
                "Learn the fundamentals of React, including components, props, and state management.",
            imageUrl: "https://images.unsplash.com/photo-1710098248948-4f90e8abbf0d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Advanced CSS Techniques",
            description:
                "Master advanced CSS concepts including Flexbox, Grid, and responsive design patterns.",
            imageUrl: "https://images.unsplash.com/photo-1710098248948-4f90e8abbf0d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Full Stack Development",
            description:
                "Build complete web applications with modern front-end and back-end technologies.",
            imageUrl: "https://images.unsplash.com/photo-1710098248948-4f90e8abbf0d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-screen max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                Featured Courses
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        title={course.title}
                        description={course.description}
                        imageUrl={course.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardHoverShadow;
