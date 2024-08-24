import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import admin from "../assets/adminpanel.png";
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
import Hous from "../assets/Hous.png";
import flegs from "../assets/flegs.png";
import furniro from "../assets/furniro.png";
import { useTranslation } from "react-i18next";
import spotify from "../assets/spotify.png";
import xuroson from "../assets/xuroson.png";
const Project = () => {
  let { t } = useTranslation();

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="Project">
      <div className="container mx-auto">
        <div className="project  mt-[250px] ">
          <div
            className="pro-one flex flex-col  items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="font-sans font-extrabold text-blue-950 text-3xl mb-3">
              {t("myproject.Projects")}
            </h1>
            <p className="font-sans  font-bold text-blue-950 text-xl ">
              {t("myproject.Things I’ve built so far")}
            </p>
          </div>
          <div className="pro-two p-10 flex items-center justify-between flex-wrap gap-3">
            <div
              className="twos-one w-[365px] rounded-[20px] bg-white  shadow-2xl"
              data-aos="zoom-in-right"
            >
              <div className="twos-img">
                <img src={admin} alt="" className="w-[365px] rounded-t-2xl " />
              </div>
              <div className="twos-about flex flex-col  p-4 ">
                <div className="about-one font-sans font-black text-xl mb-2">
                  <h2>{t("projet-about.Project Tile goes here")}</h2>
                </div>
                <div className="about-two font-sans font-light text-lg text-gray-600">
                  <p>
                    {t(
                      "projet-about.This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                    )}
                  </p>
                </div>
                <div className="about-three flex  items-center mt-3 ">
                  <div className="thech-one font-sans font-normal text-lg text-blue-950">
                    <p>{t("projet-about.Tech stack")} </p>
                  </div>
                  <div className="thech-two flex  items-center gap-1">
                    <img src={icon1} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon2} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon3} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon4} alt="" className="w-[20px] h-[20px]" />
                  </div>
                </div>
                <div className="about-four flex  items-center justify-between mt-4">
                  <div className="akar-one flex  items-center gap-2">
                    <img src={akar} alt="" />
                    <a
                      href="https://n58-6-mouth-exam-two.vercel.app/"
                      className=""
                    >
                      {t("projet-about.Live Preview")}
                    </a>
                  </div>
                  <div className="akar-two flex items-center gap-2">
                    <img src={icon11} alt="" className="w-[20px]  h-[20px]" />
                    <a href="https://github.com/Mirmansur/N58-6-mouth-Exam.git">
                      {t("projet-about.View Code")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="twos-one w-[365px] rounded-[20px] bg-white  shadow-2xl"
              data-aos="zoom-in-down"
            >
              <div className="twos-img  ">
                <img
                  src={spotify}
                  alt=""
                  className="w-[365px] rounded-t-2xl "
                />
              </div>
              <div className="twos-about flex flex-col  p-4 ">
                <div className="about-one font-sans font-black text-xl mb-2">
                  <h2> {t("projet-about.Project Tile goes here")}</h2>
                </div>
                <div className="about-two font-sans font-light text-lg text-gray-600">
                  <p>
                    <h2>
                      {" "}
                      {t(
                        "projet-about.This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                      )}
                    </h2>
                  </p>
                </div>
                <div className="about-three flex  items-center mt-3 ">
                  <div className="thech-one font-sans font-normal text-lg text-blue-950">
                    <p>{t("projet-about.Tech stack")} </p>
                  </div>
                  <div className="thech-two flex  items-center gap-1">
                    <img src={icon1} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon7} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon3} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon4} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon5} alt="" className="w-[20px] h-[20px]" />
                  </div>
                </div>
                <div className="about-four flex  items-center justify-between mt-4">
                  <div className="akar-one flex  items-center gap-2">
                    <img src={akar} alt="" />
                    <a
                      href="https://n58-7-mounth-exam.vercel.app/"
                      className=""
                    >
                      {t("projet-about.Live Preview")}
                    </a>
                  </div>
                  <div className="akar-two flex items-center gap-2">
                    <img src={icon11} alt="" className="w-[20px]  h-[20px]" />
                    <a href="https://github.com/Mirmansur/N58-7-Mounth-Exam.git">
                      {t("projet-about.View Code")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="twos-one w-[365px] rounded-[20px] bg-white  shadow-2xl"
              data-aos="zoom-in-left"
            >
              <div className="twos-img">
                <img src={Hous} alt="" className="w-[365px] rounded-t-2xl " />
              </div>
              <div className="twos-about flex flex-col  p-4 ">
                <div className="about-one font-sans font-black text-xl mb-2">
                  <h2> {t("projet-about.Project Tile goes here")}</h2>
                </div>
                <div className="about-two font-sans font-light text-lg text-gray-600">
                  <p>
                    {t(
                      "projet-about.This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                    )}
                  </p>
                </div>
                <div className="about-three flex  items-center mt-3 ">
                  <div className="thech-one font-sans font-normal text-lg text-blue-950">
                    <p>{t("projet-about.Tech stack")}</p>
                  </div>
                  <div className="thech-two flex  items-center gap-1">
                    <img src={icon1} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon8} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon3} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon4} alt="" className="w-[20px] h-[20px]" />
                  </div>
                </div>
                <div className="about-four flex  items-center justify-between mt-4">
                  <div className="akar-one flex  items-center gap-2">
                    <img src={akar} alt="" />
                    <a
                      href="https://my-first-work-eight.vercel.app/home"
                      className=""
                    >
                      {t("projet-about.Live Preview")}
                    </a>
                  </div>
                  <div className="akar-two flex items-center gap-2">
                    <img src={icon11} alt="" className="w-[20px]  h-[20px]" />
                    <a href="https://github.com/Mirmansur/MY-first-work.git">
                      {t("projet-about.View Code")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pro-two p-10 flex items-center justify-between flex-wrap gap-3">
            <div
              className="twos-one w-[365px] rounded-[20px] bg-white  shadow-2xl"
              data-aos="zoom-in-right"
            >
              <div className="twos-img">
                <img src={flegs} alt="" className="w-[365px] rounded-t-2xl " />
              </div>
              <div className="twos-about flex flex-col  p-4 ">
                <div className="about-one font-sans font-black text-xl mb-2">
                  <h2>{t("projet-about.Project Tile goes here")}</h2>
                </div>
                <div className="about-two font-sans font-light text-lg text-gray-600">
                  <p>
                    {t(
                      "projet-about.This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                    )}
                  </p>
                </div>
                <div className="about-three flex  items-center mt-3 ">
                  <div className="thech-one font-sans font-normal text-lg text-blue-950">
                    <p>{t("projet-about.Tech stack")} </p>
                  </div>
                  <div className="thech-two flex  items-center gap-1">
                    <img src={icon1} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon8} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon3} alt="" className="w-[20px] h-[20px]" />
                  </div>
                </div>
                <div className="about-four flex  items-center justify-between mt-4">
                  <div className="akar-one flex  items-center gap-2">
                    <img src={akar} alt="" />
                    <a href="https://wold-countrys.vercel.app/" className="">
                      {t("projet-about.Live Preview")}
                    </a>
                  </div>
                  <div className="akar-two flex items-center gap-2">
                    <img src={icon11} alt="" className="w-[20px]  h-[20px]" />
                    <a href="https://github.com/Mirmansur/wold-countrys.git">
                      {t("projet-about.View Code")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="twos-one w-[365px] rounded-[20px] bg-white  shadow-2xl"
              data-aos="zoom-in-down"
            >
              <div className="twos-img ">
                <img
                  src={xuroson}
                  alt=""
                  className="w-[365px] rounded-t-2xl "
                />
              </div>
              <div className="twos-about flex flex-col  p-4 ">
                <div className="about-one font-sans font-black text-xl mb-2">
                  <h2>{t("projet-about.Project Tile goes here")}</h2>
                </div>
                <div className="about-two font-sans font-light text-lg text-gray-600">
                  <p>
                    {t(
                      "projet-about.This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                    )}
                  </p>
                </div>
                <div className="about-three flex  items-center mt-3 ">
                  <div className="thech-one font-sans font-normal text-lg text-blue-950">
                    <p>{t("projet-about.Tech stack")} </p>
                  </div>
                  <div className="thech-two flex  items-center gap-1">
                    <img src={icon1} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon2} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon3} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon4} alt="" className="w-[20px] h-[20px]" />
                  </div>
                </div>
                <div className="about-four flex  items-center justify-between mt-4">
                  <div className="akar-one flex  items-center gap-2">
                    <img src={akar} alt="" />
                    <a href="https://xuroson.vercel.app/" className="">
                      {t("projet-about.Live Preview")}
                    </a>
                  </div>
                  <div className="akar-two flex items-center gap-2">
                    <img src={icon11} alt="" className="w-[20px]  h-[20px]" />
                    <a href="https://github.com/Mirmansur/xuroson.git">
                      {t("projet-about.View Code")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="twos-one w-[365px] rounded-[20px] bg-white  shadow-2xl"
              data-aos="zoom-in-left"
            >
              <div className="twos-img">
                <img
                  src={furniro}
                  alt=""
                  className="w-[365px] rounded-t-2xl "
                />
              </div>
              <div className="twos-about flex flex-col  p-4 ">
                <div className="about-one font-sans font-black text-xl mb-2">
                  <h2>{t("projet-about.Project Tile goes here")}</h2>
                </div>
                <div className="about-two font-sans font-light text-lg text-gray-600">
                  <p>
                    {t(
                      "projet-about.This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                    )}
                  </p>
                </div>
                <div className="about-three flex  items-center mt-3 ">
                  <div className="thech-one font-sans font-normal text-lg text-blue-950">
                    <p>{t("projet-about.Tech stack")} </p>
                  </div>
                  <div className="thech-two flex  items-center gap-1">
                    <img src={icon1} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon2} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon3} alt="" className="w-[20px] h-[20px]" />
                    <img src={icon6} alt="" className="w-[20px] h-[20px]" />
                  </div>
                </div>
                <div className="about-four flex  items-center justify-between mt-4">
                  <div className="akar-one flex  items-center gap-2">
                    <img src={akar} alt="" />
                    <a href="https://furniro-all.vercel.app/" className="">
                      {t("projet-about.Live Preview")}
                    </a>
                  </div>
                  <div className="akar-two flex items-center gap-2">
                    <img src={icon11} alt="" className="w-[20px]  h-[20px]" />
                    <a href="https://github.com/Mirmansur/FurniroAll.git">
                      {t("projet-about.View Code")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
