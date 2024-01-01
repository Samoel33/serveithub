"use client";

import React,{useState} from "react";
import Link from "next/link";
import {
  FaAlignRight,
  FaTimes,
} from "react-icons/fa";
import {
 
  FaUser,
  FaMessage,
} from "react-icons/fa6";
import { MdOutlineHome,MdElectricalServices } from "react-icons/md";
import { usePathname } from "next/navigation";
import RequestQuoteBTN from "@/Components/RequestQuoteBTN";

export default function Navigation() {
  const [isClicked,setClicked]=useState(false)
  const links = [
   
    { id: 2, link: "services" },
    { id: 3, link: "products" },
    { id: 4, link: "about" },
  ];
  const toggleburger=()=>{
    if(!isClicked) setClicked(true)
    else  setClicked(false)
   
  }
  

  return (
    <>
      <nav className="w-full bg-blue-800 h-20 flex justify-between sticky top-0 right-0 z-10">
        <div className="h-full flex justify-start p-5">
          <a href="/" className="">
            <img src="LOGOV2.svg" height={200} width={200} alt="LOGO" />
          </a>
        </div>

        <ul className="lg:flex sm:hidden md:hidden xs:hidden w-auto navigation">
          <li
            key="home"
            className="px-4 cursor-pointer capitalize py-6  w-40 text-white hover:text-yellow-300 hover:shadow-md hover:rounde hover:text-2xl"
          >
            <Link href={`/`} onClick={() => setClicked(false)}><MdOutlineHome className="text-3xl text-white"/> Home</Link>
          </li>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6  w-40 text-white hover:text-yellow-300 hover:shadow-md hover:rounde hover:text-2xl"
            >
              <Link href={`/servesithub/${link}`} className="text-md">
                {link}
              </Link>
            </li>
          ))}

          <Link
            href="/servesithub/auth/login"
            className="btn-primary bg-yellow-500 w-44 text-blue-600 text-center  justify-center items-center hidden"
            aria-disabled
          >
            <FaUser className="mr-2 text-3xl text-white" />
            Login
          </Link>
          <span className="h-full flex justify-center items-center">
         <RequestQuoteBTN/>
          </span>
        </ul>
        {isClicked ? (
          <button className="w-20 lg:hidden" onClick={toggleburger}>
            <FaTimes className="text-4xl text-white" />
          </button>
        ) : (
          <button className="w-20 lg:hidden" onClick={toggleburger}>
            <FaAlignRight className="text-4xl text-white" />
          </button>
        )}
      </nav>
      {isClicked && (
        <ul
          className={
            isClicked === true
              ? `lg:hidden  navigation h-screen  w-full transform transition duration-75  flex flex-col gap-10 items-center bg-gray-100 shadow-sm animate-open-nav z-20 fixed  mt-20`
              : `lg:hidden  navigation h-screen  w-full animate-close-nav transform transition duration-75 translate-x-24 gap-10  `
          }
        >
          <li
            key={'Home'}
            className="px-4 cursor-pointer capitalize py-6  w-full  text-center font-bold  text-blue-700 hover:text-white hover:bg-blue-700 hover:shadow-2xl hover:rounde "
          >
            <Link href={`/`} onClick={() => setClicked(false)}><MdOutlineHome className="text-3xl text-white"/> Home</Link>
          </li>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6  w-full  text-center font-bold  text-blue-700 hover:text-white hover:bg-blue-700 hover:shadow-2xl hover:rounde "
            >
              <Link
                href={`/servesithub/${link}`}
                onClick={() => setClicked(false)}
              >
                {link}
              </Link>
            </li>
          ))}
          <Link
            href="/servesithub/auth/login"
            className="btn-primary bg-yellow-500 w-44 text-blue-600 text-center flex justify-center gap-5 items-center h-10"
            onClick={() => setClicked(false)}
          >
            <FaUser className="mr-2 text-3xl text-white" /> Login
          </Link>
          <Link
            href="/servesithub/getAquote"
            className="btn-primary bg-yellow-500 w-44 text-blue-600 text-center flex justify-center gap-5 items-center h-10"
            onClick={() => setClicked(false)}
          >
            <FaMessage className="mr-2 text-2xl text-white" /> Get A Quote
          </Link>
        </ul>
      )}
    </>
  );
}
