import { CourseCard } from "./CourseCard";

const Courses = () => {
    const coursesData = [
        {
            id: 1,
            title: "Advanced Physics",
            description: "Master the fundamentals of physics with hands-on experiments and practical applications.",
            instructor: "Dr. Sarah Wilson",
            duration: "12 weeks",
            students: 234,
            lessons: 24,
            rating: 4.8,
            price: 99.99,
            image: "/api/placeholder/800/600",
            tags: ["Physics", "Science", "Advanced"]
        },
        {
            id: 2,
            title: "Quantum Mechanics",
            description: "Explore the fascinating world of quantum physics and its applications in modern technology.",
            instructor: "Prof. Michael Chen",
            duration: "10 weeks",
            students: 189,
            lessons: 20,
            rating: 4.9,
            price: 89.99,
            image: "/api/placeholder/800/600",
            tags: ["Quantum", "Physics", "Advanced"]
        },
        {
            id: 3,
            title: "Classical Mechanics",
            description: "Understanding the principles of motion, forces, and energy in physical systems.",
            instructor: "Dr. James Smith",
            duration: "8 weeks",
            students: 156,
            lessons: 16,
            rating: 4.7,
            price: 79.99,
            image: "/api/placeholder/800/600",
            tags: ["Mechanics", "Physics", "Intermediate"]
        }
    ];

    return (
        <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Featured Courses
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Expand your knowledge with our carefully curated courses taught by expert instructors
                    </p>
                </div>

                {/* Course Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coursesData.map(course => (
                        <div 
                            key={course.id}
                            className="transform hover:scale-105 transition-all duration-300 hover:z-10"
                        >
                            <CourseCard course={course} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
