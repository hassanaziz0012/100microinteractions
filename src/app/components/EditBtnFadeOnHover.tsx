import { Heart, Pen } from "lucide-react";
import { useState, useEffect } from "react";

// Course data type
interface Course {
    id: number;
    image: string;
    tag: string;
    tagColor: string;
    title: string;
    instructor: string;
    instructorImg: string;
}

// Sample course data
const coursesData: Course[] = [
    {
        id: 1,
        image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tag: "REACT",
        tagColor: "bg-blue-100 text-blue-700",
        title: "Mastering React Hooks and State Management",
        instructor: "Alex Morgan",
        instructorImg:
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/13963756/pexels-photo-13963756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tag: "BACKEND",
        tagColor: "bg-green-100 text-green-700",
        title: "Node.js and Express for RESTful API Development",
        instructor: "Sophia Chen",
        instructorImg:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tag: "DESIGN",
        tagColor: "bg-purple-100 text-purple-700",
        title: "Responsive Web Design Principles and Practices",
        instructor: "Marcus Johnson",
        instructorImg:
            "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];

const CourseCard = ({ course, index }: { course: Course; index: number }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Stagger the animations slightly for each card
        const timer = setTimeout(() => {
            setMounted(true);
        }, 100 * (index + 1));

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div
            className={`bg-white rounded-lg overflow-hidden shadow-md relative group`}
        >
            <div className="relative">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 m-2 flex gap-2 duration-300">
                    <button className="cursor-pointer p-1 rounded-full bg-white/70 hover:bg-white duration-300 -translate-y-12 group-hover:-translate-y-0 delay-150">
                        <Pen className="size-5 text-gray-600" />
                    </button>
                    <button className="cursor-pointer p-1 rounded-full bg-white/70 hover:bg-white duration-300 -translate-y-12 group-hover:-translate-y-0">
                        <Heart className="size-5 text-gray-600" />
                    </button>
                </div>
            </div>
            <div className="p-4">
                <span
                    className={`inline-block px-2 py-1 text-xs tracking-widest font-semibold border rounded ${
                        course.tagColor
                    } mb-2 transition-all duration-500 ${
                        mounted ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {course.tag}
                </span>
                <h3
                    className={`text-lg font-medium text-gray-900 mb-2 transition-all duration-500 delay-100 ${
                        mounted ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {course.title}
                </h3>
                <div
                    className={`flex items-center mt-4 transition-all duration-500 delay-200 ${
                        mounted ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <img
                        src={course.instructorImg}
                        alt={course.instructor}
                        className="w-8 h-8 rounded-full object-cover object-center"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                        {course.instructor}
                    </span>
                    <span className="ml-1 text-sm text-gray-500">• Mentor</span>
                </div>
            </div>
        </div>
    );
};

export default function EditBtnFadeOnHover() {
    return (
        <div className="m-10 flex justify-center gap-6">
            {coursesData.map((course, i) => (
                <div key={i} className="w-sm">
                    <CourseCard index={i} course={course} />
                </div>
            ))}
        </div>
    );
}
