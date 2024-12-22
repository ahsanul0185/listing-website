import React, { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { categoryOptions } from "../menuItems";
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { GoMail } from "react-icons/go";
import {
  FaAngleDown,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { TiSocialGooglePlus } from "react-icons/ti";
import { SlGlobeAlt } from "react-icons/sl";
import cardsAll from "/img/cards_all.svg";
import { motion } from "framer-motion";
import { LiaAngleDownSolid } from "react-icons/lia";

const footerLinks = [
  {
    name: "About us",
    link: "",
  },
  {
    name: "Faq",
    link: "",
  },
  {
    name: "Help",
    link: "",
  },
  {
    name: "My account",
    link: "",
  },
  {
    name: "Create account",
    link: "",
  },
  {
    name: "Contacts",
    link: "",
  },
];

const Footer = () => {
  const ref = useRef();

  const [showLinks, setShowLinks] = useState({
    quickLinks: false,
    category: false,
    contact: false,
    keepTouch: false,
  });

  // Auto close Accordians in small screen
  useEffect(() => {
    if (window.innerWidth > 640) {
      setShowLinks({
          quickLinks: true,
          category: true,
          contact: true,
          keepTouch: true,
        });
    }
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setShowLinks({
          quickLinks: true,
          category: true,
          contact: true,
          keepTouch: true,
        });
      } else {
        setShowLinks({
          quickLinks: false,
          category: false,
          contact: false,
          keepTouch: false,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="border-t border-t-gray-200 pt-14 md:pt-[4rem] bg-white">
      <div className="container section-padding">
        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 sm:pb-8">
          {/* Quick Links */}
          <div className="">
            <h2
              onClick={() =>
                setShowLinks((prev) => ({
                  ...prev,
                  quickLinks: !prev.quickLinks,
                }))
              }
              className="text-[18px] sm:text-xl font-bold sm:font-semibold text-[#333] pb-3 md:pointer-events-none cursor-pointer sm:cursor-default flex items-center justify-between border-b sm:border-b-0 border-b-gray-200"
            >
              Quick Links{" "}
              <LiaAngleDownSolid
                className={`text-[#555] duration-300 block sm:hidden ${
                  showLinks.quickLinks ? "-rotate-180" : "rotate-0"
                }`}
              />
            </h2>
            <div
              style={{
                height: showLinks.quickLinks
                  ? ref.current?.offsetHeight || 0
                  : 0,
              }}
              className={`mt-3 sm:mt-0 sm:h-fit overflow-hidden  transition-all duration-500`}
            >
              <ul ref={ref} className="flex flex-col gap-1">
                {footerLinks.map((item, idx) => (
                  <button
                    key={idx}
                    className="flex items-center gap-2 font-medium text-[15px] text-[#555] duration-300 hover:text-primary hover:pl-1 group"
                  >
                    <a href={item.link}>{item.name}</a>{" "}
                    <BsArrowRight className="text-sm duration-300 opacity-0 group-hover:opacity-100" />
                  </button>
                ))}
              </ul>
            </div>
          </div>

          {/* Categories*/}
          <div>
            <h2
              onClick={() =>
                setShowLinks((prev) => ({
                  ...prev,
                  category: !prev.category,
                }))
              }
              className="text-[18px] sm:text-xl font-bold sm:font-semibold text-[#333] pb-3 md:pointer-events-none cursor-pointer sm:cursor-default flex items-center justify-between border-b sm:border-b-0 border-b-gray-200"
            >
              Categories{" "}
              <LiaAngleDownSolid
                className={`text-[#555] duration-300 block sm:hidden ${
                  showLinks.category ? "-rotate-180" : "rotate-0"
                }`}
              />
            </h2>
            <div
              style={{
                height: showLinks.category ? ref.current?.offsetHeight || 0 : 0,
              }}
              className={`mt-3 sm:mt-0 sm:h-fit overflow-hidden  transition-all duration-500`}
            >
              <ul className="flex flex-col gap-1">
                {categoryOptions.map(
                  (item, idx) =>
                    idx !== 0 && (
                      <button
                        key={idx}
                        className="flex items-center gap-2 font-medium text-[15px] text-[#555] duration-300 hover:text-primary hover:pl-1 group"
                      >
                        <a href={item.link}>{item.name}</a>{" "}
                        <BsArrowRight className="text-sm duration-300 opacity-0 group-hover:opacity-100" />
                      </button>
                    )
                )}
              </ul>
            </div>
          </div>

          {/* Contacts*/}
          <div>
            <h2
              onClick={() =>
                setShowLinks((prev) => ({
                  ...prev,
                  contact: !prev.contact,
                }))
              }
              className="text-[18px] sm:text-xl font-bold sm:font-semibold text-[#333] pb-3 md:pointer-events-none cursor-pointer sm:cursor-default flex items-center justify-between border-b sm:border-b-0 border-b-gray-200"
            >
              Contacts{" "}
              <LiaAngleDownSolid
                className={`text-[#555] duration-300 block sm:hidden ${
                  showLinks.contact ? "-rotate-180" : "rotate-0"
                }`}
              />
            </h2>
            <div
              style={{
                height: showLinks.contact ? ref.current?.offsetHeight || 0 : 0,
              }}
              className={`mt-3 sm:mt-0 sm:h-fit overflow-hidden  transition-all duration-500`}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <HiOutlineHome className="text-2xl text-primary" />
                  <p className="text-[15px] text-[#555]">
                    97845 Baker st. 567 <br />
                    Los Angeles - US
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <MdOutlineHeadsetMic className="text-2xl text-primary" />
                  <p className="text-[15px] text-[#555]">+ 61 23 8093 3400</p>
                </div>

                <div className="flex items-center gap-3">
                  <GoMail className="text-2xl text-primary" />
                  <a
                    href="#"
                    className="text-[15px] text-[#555] duration-300 hover:text-primary"
                  >
                    info@domain.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Keep in touch*/}
          <div>
            {/* Title */}
            <h2
              onClick={() =>
                setShowLinks((prev) => ({
                  ...prev,
                  keepTouch: !prev.keepTouch,
                }))
              }
              className="text-[18px] sm:text-xl font-bold sm:font-semibold text-[#333] pb-3 md:pointer-events-none cursor-pointer sm:cursor-default flex items-center justify-between border-b sm:border-b-0 border-b-gray-200"
            >
              Keep in touch{" "}
              <LiaAngleDownSolid
                className={`text-[#555] duration-300 block sm:hidden ${
                  showLinks.keepTouch ? "-rotate-180" : "rotate-0"
                }`}
              />
            </h2>
            {/* Items */}
            <div
              style={{
                height: showLinks.keepTouch
                  ? ref.current?.offsetHeight || 0
                  : 0,
              }}
              className={`mt-3 sm:mt-0 sm:h-fit overflow-hidden  transition-all duration-500`}
            >
              <div className="flex rounded-[4px] overflow-hidden">
                <input
                  className="py-2 px-3 bg-[#f0f0f0] outline-none w-full md:max-w-48"
                  type="text"
                  placeholder="Your Email"
                />
                <button className="text-[15px] font-bold text-white bg-primary px-3 py-2 hover:bg-gold hover:text-black duration-300 ease-in">
                  Submit
                </button>
              </div>

              <div className="mt-5">
                <h3 className="text-[#333] text-base font-bold">Follow Us</h3>
                <div className="text-xl flex items-center gap-4 mt-2">
                  <FaFacebookF className="text-[#999] hover:text-primary" />
                  <RiTwitterXLine className="text-[#999] hover:text-primary" />
                  <TiSocialGooglePlus className="text-[#999] hover:text-primary" />
                  <FaPinterestP className="text-[#999] hover:text-primary" />
                  <FaInstagram className="text-[#999] hover:text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="border-t-0 sm:border-t border-t-gray-200 py-8 flex flex-col lg:flex-row gap-5 items-center justify-between">
          <div className="flex justify-center items-center flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="text-[#555] w-fit bg-[#f2f2f2] px-2 py-1.5 rounded-sm flex justify-between items-center gap-3">
                <span className="text-xs font-semibold">English</span>{" "}
                <SlGlobeAlt />
              </div>

              <div className="text-[#555] w-fit bg-[#f2f2f2] px-2 py-1.5 rounded-sm flex justify-between items-center gap-3">
                <span className="text-xs font-semibold">US Dollars</span>{" "}
                <FaAngleDown className="text-sm" />
              </div>
            </div>

            <img src={cardsAll} alt="" />
          </div>

          <p className="text-sm text-[#969696] flex flex-wrap gap-3 items-center">
            <a href="#">Terms and conditions</a> | <a href="#">Privacy</a> |{" "}
            <a href="#">© 2018 Domain</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
