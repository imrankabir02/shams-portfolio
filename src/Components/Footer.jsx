import { FaTelegram } from "react-icons/fa";
import { SiFacebook, SiInstagram } from "react-icons/si";

export default function Footer() {
    return (
        <div className="flex flex-wrap justify-center m-2.5">
            <div className="flex items-center gap-6 text-3xl">
                <a href="https://www.facebook.com/yourPhysicsAssistant?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-blue-600 transition-all duration-500 transform hover:text-blue-400 hover:scale-110">
                    <SiFacebook />
                </a>
                <a href="https://t.me/AcademictoAdmissionRoadmap" target="_blank" rel="noopener noreferrer" className="text-blue-600 transition-all duration-500 transform hover:text-blue-400 hover:scale-110">
                    <FaTelegram />
                </a>
            </div>
        </div>
    )
}
