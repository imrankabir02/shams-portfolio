import React, { useState, useEffect } from 'react';
import cvFile from '../assets/ImranCV.pdf';
import { NAV_ITEMS } from '../constants';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Add blur effect when scrolled
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            // Close menu if open
            if (isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
                scrolled ? 'bg-white/70 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}
        >
            {/* Navbar content */}
            <div className="container relative flex items-center justify-between h-16 px-6">
                {/* Desktop Navigation Links */}
                <div className="justify-center hidden w-full space-x-6 text-lg font-bold md:flex">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '')}`}
                            className="navel"
                        >
                            {/* Retro button effect */}
                            <span className="relative">{item}</span>
                        </a>
                    ))}
                    {/* Uncomment if you want to add CV download link */}
                    {/* <a 
                        href={cvFile}
                        download="ImranKabirCV.pdf" 
                        className="relative px-4 py-1 transition-all duration-300 group hover:scale-110"
                    >
                        <span className="relative">My CV</span>
                    </a> */}
                </div>

                {/* Mobile Menu Button */}
                <div className="flex justify-end md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="relative z-50 px-3 py-2 text-2xl border-2 rounded hover:bg-white"
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute bgcard left-0 w-full py-4 top-16 bg-white navel md:hidden">
                    <ul className="relative flex flex-col items-center space-y-4 text-lg font-bold">
                        {NAV_ITEMS.map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase().replace(' ', '')}`}
                                    className="navel"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                        <li>
                            {/* Uncomment if you want to add CV download link */}
                            {/* <a 
                                href={cvFile}
                                download="ImranKabirCV.pdf" 
                                className="px-4 py-1 transition-all duration-300 hover:text-yellow-300 hover:scale-110"
                            >
                                My CV
                            </a> */}
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
