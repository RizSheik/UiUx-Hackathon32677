import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="payment w-full bg-[#F6F7F9] p-4 sm:p-6  flex flex-wrap gap-6 justify-center font-[family-name:var(--font-geist-sans)]">
      {/* Rental Summary */}
      <div className="details w-full flex-shrink-0 lg:w-[40%] order-1 lg:order-2 flex justify-center">
        <Image
          src={"/Images/Rental Summary.png"}
          alt="Rental Summary"
          width={492}
          height={560}
          className=" lg:w-[490px] h-[568px]"
        />
      </div>
      {/* Builling Info */}
      <div className="cards w-full md:w-[70%] grid grid-cols-1 gap-6 order-2 lg:order-1">
        <Card className="w-full lg:w-[852px] h-auto lg:h-[336px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Billing Info</CardTitle>
            <CardDescription className="w-full flex justify-between items-center">
              <h1 className="text-[#90A3BF]">Please enter your billing info</h1>
              <h1 className="text-[#90A3BF]">Step 1 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="w-full flex flex-wrap gap-4">
              <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="name">
                  Name
                </label>
                <Input
                  placeholder="Your Name"
                  className="bg-[#F6F7F9] px-8 h-[56px] rounded-xl"
                />
              </div>
              <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="num">
                  Phone Number
                </label>
                <Input
                  placeholder="Your Phone Number"
                  className="bg-[#F6F7F9] px-8 h-[56px] rounded-xl"
                />
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">
                  Address
                </label>
                <Input
                  placeholder="Your Address"
                  className="bg-[#F6F7F9] px-8 h-[56px] rounded-xl"
                />
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">
                  Town/City
                </label>
                <Input
                  placeholder="Your City"
                  className="bg-[#F6F7F9] px-8 h-[56px] rounded-xl"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Rental Info */}
        <Card className="w-full lg:w-[852px] h-auto lg:h-[664px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Rental Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1 className="text-[#90A3BF]">Please select your rental date</h1>
              <h1 className="text-[#90A3BF]">Step 2 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="first">
              <Image
                src={"/Images/Pick - Up (1).png"}
                alt="Pick Up"
                width={92}
                height={20}
              />
            </div>
            <div className="sec w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">
                  Locations
                </label>
                <select
                  title="city"
                  className="bg-[#F6F7F9] px-8 h-[56px] rounded-xl"
                >
                  <option value="">Select Your City</option>
                </select>
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">
                  Date
                </label>
                <select
                  title="cty"
                  className="bg-[#F6F7F9] px-8 h-[56px] rounded-xl"
                >
                  <option value="">Select Your Date</option>
                </select>
              </div>
            </div>
            <div className="third w-full">
              <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
                <label className="font-bold" htmlFor="city">
                  Time
                </label>
                <select
                  title="cit"
                  className="bg-[#F6F7F9] px-8 h-[56px] rounded-xl"
                >
                  <option value="">Select Your Time</option>
                </select>
              </div>
            </div>
            <div className="fourth">
              <Image
                src={"/Images/Drop - Off (1).png"}
                alt="Drop Off"
                width={104}
                height={20}
              />
            </div>
            <div className="sec w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">
                  Locations
                </label>
                <select
                  title="city"
                  className="bg-[#F6F7F9] px-8 h-[56px] rounded-xl"
                >
                  <option value="">Select Your City</option>
                </select>
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">
                  Date
                </label>
                <select
                  title="cty"
                  className="bg-[#F6F7F9] px-8 h-[56px] rounded-xl"
                >
                  <option value="">Select Your Date</option>
                </select>
              </div>
            </div>
            <div className="third w-full">
              <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
                <label className="font-bold" htmlFor="city">
                  Time
                </label>
                <select
                  title="cit"
                  className="bg-[#F6F7F9] px-8 h-[56px] rounded-xl"
                >
                  <option value="">Select Your Time</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full lg:w-[852px] h-auto lg:h-[596px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1 className="text-[#90A3BF]">
                Please enter your payment method
              </h1>
              <h1 className="text-[#90A3BF]">Step 3 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <Image
              src={"/Images/Credit Card.png"}
              alt="Credit Card"
              width={804}
              height={308}
            />
            <Image
              src={"/Images/PayPal.png"}
              alt="PayPal"
              width={804}
              height={56}
            />
            <Image
              src={"/Images/Bitcoin.png"}
              alt="Bitcoin"
              width={804}
              height={56}
            />
          </CardContent>
        </Card>

        <Card className="w-full lg:w-[852px] h-auto lg:h-[484px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Confirmation</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>
                We are getting to the end. Just a few clicks and your rental is
                ready
              </h1>
              <h1>Step 4 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <Image
              src={"/Images/Confirmation.png"}
              alt="Confirmation"
              width={804}
              height={136}
            />
            <Link href={"/admin"}>
              <button className="bg-[#3563E9] p-2 text-[#FFFFFF] rounded-xl w-[140px] h-[56px]">
                Rent Now
              </button>
            </Link>

            <Image
              src={"/Images/Safe Data.png"}
              alt="Safe Data"
              width={548}
              height={100}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
