import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsEnvelope } from "react-icons/bs";
import { CiLock } from "react-icons/ci";

const SignInPopup = ({ isShowSignPopup, setIsShowSignPopup }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    isShowSignPopup && (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center px-5`}
      >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsShowSignPopup(false)}
            className={`absolute inset-0 bg-black/70`}
          />
        </AnimatePresence>

        {/* Popup Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className={`z-10 bg-white w-[430px] rounded-md overflow-hidden`}
        >
          {/* Title */}
          <div className="flex justify-between bg-[#f6f6f6] p-5">
            <h2 className="text-xl font-semibold text-[#333]">Sign In</h2>
            <button
              onClick={(e) => {
                setIsShowSignPopup(false);
              }}
              className="bg-gray-300 size-7 rounded-full grid place-items-center group duration-300 hover:bg-[#66676b]"
            >
              <IoClose className="text-xl text-[#333] duration-300 group-hover:text-white" />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-8">
            <button className="relative px-3 py-2 rounded-md bg-[#3e73b8] w-full">
              <FaFacebook className="text-xl text-white absolute left-3 top-1/2 -translate-y-1/2" />
              <p className="text-center text-white font-bold">
                Continue with Facebook
              </p>
            </button>
            <button className="mt-5 relative px-3 py-2 rounded-md border-2 border-gray-300 w-full">
              <FcGoogle className="text-xl text-white absolute left-3 top-1/2 -translate-y-1/2" />
              <p className="text-center text-[#333] font-bold">
                Continue with Google
              </p>
            </button>

            {/* Divider */}
            <div className="my-8 relative">
              <span className="italic bg-white text-gray-700 px-3 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                Or
              </span>
              <hr className="border-t-2 border-t-gray-200" />
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4">
              <div>
                <label htmlFor="" className="text-gray-700 font-semibold">
                  Email
                </label>
                <div className="relative">
                  <BsEnvelope className="text-xl absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 " />
                  <input
                    className="w-full py-2.5 pl-10 text-gray-600 rounded-[4px] outline-none border border-gray-300 focus:border-blue-400 duration-300 focus:ring-[2px]"
                    type="text"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="" className="text-gray-700 font-semibold">
                  Password
                </label>
                <div className="relative">
                  <CiLock className="text-2xl absolute top-1/2 -translate-y-1/2 left-2 text-gray-400 " />
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute top-1/2 -translate-y-1/2 right-3  hover:bg-gray-200 text-gray-400 hover:text-gray-600 uppercase text-[0.6rem] font-black cursor-pointer p-1.5 rounded-sm select-none"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                  <input
                    className="w-full py-2.5 pl-10 rounded-[4px] text-gray-600 outline-none border border-gray-300 focus:border-blue-400 duration-300 focus:ring-[2px]"
                    type={showPassword ? "text" : "password"}
                  />
                </div>
              </div>

              <div className="text-slate-500 font-semibold text-sm flex items-center justify-between my-2">
                <div className="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" name="" id="remember" />
                  <label
                    htmlFor="remember"
                    className="select-none cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#">Forgot Password?</a>
              </div>

              <div>
                <button className="w-full font-bold text-white bg-primary px-3 py-2.5 rounded-[4px] hover:bg-gold hover:text-black duration-300 ease-in">
                  Log In
                              </button>
                              <p className="text-sm text-gray-600 text-center mt-2">Don't have an account? <a href="#" className="text-primary hover:text-black duration-200">Sign up</a></p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    )
  );
};

export default SignInPopup;
