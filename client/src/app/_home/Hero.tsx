import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div className="lg:flex lg:flex-wrap justify-center container mx-auto">
        <div className="order-last ">
          <Image
            src={"/images/Hero.gif"}
            width={500}
            height={400}
            alt="hero"
            className="mx-auto  w-[400px] lg:w-[480px]"
          />
        </div>
        <div className="lg:w-1/2 mt-6 lg:flex  lg:place-content-center  lg:flex-col lg:gap-5 space-y-5 lg:space-y-0">
          <div className="text-md text-center lg:text-left text-3xl sm:text-4xl lg:text-5xl font-[900]  lg:leading-[3.4rem]  text-[#4a4a4a]">
            <h1>Simplify</h1>
            <h1>Travel Life With Ease</h1>
          </div>
          <div className="lg:w-[80%] ">
            <p className=" text-center text-sm sm:text-lg lg:text-[1rem] lg:text-left lg:leading-[1.7rem] text-[#4a4a4a] font-[400]">
              Welcome to Flyease, your all-in-one flight
              <br /> management tool. Book flights, track schedules,
              <br /> and make payments effortlessly. Search, filter, and
              <br /> secure tickets in just a few clicks. Start your
              <br />
              seamless travel experience today!
              <br />
            </p>
          </div>
          <div className="space-x-3 text-xs  sm:text-sm text-center lg:text-left  lg:p-0">
            <button className="px-4   lg:px-6  py-2 rounded-full bg-[#8B5FBF] text-white">
              Learn More
            </button>
            <button>
              <Link
                href={"/signup"}
                className="px-6 py-2 border-[1px] rounded-full border-[#8B5FBF] text-[#8B5FBF]"
              >
                Sign up
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
