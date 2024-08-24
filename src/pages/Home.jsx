import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import me from "../assets/me.jpg";
import AboutSkills from "./AboutSkills";
import AboutMe from "./AboutMe";
import { useTranslation } from "react-i18next";

const Home = () => {
  let { t } = useTranslation();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="Home bg-gray-100 ">
      <div className="container mx-auto">
        <div className="home mt-28 sm:mt-24 lg:mt-32 flex flex-col lg:flex-row items-center justify-between flex-wrap p-8 ">
          <div
            className="home-one flex flex-col gap-2 text-blue-950 font-sans font-extrabold"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl">
              {t("home.Hello")}
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl">
              {t("home.My Name is")} <br />
              <span className="text-sky-500">{t("home.Mirmansur")}</span>
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl">
              {t("home.I'm Frontend Developer")}
            </h2>
          </div>
          <div
            className="home-two mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={me}
              alt="Me"
              className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[430px] lg:h-[430px] object-cover"
            />
          </div>
        </div>
        <AboutSkills />
        <AboutMe />
      </div>
    </div>
  );
};

export default Home;
