import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

function Nevi() {
  const [sideMenu, setSideMenu] = useState(false);
  const handleSideMenu = () => {
    setSideMenu(!sideMenu);
  };
  return (
    <div className="fixed w-full h-20 z-[100] bg-white shadow-sm shadow-gray-300 top-0 left-0 right-0">
      <div className="flex items-center justify-between w-full h-full p-6">
        <div className="md:flex-1">Logo</div>
        <div className=" md:flex-1 md:mr-10">
          <ul className="items-center justify-between text-xl hidden md:flex">
            <Link href="/">
              <li>About</li>
            </Link>
            <Link href="/">
              <li>Business</li>
            </Link>
            <Link href="/">
              <li>Services</li>
            </Link>
            <Link href="/">
              <li>Team</li>
            </Link>
            <AiOutlineSearch />
          </ul>
          <div className="cursor-pointer md:hidden" onClick={handleSideMenu}>
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
      <div
        className={
          sideMenu
            ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            sideMenu
              ? "fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-4 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex items-center justify-between border-b border-gray-300 pb-5">
            <div>Logo</div>
            <div
              onClick={handleSideMenu}
              className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul>
              <Link href="/">
                <li className="py-4 text-xl">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-xl">Business</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-xl">Services</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-xl">Team</li>
              </Link>
            </ul>
            <div>
              <div className="flex items-center gap-3  my-3 w-full sm:w-[80%]">
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <FaLinkedinIn />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <FaGithub />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <AiOutlineMail />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nevi;
