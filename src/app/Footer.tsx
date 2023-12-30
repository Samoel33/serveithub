import Link from "next/link";
import React from "react";
import {FaTwitter,FaFacebook,FaInstagram,FaLinkedin} from "react-icons/fa";
 export default function Footer() {
  const date =new Date;
  const year = date.getFullYear();
  return (
    <footer className="bg-white mt-auto z-10 p-1 w-full grid  gap-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 sticky bottom-0">
      <div className="flex justify-center items-center  p-4">
        <span className="lg:text-2xl sm:text-md xs:text-xs text-blue-700 ">
          All rights reserved &copy; Serves It Hub {year}
        </span>
      </div>
      <div className="flex justify-center items-center gap-5 ">
        <FaFacebook className="text-2xl text-blue-700 mb-1" />
        <FaInstagram className="text-2xl text-yellow-600 mb-1" />
        <FaTwitter className="text-2xl text-blue-300 mb-1" />
        <FaLinkedin className="text-2xl text-blue-700 mb-1" />
      </div>
    </footer>
  );
}
