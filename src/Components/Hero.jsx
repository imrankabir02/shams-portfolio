import { MY_DETAILS } from "../constants";
import { MdOutlineMailOutline, MdPhone } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const Hero = () => {
    return (
        <div className="relative min-h-screen  overflow-hidden ">
            <div className="relative px-4 mx-auto max-w-7xl">
                {/* Bengali Quote Card */}


                {/* Main Content Card */}
                <div className="relative">
                    <div className="pt-2 backdrop-blur-xl  ">
                        <div className="flex flex-col items-center gap-12 lg:flex-row">
                            {/* Profile Image Section */}
                            <div className="relative lg:w-1/3 group">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20  transform group-hover:scale-105 transition-transform duration-300"></div>
                                <img
                                    src={MY_DETAILS.image}
                                    alt={MY_DETAILS.name}
                                    className="relative w-full  shadow-lg transform group-hover:scale-[1.02] transition-all duration-300"
                                />
                                <div className="absolute inset-0  shadow-lg bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-2/3 space-y-8">
                                {/* Name and Education */}
                                <div className="space-y-6">
                                    <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        {MY_DETAILS.name}
                                    </h1>

                                    <div className="space-y-3">
                                        {MY_DETAILS.edu.map((edu, index) => (
                                            <div
                                                key={index}
                                                className="group flex items-center space-x-3 text-xl lg:text-2xl transition-all duration-300 hover:translate-x-2"
                                            >
                                                <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></span>
                                                <span className="font-semibold text-gray-800">{edu.title}</span>
                                                <span className="text-gray-500">•</span>
                                                <span className="text-gray-600">{edu.eduPlace}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Work Experience */}
                                <div className="space-y-3">
                                    {MY_DETAILS.works.map((work, index) => (
                                        <div
                                            key={index}
                                            className="group flex items-center space-x-3 text-lg lg:text-xl transition-all duration-300 hover:translate-x-2"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-150 transition-transform"></span>
                                            <span className="font-semibold text-gray-800">{work.pos}</span>
                                            <span className="text-gray-500">•</span>
                                            <span className="text-gray-600">{work.comp}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Contact Information */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <a
                                        href={`mailto:${MY_DETAILS.email}`}
                                        className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 text-blue-600 transition-all duration-300 hover:scale-105"
                                    >
                                        <span className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                                            <MdOutlineMailOutline className="text-2xl" />
                                        </span>
                                        <span className="font-medium truncate">{MY_DETAILS.email}</span>
                                    </a>

                                    <a
                                        href={`tel:${MY_DETAILS.phoneNo}`}
                                        className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 text-green-600 transition-all duration-300 hover:scale-105"
                                    >
                                        <span className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                                            <MdPhone className="text-2xl" />
                                        </span>
                                        <span className="font-medium">{MY_DETAILS.phoneNo}</span>
                                    </a>
                                </div>

                                {/* Social Links */}
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-semibold text-gray-800">Connect With Me</h2>
                                    <div className="flex gap-4">
                                        <a
                                            href="https://www.facebook.com/yourPhysicsAssistant"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-4 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl text-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                        >
                                            <SiFacebook className="text-3xl" />
                                        </a>
                                        <a
                                            href="https://t.me/AcademictoAdmissionRoadmap"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-4 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl text-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                        >
                                            <FaTelegram className="text-3xl" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;