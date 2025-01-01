import { ABOUT_TEXT } from "../constants";
import cvFile from "../assets/ImranCV.pdf";
import { SKILLSETS } from "../constants";

const About = () => {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-6xl px-6 mx-auto ">
        <h1 className="mb-8 text-4xl font-bold text-center ">
          About Me
        </h1>

        <div className="p-8 bg-white shadow-lg bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-lg">
          <p className="mb-6 text-lg font-light leading-relaxed ">{ABOUT_TEXT}</p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {SKILLSETS.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium  bg-blue-600 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href={cvFile}
              download="Imran_Kabir_CV.pdf"
              className="px-8 py-3 text-lg font-semibold  transition-transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-indigo-500 hover:scale-105"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;