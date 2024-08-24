import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  let { t } = useTranslation();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="AboutMe bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="aboutme flex flex-col items-center">
          <div
            className="aboutme-one text-center p-8 sm:p-12 lg:p-16"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold text-blue-950 mb-4">
              {t("aboutMe.About Me")}
            </h1>
            <p
              className="text-lg sm:text-xl lg:text-2xl font-sans font-semibold text-gray-600"
              data-aos="zoom-in-down"
            >
              {t("aboutMe.Description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
