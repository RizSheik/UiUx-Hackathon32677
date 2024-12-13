import React from "react";

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-6 px-5 w-full bg-white py-6">
      <div className="first w-full flex flex-wrap items-start justify-between gap-6">
        {/* 1st Intro Section */}
        <div className="intro flex flex-col gap-2 w-full lg:w-auto">
          <h1 className="text-[#3563E9] text-2xl lg:text-3xl font-bold text-center lg:text-left">
            MORENT
          </h1>
          <p className="text-[#13131399] text-center lg:text-left w-[300px]">
            Our vision is to provide convenience <br />
            and help increase your sales business.
          </p>
        </div>
        {/* 2nd About - Community - Socials Sections */}
        <div className="lists flex flex-wrap gap-6 justify-center lg:justify-between w-full lg:w-auto lg:mr-10">
          <div className="about">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-[#1A202C] text-lg">
                <h1>About</h1>
              </li>
              <li className="text-[#13131399]">How it works</li>
              <li className="text-[#13131399]">Featured</li>
              <li className="text-[#13131399]">Partnership</li>
              <li className="text-[#13131399]">Business Relation</li>
            </ul>
          </div>
          <div className="community">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-[#1A202C]  text-lg">
                <h1>Community</h1>
              </li>
              <li className="text-[#13131399]">Events</li>
              <li className="text-[#13131399]">Blog</li>
              <li className="text-[#13131399]">Podcast</li>
              <li className="text-[#13131399]">Invite a friend</li>
            </ul>
          </div>
          <div className="socials">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-[#1A202C] text-lg">
                <h1>Socials</h1>
              </li>
              <li className="text-[#13131399]">Discord</li>
              <li className="text-[#13131399]">Instagram</li>
              <li className="text-[#13131399]">Facebook</li>
              <li className="text-[#13131399]">Twitter</li>
            </ul>
          </div>
        </div>
      </div>
      {/* 3rd last End-Line */}
      <div className="line border-t w-full border-[#13131329]"></div>

      <div className="last w-full flex flex-wrap items-center justify-between gap-4">
        <div className="first text-center lg:text-left w-full lg:w-auto">
          <h1 className="font-bold text-[#1A202C] text-sm">
            ©2022 MORENT. All rights reserved
          </h1>
        </div>
        <div className="second flex flex-wrap justify-center lg:justify-end items-center gap-4 w-full lg:w-auto">
          <h1 className="font-bold text-[#1A202C] text-sm">Privacy & Policy</h1>
          <h1 className="font-bold text-[#1A202C] text-sm">
            Terms & Conditions
          </h1>
        </div>
      </div>
    </div>
  );
}
