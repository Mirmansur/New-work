import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import me from "../assets/myphoto.jpg";
import AboutSkills from "./AboutSkills";
import AboutMe from "./AboutMe";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";
import Project from "./Project";
import Contact from "./Contact";

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="Home bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 min-h-screen">
      <div className="container mx-auto">
        <div className="home mt-28 sm:mt-24 lg:mt-32 flex flex-col lg:flex-row items-center justify-between flex-wrap p-8">
          <div
            className="home-one flex flex-col gap-2 text-white font-sans font-extrabold"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl">
              <Typewriter
                options={{
                  strings: [t("home.Hello")],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-4">
              {t("home.My Name is")} <br />
              <Typewriter
                options={{
                  strings: [
                    `<span class="text-sky-500">${t("home.Mirmansur")}</span>`,
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-4">
              <Typewriter
                options={{
                  strings: [t("home.I'm Frontend Developer")],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </h2>
          </div>

          {/* Image Section */}
          <div
            className="home-two mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={me}
              alt="Me"
              className="rounded-full w-48 h-48  sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[430px] lg:h-[430px] object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Additional Components */}
        <AboutSkills />
        <AboutMe />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
