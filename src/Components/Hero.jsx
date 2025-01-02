import { MY_DETAILS } from "../constants";
import { MdOutlineMailOutline, MdPhone } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const Hero = () => {
    return (
        <div className="py-12 bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="relative">
                    {/* Background Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-rose-100 rounded-full blur-3xl opacity-20"></div>

                    {/* Main Content */}
                    <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                        <div className="flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-12">
                            {/* Profile Image Section */}
                            <div className="lg:w-1/3 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-rose-500/10 rounded-2xl"></div>
                                <img
                                    src={MY_DETAILS.image}
                                    alt={MY_DETAILS.name}
                                    className="relative w-full  object-cover rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-2/3 space-y-8">
                                {/* Bengali Quote */}
                                <div className="space-y-2 bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl">
                                    <h2 className="text-2xl lg:text-3xl font-medium bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">
                                        পড়াকে মুখস্থ নয়,
                                    </h2>
                                    <h2 className="text-2xl lg:text-3xl font-medium bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                                        বুঝে আত্মস্থ করতে হবে
                                    </h2>
                                </div>

                                {/* Name and Title */}
                                <div className="space-y-3">
                                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight">
                                        {MY_DETAILS.name}
                                    </h1>
                                    <div className="space-y-1">
                                        <p className="text-xl text-gray-700">{MY_DETAILS.title}</p>
                                        <p className="text-lg text-gray-600">{MY_DETAILS.company}</p>
                                    </div>
                                </div>

                                {/* Contact Information */}
                                <div className="flex flex-col gap-4">
                                    <a
                                        href={`mailto:${MY_DETAILS.email}`}
                                        className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group"
                                    >
                                        <span className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                                            <MdOutlineMailOutline className="text-xl" />
                                        </span>
                                        {MY_DETAILS.email}
                                    </a>
                                    <a
                                        href={`tel:${MY_DETAILS.phoneNo}`}
                                        className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors group"
                                    >
                                        <span className="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                                            <MdPhone className="text-xl" />
                                        </span>
                                        {MY_DETAILS.phoneNo}
                                    </a>
                                    {/* <div className="flex items-center gap-3 text-gray-600 group">
                                        <span className="p-2 bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors">
                                            <FaLocationDot className="text-xl" />
                                        </span>
                                        {MY_DETAILS.address}
                                    </div> */}
                                </div>
                                <div className="flex items-center gap-6 text-3xl">
                                    <h1>
                                        Social:
                                    </h1>
                                    <a href="https://www.facebook.com/yourPhysicsAssistant?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-blue-600 transition-all duration-500 transform hover:text-blue-400 hover:scale-110">
                                        <SiFacebook />
                                    </a>
                                    <a href="https://t.me/AcademictoAdmissionRoadmap" target="_blank" rel="noopener noreferrer" className="text-blue-600 transition-all duration-500 transform hover:text-blue-400 hover:scale-110">
                                        <FaTelegram />
                                    </a>
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