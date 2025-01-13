import React from 'react';
import { Clock, Users, Book, Star } from 'lucide-react';

// CourseCard Component
const CourseCard = ({ course }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            {/* Course Image */}
            <div className="relative">
                <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                    <div className="absolute bottom-4 left-4 flex gap-2">
                        {course.tags.map((tag, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Course Content */}
            <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {course.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                    {course.description}
                </p>

                {/* Instructor */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                        {course.instructor[0]}
                    </div>
                    <div>
                        <p className="font-medium text-gray-800">{course.instructor}</p>
                        <div className="flex items-center gap-1 text-yellow-500">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm text-gray-600">{course.rating}</span>
                        </div>
                    </div>
                </div>

                {/* Course Details */}
                <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-gray-600 text-sm">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Book className="w-4 h-4" />
                            <span>{course.lessons} lessons</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{course.students} students</span>
                        </div>
                    </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4">
                    <div className="text-2xl font-bold text-blue-600">
                        ${course.price}
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl 
                        hover:opacity-90 transition-opacity transform group-hover:scale-105 duration-300">
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export { CourseCard };