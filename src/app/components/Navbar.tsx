import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-[#FFFFFF] h-auto flex flex-col justify-between items-center md:flex-row p-4 md:p-8 border-b-2 border-b-[#C3D4E966]">
      <div className="first flex flex-col md:flex-row items-center gap-4 md:gap-16">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-[#3563E9] text-4xl font-bold">MORENT</span>
        </Link>
        <div className="input relative w-full md:w-auto">
          <Image
            src={"/Images/search-normal.png"}
            alt="Search"
            width={24}
            height={24}
            className="absolute top-1/2 left-3 transform -translate-y-1/2"
          />
          <input
            type="text"
            title="search"
            placeholder="Say something here"
            className="border-2 border-[#C3D4E966] w-full md:w-[492px] h-[44px] rounded-full p-2 pl-10 pr-12"
          />
          <Image
            src={"/Images/filter.png"}
            alt="Filter"
            width={24}
            height={24}
            className="absolute top-1/2 right-3 transform -translate-y-1/2"
          />
        </div>
      </div>
      <div className="icons mt-4 md:mt-0">
        <Image
          src={"/Images/Profil & Notification.png"}
          alt="Pro.Not."
          width={236}
          height={44}
        />
      </div>
    </div>
  );
}
