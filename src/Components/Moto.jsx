import React from "react";

export default function Moto() {
  return (
    <div className="flex flex-col lg:flex-row  items-center justify-between shadow-xl">
      {/* Left Side - Logo */}
      <div className="flex items-center justify-center w-full lg:w-1/3">
          <div className="text-center pb-12">
            <h1
              className="text-3xl font-extrabold text-orange-600"
              style={{
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
              }}
            >
              Shams Mahamud's
            </h1>
            <h2
              className="text-xl font-bold text-blue-600"
              style={{
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              Admission Care
            </h2>
          {/* </div> */}
        </div>
      </div>

      {/* Right Side - Additional Content */}
      <div className="w-full lg:w-2/3">
        <div className="mb-12 transform hover:scale-[1.02] transition-all duration-300">
          <div className="p-2 space-y-2  backdrop-blur-lg rounded-2xl">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text animate-gradient">
                পড়াকে মুখস্থ নয়,
              </h2>
              <h2 className="text-3xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text animate-gradient">
                বুঝে আত্মস্থ করতে হবে
              </h2>
            </div>
            <div className="pt-2">
              <p className="text-gray-600 text-center text-lg lg:text-xl">
                "Don't memorize your studies, understand and internalize them"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
