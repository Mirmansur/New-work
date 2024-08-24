import { useTranslation } from "react-i18next";
import logo from "../assets/logo1.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Contact = () => {
  let { t } = useTranslation();

  return (
    <div className="Contact">
      <div className="container mx-auto">
        <div className="contact flex  flex-col   justify-center mt-80">
          <div
            className="contact-one flex flex-col  items-center
          justify-center font-sans font-extrabold text-4xl text-blue-950 gap-3"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className=" text-3xl text-center">
              {t("contact.My telegram link for any questions")}{" "}
            </h1>
            <h2>
              <a href="https://t.me/mirmansur702">@mirmansur702</a>
            </h2>
          </div>
          <div className="contact-two mt-40">
            <div className="con-one flex  items-center  justify-between">
              <div className="one">
                <img
                  src={logo}
                  alt=""
                  className="rounded-[50%] w-[130px] h-[130px]"
                />
              </div>
              <div className="two flex items-center gap-4">
                <p className="font-sans font-medium text-gray-600 ">
                  +998 94 626 15 90
                </p>
                <a href="https://github.com/Mirmansur">
                  <FaGithub className="text-2xl" />
                </a>
                <a href="https://www.linkedin.com/in/mirmansur-rakhmatov-5aa051323/">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
