import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:block lg:w-[20%] bg-white shadow-md p-4">
        <Image
          src={"/Images/Nav Bar.png"}
          alt="Nav Bar"
          width={286}
          height={900}
          className="w-full h-auto"
        />
      </div>
      {/* Details Rental */}
      <div className="flex flex-col lg:flex-row lg:w-[80%] w-full gap-6 p-4 bg-gray-100">
        <section className="lg:w-[60%] w-full bg-white p-4 rounded-md shadow-md">
          <Image
            src={"/Images/Details Rental.png"}
            alt="Details Rental"
            width={534}
            height={836}
            className="w-full h-auto"
          />
        </section>
        {/* Top 5 Car Rental */}
        <div className="lg:w-[40%] w-full flex flex-col gap-6">
          <section className="bg-white p-4 rounded-md shadow-md">
            <Image
              src={"/Images/Top 5.png"}
              alt="Top 5 Car Rental"
              width={524}
              height={324}
              className="w-full h-auto"
            />
          </section>

          {/* Recent Transactions */}
          <section className="bg-white p-4 rounded-md shadow-md">
            <Image
              src={"/Images/Recent Transaction.png"}
              alt="Recent Transaction"
              width={524}
              height={480}
              className="w-full h-auto"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
