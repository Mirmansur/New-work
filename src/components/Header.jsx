import { NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../i18n";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Header = () => {
  let { t, i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "en");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <header className="Header fixed bg-white top-0 right-0 left-0 z-10 shadow-lg">
      <div className="container mx-auto">
        <div className="header flex items-center justify-between">
          <div className="logo">
            <img src={logo} alt="Logo" className="rounded-full w-32 h-32" />
          </div>

          {/* Hamburger//////////////////////////////////////////////////////////////////// */}
          <input className="peer hidden" type="checkbox" id="hamburger" />
          <label
            className="peer-checked:bg-gray-800 block relative cursor-pointer lg:hidden border-2 border-gray-500 peer-checked:border-white p-3 rounded-md transition-all"
            htmlFor="hamburger"
          >
            <div className="m-auto w-6 h-0.5 rounded bg-gray-500 transition-all duration-300 peer-checked:bg-white"></div>
            <div className="m-auto mt-2 w-6 h-0.5 rounded bg-gray-500 transition-all duration-300 peer-checked:bg-white"></div>
          </label>
          {/* ////////////////////////////////////////////////////////////////////////////////// */}
          <div className="-translate-y-full peer-checked:translate-y-0 lg:translate-y-0 inset-0 fixed lg:static pt-20 lg:pt-0  lg:bg-transparent -z-10 lg:z-10 lg:h-auto transition-all duration-300 ">
            <div className="bg-white shadow-md lg:bg-transparent lg:shadow-none py-10 lg:py-0 flex flex-col  lg:items-center lg:flex-row px-6 space-y-4 lg:space-y-0 lg:space-x-12  ">
              <NavLink to="/" activeClassName="text-black font-medium">
                <h3 className="font-sans text-gray-500 transition-[0.4s] hover:text-black hover:font-medium">
                  {t("navbar.About Me")}
                </h3>
              </NavLink>
              <NavLink to="/project" activeClassName="text-black font-medium">
                <h3 className="font-sans text-gray-500 transition-[0.4s] hover:text-black hover:font-medium">
                  {t("navbar.Project")}
                </h3>
              </NavLink>
              <NavLink to="/contact" activeClassName="text-black font-medium">
                <h3 className="font-sans text-gray-500 transition-[0.4s] hover:text-black hover:font-medium">
                  {t("navbar.Contact")}
                </h3>
              </NavLink>
              <a
                href="https://github.com/Mirmansur"
                aria-label="GitHub Profile"
              >
                <button className="border-none">
                  <FaGithub className="text-2xl" />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/mirmansur-rakhmatov-5aa051323/"
                aria-label="LinkedIn Profile"
              >
                <button className="border-none">
                  <FaLinkedin className="text-2xl" />
                </button>
              </a>
              <select
                className="outline-none w-24 p-2 rounded-md shadow-lg "
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                aria-label="Select Language"
              >
                <option className="bg-white" value="en">
                  Eng
                </option>
                <option className="bg-white" value="ru">
                  Рус
                </option>
                <option className="bg-white" value="uz">
                  Uz
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
