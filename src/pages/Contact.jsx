import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo1.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="Contact py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="contact flex flex-col items-center justify-center gap-12 mt-20">
          <div
            className="contact-one text-center"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="font-sans font-extrabold text-4xl text-sky-400 mb-6">
              {t("contact.Get in Touch")}
            </h1>
            <p className="font-sans text-lg text-gray-400">
              {t("contact.Feel free to send me a message")}
            </p>
          </div>

          <div className="contact-form w-full max-w-lg bg-gray-800 p-8 rounded-xl ">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="text-gray-400 block mb-2" htmlFor="name">
                  {t("contact.Your Name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder={t("contact.Enter your name")}
                />
              </div>

              <div>
                <label className="text-gray-400 block mb-2" htmlFor="email">
                  {t("contact.Your Email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder={t("contact.Enter your email")}
                />
              </div>

              <div>
                <label className="text-gray-400 block mb-2" htmlFor="message">
                  {t("contact.Your Message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder={t("contact.Enter your message")}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg transition-colors"
              >
                {t("contact.Send Message")}
              </button>
            </form>
          </div>

          <div className="contact-two flex  flex-col  lg:flex-row items-center justify-center gap-8 mt-20">
            <div className="one flex justify-center">
              <img
                src={logo}
                alt="Logo"
                className="rounded-full w-[150px] h-[150px] border-4 border-sky-500"
              />
            </div>

            <div className="two text-center lg:text-left flex flex-col items-center lg:items-start">
              <p className="font-sans font-medium text-xl text-gray-400">
                +998 94 626 15 90
              </p>
              <div className="social-icons flex items-center gap-6 mt-4">
                <a
                  href="https://github.com/Mirmansur"
                  className="text-3xl hover:text-sky-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/mirmansur-rakhmatov-46b37732b/"
                  className="text-3xl hover:text-sky-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
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
