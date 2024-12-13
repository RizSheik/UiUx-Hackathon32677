import React from "react";
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

export default function page() {
  return (
    <div className="w-full flex">
      <div className="first hidden sm:flex w-[25%]">
        <Image
          src={"/Images/Nav Bar Side.png"}
          alt="Sidebar"
          width={360}
          height={2016}
        />
      </div>
      {/* Car Detail */}
      <div className="sec w-full sm:w-[75%] bg-[#F6F7F9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className=" w-full flex flex-col md:flex-row gap-5 justify-around  items-center ">
          <div className="first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]">
            <div>
              <Image
                src={"/Images/View.png"}
                alt="Nissan-GTR"
                width={492}
                height={360}
              />
            </div>
            <div className=" flex justify-between items-center gap-2 lg:gap-0">
              <Image
                src={"/Images/View 1.png"}
                alt="Nissan-GTR"
                width={148}
                height={124}
              />
              <Image
                src={"/Images/View 2.png"}
                alt="Nissan-GTR"
                width={148}
                height={124}
              />
              <Image
                src={"/Images/View 3.png"}
                alt="Nissan-GTR"
                width={148}
                height={124}
              />
            </div>
          </div>
          <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-[#FFFFFF] justify-between rounded-xl shadow-md">
            <Image
              src={"/Images/Detail Car (1).png"}
              alt="Detail Car"
              width={492}
              height={508}
              className="w-full h-auto rounded-t-xl object-cover"
            />

            <div className="p-4 flex  items-center gap-4">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-[#1A202C] font-bold text-lg sm:text-xl lg:text-2xl">
                  $80.00 /{" "}
                  <span className="text-[#90A3BF] text-sm lg:text-base">
                    days
                  </span>
                </h1>
              </div>
              <Link href={"/payment"}>
                <button className="bg-[#3563E9] hover:bg-[#264AC6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-[#FFFFFF] rounded-md w-full max-w-[180px] text-center">
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* Reiews Section */}
        <section className=" w-full flex justify-center items-center">
          <Image
            src={"/Images/Reviews.png"}
            alt="Reviews"
            width={1016}
            height={452}
            className=" hidden md:flex"
          />
          <Image
            src={"/Images/Reviews (1).png"}
            alt="Reviews"
            width={327}
            height={384}
            className=" md:hidden"
          />
        </section>
        {/* Recent Car */}
        <section className="popular w-full flex flex-col gap-5">
          <div className="first w-full flex justify-between items-center px-10 xl:px-14">
            <h1 className="text-[#90A3BF] text-lg sm:text-xl">Recent Car</h1>
            <Link href={"/categories"}>
              <h1 className="text-[#3563E9] font-bold hover:underline decoration-[#3563E9]">
                View All
              </h1>
            </Link>
          </div>
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
            <Card className="w-full max-w-[317px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-[#1A202C] w-full flex justify-between items-center">
                  Koenigsegg{" "}
                  <Image
                    src={"/Images/heart.png"}
                    alt="Heart"
                    width={20}
                    height={20}
                  />
                </CardTitle>
                <CardDescription className="text-[#90A3BF]">
                  Sport
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col justify-center items-center gap-4">
                <Image
                  src={"/Images/Koenigsegg.png"}
                  alt="Koenigsegg"
                  width={272}
                  height={84}
                />
                <Image
                  src={"/Images/Spesification.png"}
                  alt="Spesification"
                  width={260}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex justify-between items-center">
                <p className="text-[#1A202C]">
                  $99.00/
                  <span className="text-[#90A3BF] text-sm lg:text-base">
                    day
                  </span>
                </p>
                <button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">
                  Rent Now
                </button>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-[#1A202C] w-full flex justify-between items-center">
                  NissanGT - R{" "}
                  <Image
                    src={"/Images/heart 2.png"}
                    alt="Heart"
                    width={20}
                    height={20}
                  />
                </CardTitle>
                <CardDescription className="text-[#90A3BF]">
                  Sport
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image
                  src={"/Images/nissan-gtr.png"}
                  alt="Nissan-GT R"
                  width={228}
                  height={72}
                />
                <Image
                  src={"/Images/Spesification.png"}
                  alt="Spesification"
                  width={260}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex justify-between items-center">
                <p className="text-[#1A202C]">
                  $99.00/<span className="text-[#90A3BF]">day</span>
                </p>
                <Link href={"/payment"}>
                  <button className="bg-[#3563e9] p-2 text-[#FFFFFF] rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-[#1A202C] w-full flex justify-between items-center">
                  Rolls-Royce{" "}
                  <Image
                    src={"/Images/heart 2.png"}
                    alt="Heart"
                    width={20}
                    height={20}
                  />
                </CardTitle>
                <CardDescription className="text-[#90A3BF]">
                  Sedan
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col justify-center gap-4">
                <Image
                  src={"/Images/rolls-royce.png"}
                  alt="Roll Royes"
                  width={244}
                  height={76}
                />
                <Image
                  src={"/Images/Spesification.png"}
                  alt="Spesification"
                  width={260}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex justify-between items-center">
                <p className="text-[#1A202C]">
                  $99.00/<span className="text-[#90A3BF]">day</span>
                </p>
                <button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">
                  Rent Now
                </button>
              </CardFooter>
            </Card>
          </div>
        </section>
        {/* Recomendation */}
        <section className="popular w-full flex flex-col gap-5">
          <div className="first w-full flex justify-between items-center px-10 xl:px-14">
            <h1 className="text-gray-500 text-lg sm:text-xl">
              Recomendation Car
            </h1>
            <Link href={"/categories"}>
              <h1 className="text-[#3563E9] font-bold hover:underline decoration-[#3563E9]">
                View All
              </h1>
            </Link>
          </div>
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-[#1A202C] w-full flex justify-between items-center">
                  All New Rush{" "}
                  <Image
                    src={"/Images/heart 2.png"}
                    alt="Heart"
                    width={20}
                    height={20}
                  />
                </CardTitle>
                <CardDescription className="text-[#90A3BF]">
                  SUV
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col justify-center items-center gap-4">
                <Image
                  src={"/Images/rush.png"}
                  alt="Rush"
                  width={252}
                  height={112}
                />
                <Image
                  src={"/Images/Spesification.png"}
                  alt="Spesification"
                  width={260}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex justify-between items-center">
                <p className="text-[#1A202C]">
                  $99.00/<span className="text-[#90A3BF]">day</span>
                </p>
                <button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">
                  Rent Now
                </button>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-[#1A202C] w-full flex justify-between items-center">
                  CR - V{" "}
                  <Image
                    src={"/Images/heart.png"}
                    alt="Heart"
                    width={20}
                    height={20}
                  />
                </CardTitle>
                <CardDescription>SUV</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col justify-center items-center gap-4">
                <Image
                  src={"/Images/cr-v.png"}
                  alt="CR-V"
                  width={254}
                  height={102}
                />
                <Image
                  src={"/Images/Spesification.png"}
                  alt="Spesification"
                  width={260}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex justify-between items-center">
                <p className="text-[#1A202C]">
                  $99.00/<span className="text-[#90A3BF]">day</span>
                </p>
                <button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">
                  Rent Now
                </button>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-[#1A202C] w-full flex justify-between items-center">
                  All New Terios{" "}
                  <Image
                    src={"/Images/heart 2.png"}
                    alt="Heart"
                    width={20}
                    height={20}
                  />
                </CardTitle>
                <CardDescription className="text-[#90A3BF]">
                  SUV
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col justify-center items-center gap-4">
                <Image
                  src={"/Images/terios.png"}
                  alt="Terios"
                  width={252}
                  height={112}
                />
                <Image
                  src={"/Images/Spesification.png"}
                  alt="Spesification"
                  width={260}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex justify-between items-center">
                <p className="text-[#1A202C]">
                  $99.00/<span className="text-[#90A3BF]">day</span>
                </p>
                <button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-md">
                  Rent Now
                </button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
