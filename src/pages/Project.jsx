import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import admin from "../assets/adminpanel.png";
import spotify from "../assets/spotify.png";
import flegs from "../assets/flegs.png";
import furniro from "../assets/furniro.png";
import dummin from "../assets/dummin.png";
import alishop from "../assets/alishop.png";
import kino from "../assets/kino.png";
import birga from "../assets/birga.png";
import fruts from "../assets/fruts.png";
import icon1 from "../assets/html.svg";
import icon2 from "../assets/css.svg";
import icon3 from "../assets/js.svg";
import icon4 from "../assets/react.svg";
import icon5 from "../assets/redux.svg";
import icon6 from "../assets/bootsrap.svg";
import icon7 from "../assets/tailwind.svg";
import icon8 from "../assets/sass.svg";
import icon11 from "../assets/github.svg";
import akar from "../assets/akar.svg";
import vue from "../assets/vue.png";
import next from "../assets/next.png";
import { useTranslation } from "react-i18next";

const projects = [
  {
    img: spotify,
    name: "Spotify Clone",
    link: "https://n58-7-mounth-exam.vercel.app/",
    codeLink: "https://github.com/Mirmansur/N58-7-Mounth-Exam.git",
    techStack: [icon1, icon7, icon3, icon4, icon5],
  },

  {
    img: fruts,
    name: "Min Shop",
    link: "https://fruits-red-zeta.vercel.app/",
    codeLink: "https://github.com/Mirmansur/Fruits",
    techStack: [icon7, icon3, icon4, icon5],
  },
  {
    img: alishop,
    name: "Alihop Clone",
    link: "https://vue-2-lesson-project-alishop.vercel.app/#/",
    codeLink: "https://github.com/Mirmansur/vue-2-lesson-project-alishop",
    techStack: [icon7, icon3, vue, icon5],
  },
  {
    img: kino,
    name: "Seach Movie",
    link: "https://vou-first-lesson.vercel.app/",
    codeLink: "https://github.com/Mirmansur/Vou-first-lesson",
    techStack: [icon7, icon3, vue],
  },
  {
    img: birga,
    name: "Birga ",
    link: "https://birga-project.vercel.app/",
    codeLink: "https://github.com/Mirmansur/birga-project",
    techStack: [icon7, icon3, next, icon5],
  },
  {
    img: dummin,
    name: "Dummin.json",
    link: "https://dummy-json-drab.vercel.app/",
    codeLink: "https://github.com/Mirmansur/dummy.json",
    techStack: [icon5, icon7, icon3, icon4],
  },
  {
    img: admin,
    name: "Admin Panel",
    link: "https://n58-6-mouth-exam-two.vercel.app/",
    codeLink: "https://github.com/Mirmansur/N58-6-mouth-Exam.git",
    techStack: [icon1, icon2, icon3, icon4],
  },
  {
    img: furniro,
    name: "Wold-Country",
    link: "https://furniro-all.vercel.app/",
    codeLink: "https://github.com/Mirmansur/FurniroAll.git",
    techStack: [icon1, icon2, icon3, icon6],
  },

  {
    img: flegs,
    name: "Flegs",
    link: "https://wold-countrys.vercel.app/",
    codeLink: "https://github.com/Mirmansur/wold-countrys.git",
    techStack: [icon1, icon8, icon3],
  },
];

const Project = () => {
  let { t } = useTranslation();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="Project">
      <div className="container mx-auto">
        <div className="project mt-[250px]">
          <div
            className="pro-one flex flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="font-sans font-extrabold text-blue-950 text-3xl mb-3">
              {t("myproject.Projects")}
            </h1>
            <p className="font-sans font-bold text-blue-950 text-xl ">
              {t("myproject.Things I’ve built so far")}
            </p>
          </div>
          <div className="pro-two p-10 flex items-center justify-between flex-wrap gap-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="twos-one w-[365px] rounded-[20px] bg-white shadow-2xl"
                data-aos={`zoom-in-${index % 2 === 0 ? "right" : "left"}`}
              >
                <div className="twos-img">
                  <img
                    src={project.img}
                    alt=""
                    className="w-[365px] rounded-t-2xl"
                  />
                </div>
                <div className="twos-about flex flex-col p-4">
                  <h2 className="about-one font-sans font-black text-xl mb-2">
                    {project.name}
                  </h2>
                  <p className="about-two font-sans font-light text-lg text-gray-600">
                    {t(
                      "projet-about.This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                    )}
                  </p>
                  <div className="about-three flex items-center mt-3">
                    <p className="font-sans font-normal text-lg text-blue-950">
                      {t("projet-about.Tech stack")}
                    </p>
                    <div className="thech-two flex items-center gap-1">
                      {project.techStack.map((icon, idx) => (
                        <img
                          key={idx}
                          src={icon}
                          alt=""
                          className="w-[20px] h-[20px]"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="about-four flex items-center justify-between mt-4">
                    <div className="akar-one flex items-center gap-2">
                      <img src={akar} alt="" />
                      <a href={project.link}>
                        {t("projet-about.Live Preview")}
                      </a>
                    </div>
                    <div className="akar-two flex items-center gap-2">
                      <img src={icon11} alt="" className="w-[20px] h-[20px]" />
                      <a href={project.codeLink}>
                        {t("projet-about.View Code")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
