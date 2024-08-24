import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import icon1 from "../assets/html.svg";
import icon2 from "../assets/css.svg";
import icon3 from "../assets/js.svg";
import icon4 from "../assets/react.svg";
import icon5 from "../assets/redux.svg";
import icon6 from "../assets/bootsrap.svg";
import icon7 from "../assets/tailwind.svg";
import icon8 from "../assets/sass.svg";
import icon9 from "../assets/git.svg";
import icon10 from "../assets/visuval.svg";
import icon11 from "../assets/github.svg";
import { useTranslation } from "react-i18next";

const AboutSkills = () => {
  let { t } = useTranslation();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="About bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="about text-center">
          <div
            className="about-one mb-8"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold text-blue-950">
              {t("skills.My Tech Stack")}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-950 font-normal font-sans mt-2">
              {t("skills.Technologies I’ve been working with recently")}
            </p>
          </div>
          <div className="about-two grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <img
              src={icon1}
              alt="HTML"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
              data-aos="flip-left"
            />
            <img
              src={icon2}
              alt="CSS"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
              data-aos="flip-left"
            />
            <img
              src={icon3}
              alt="JavaScript"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
              data-aos="flip-left"
            />
            <img
              src={icon4}
              alt="React"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
              data-aos="flip-left"
            />
            <img
              src={icon5}
              alt="Redux"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
              data-aos="flip-left"
            />
            <img
              src={icon6}
              alt="Bootstrap"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
              data-aos="flip-left"
            />
            <img
              src={icon7}
              alt="Tailwind"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
              data-aos="flip-left"
            />
            <img
              src={icon8}
              alt="Sass"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
              data-aos="flip-left"
            />
            <img
              src={icon9}
              alt="Git"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
              data-aos="flip-left"
            />
            <img
              src={icon10}
              alt="Visual Studio"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
              data-aos="flip-left"
            />
            <img
              src={icon11}
              alt="GitHub"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
              data-aos="flip-left"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1jI02_8_A3vLLU1kiRyky-o6ukBUTWGyTg&s"
              alt="Extra Icon"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
              data-aos="flip-left"
            />
            <img
              src="https://www.svgrepo.com/show/353401/ant-design.svg"
              alt="Ant Design"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
              data-aos="flip-left"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxn-0Kp4Qgppjz51V6gjqMpW0OeBP3mmfwA&s"
              alt="Extra Icon"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
              data-aos="flip-left"
            />
            <img
              src="https://www.svgrepo.com/show/374144/typescript.svg"
              alt="TypeScript"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
              data-aos="flip-left"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png"
              alt="Canva"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
              data-aos="flip-left"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
              alt="Figma"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto"
              data-aos="flip-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkills;
