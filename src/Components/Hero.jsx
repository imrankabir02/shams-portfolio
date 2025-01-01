import { MY_DETAILS } from "../constants";
import profilePic from '../assets/Kabir.png';
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const Hero = () => {
    return (
        <div className="py-12 lg:py-20">
            <div className="pb-12 border-b bg-white rounded-2xl">
                {/* Main container */}
                <div className="flex flex-col px-6 py-12 mx-auto lg:flex-row lg:items-center lg:justify-between max-w-7xl">
                    {/* Left side - Text content */}
                    <div className="flex flex-col items-center mb-8 lg:items-start lg:w-2/3 lg:mb-0">
                        <h1 className="text-red-900 text-4xl">
                            পড়াকে মুখস্থ নয়,<br /> 
                            <span className=""> 
                            বুঝে আত্মস্থ করতে হবে
                            </span>
                        </h1>
                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-center text-slate-800 lg:text-6xl lg:text-left lg:mt-16">
                            {MY_DETAILS.name}
                        </h1>
                        <span className="block mt-6 text-3xl font-medium tracking-tight text-center lg:text-4xl lg:text-left">
                            <span className="text-3xl text-slate-700">
                                {MY_DETAILS.title}
                            </span>
                            <br />
                            <a href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-sm">
                                {MY_DETAILS.company}
                            </a>
                        </span>

                        {/* Contact Information */}
                        <p className="max-w-xl py-6 text-lg leading-relaxed text-center text-slate-700 lg:text-left">
                            <div className="p-6 space-y-6 transition-all duration-500 transform rounded-lg shadow-lg bg-white/80 backdrop-blur-sm">
                                {/* Email */}
                                <div className="flex items-center gap-4">
                                    <MdOutlineMailOutline className="text-2xl text-gray-600" />
                                    <a
                                        href={`mailto:${MY_DETAILS.email}`}
                                        className="texthover"
                                    >
                                        {MY_DETAILS.email}
                                    </a>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-4">
                                    <MdPhone className="text-2xl text-gray-600" />
                                    <a
                                        href={`tel:${MY_DETAILS.phoneNo}`}
                                        className="texthover"
                                    >
                                        {MY_DETAILS.phoneNo}
                                    </a>
                                </div>

                                {/* Address */}
                                <div className="flex items-center gap-4">
                                    <FaLocationDot className="text-2xl text-gray-600" />
                                    <span className="text-lg text-slate-700">{MY_DETAILS.address}</span>
                                </div>
                            </div>
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-6 text-3xl">
                            <a href="https://www.linkedin.com/in/imrankabir02"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-500 transform hover:text-sky-500 hover:scale-110 ">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.github.com/imrankabir02"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-700 transition-all duration-500 transform hover:text-slate-900 hover:scale-110">
                                <FaGithub />
                            </a>
                            <a href="https://leetcode.com/u/imrankabir02/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-500 transform hover:text-yellow-500 hover:scale-110">
                                <SiLeetcode />
                            </a>
                            <a href="https://www.hackerrank.com/profile/imrankabir02"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-500 transform hover:text-green-500 hover:scale-110">
                                <SiHackerrank />
                            </a>
                        </div>
                    </div>

                    {/* Right side - Profile picture */}
                    <div className="flex justify-center w-full pt-12 lg:w-1/3 lg:justify-end">
                        <img
                            src={MY_DETAILS.image}
                            alt="Imran Kabir"
                            className="object-cover  transition-all duration-500 transform rounded-3xl hover:scale-105 xl:w-max xl:h-max"
                        />
                        {/* <img
                            src={profilePic}
                            alt="Imran Kabir"
                            className="object-cover w-48 h-48 transition-all duration-500 transform rounded-3xl hover:scale-105 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-max xl:h-max"
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;