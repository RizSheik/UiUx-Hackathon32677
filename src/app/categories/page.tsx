"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="w-full flex">
      {/* sidebar */}
      <div className="first hidden sm:flex w-[20%]">
        <Image
          src={"/Images/Nav Bar Side.png"}
          alt=""
          width={360}
          height={1600}
        />
      </div>
      {/* Pick & Drop */}
      <div className="sec w-full sm:w-[80%] bg-[#F6F7F9] p-4 sm:p-6 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className="first w-full flex flex-wrap justify-center items-center sm:flex-nowrap gap-0">
          <Image
            src={"/Images/Pick - Up.png"}
            alt=""
            width={486}
            height={132}
            className="max-w-ful"
          />
          <Image
            src={"/Images/Switch.png"}
            alt=""
            width={63}
            height={63}
            className="sm:w-[100px] max-w-full gap-0"
          />
          <Image
            src={"/Images/Drop - Off.png"}
            alt=""
            width={486}
            height={132}
            className=" max-w-ful"
          />
        </section>
        {/* Cars Cards Section */}
        <section className="popular w-full flex flex-col gap-4">
          <div className="sec grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Koenigsegg",
                image: "/Images/Koenigsegg.png",
                desc: "Sport",
              },
              {
                title: "Nissan GT - R",
                image: "/Images/nissan-gtr.png",
                desc: "Sport",
              },
              {
                title: "Rolls-Royce",
                image: "/Images/rolls-royce.png",
                desc: "Luxury",
              },
              { title: "All New Rush", image: "/Images/rush.png", desc: "SUV" },
              { title: "CR - V", image: "/Images/cr-v.png", desc: "SUV" },
              {
                title: "ALLNEW TERIOS",
                image: "/Images/terios.png",
                desc: "SUV",
              },
              {
                title: "MGZX Exclusive",
                image: "/Images/mg-zx.png",
                desc: "Hatchback",
              },
              { title: "NEW MGZS", image: "/Images/mg-zs.png", desc: "SUV" },
              {
                title: "MGZX Exclusive",
                image: "/Images/mg-zx.png",
                desc: "Hatchback",
              },
            ].map((car, index) => (
              <Card
                key={index}
                className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between"
              >
                <CardHeader>
                  <CardTitle className="w-full flex justify-between items-center">
                    {car.title}{" "}
                    <Image
                      src={"/Images/heart.png"}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </CardTitle>
                  <CardDescription>{car.desc}</CardDescription>
                </CardHeader>
                <CardContent className="w-full flex md:flex-col justify-center items-center gap-4">
                  <Image src={car.image} alt="" width={308} height={112} />
                  <Image
                    src={"/Images/Spesification.png"}
                    alt=""
                    width={256}
                    height={24}
                    className="hidden md:flex"
                  />
                  <Image
                    src={"/Images/Spesification (1).png"}
                    alt=""
                    width={256}
                    height={24}
                    className="md:hidden"
                  />
                </CardContent>
                <CardFooter className="w-full flex justify-between items-center">
                  <p>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <Link href={"/details"}>
                    <button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">
                      Rent Now
                    </button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          {/* Show More Car Section */}
          {showMore && (
            <div className="sec grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Koenigsegg",
                  image: "/Images/Koenigsegg.png",
                  desc: "Sport",
                },
                {
                  title: "Nissan GT - R",
                  image: "/Images/nissan-gtr.png",
                  desc: "Sport",
                },
                {
                  title: "Rolls-Royce",
                  image: "/Images/rolls-royce.png",
                  desc: "Luxury",
                },
                {
                  title: "All New Rush",
                  image: "/Images/rush.png",
                  desc: "SUV",
                },
                { title: "CR - V", image: "/Images/cr-v.png", desc: "SUV" },
                {
                  title: "ALLNEW TERIOS",
                  image: "/Images/terios.png",
                  desc: "SUV",
                },
                {
                  title: "MGZX Exclusive",
                  image: "/Images/mg-zx.png",
                  desc: "Hatchback",
                },
                { title: "NEW MGZS", image: "/Images/mg-zs.png", desc: "SUV" },
                {
                  title: "MGZX Exclusive",
                  image: "/Images/mg-zx.png",
                  desc: "Hatchback",
                },
              ].map((car, index) => (
                <Card
                  key={index}
                  className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between"
                >
                  <CardHeader>
                    <CardTitle className="w-full flex justify-between items-center">
                      {car.title}{" "}
                      <Image
                        src={"/Images/heart.png"}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </CardTitle>
                    <CardDescription>{car.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="w-full flex md:flex-col justify-center items-center gap-4">
                    <Image src={car.image} alt="" width={308} height={112} />
                    <Image
                      src={"/Images/Spesification.png"}
                      alt=""
                      width={269}
                      height={24}
                      className="hidden md:flex"
                    />
                    <Image
                      src={"/Images/Spesification (1).png"}
                      alt=""
                      width={70}
                      height={74}
                      className="md:hidden"
                    />
                  </CardContent>
                  <CardFooter className="w-full flex justify-between items-center">
                    <p>
                      $99.00/<span className="text-gray-500">day</span>
                    </p>
                    <button className="bg-[#3563E9 p-2 text-[#FFFFFF] rounded-md">
                      Rent Now
                    </button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>
        <section className="button w-full text-center">
          <button
            onClick={toggleShowMore}
            className="bg-[#3563E9] px-4 py-2 text-[#FFFFFF] rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}
