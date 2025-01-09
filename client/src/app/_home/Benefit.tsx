import React from "react";
import Image from "next/image";
import {
  AiOutlineBulb,
  AiOutlineSun,
  AiOutlineThunderbolt,
} from "react-icons/ai";

export default function Benefit() {
  return (
    <div className="mt-10 container mx-auto">
      <div className="font-[700] text-center text-xl text-[#8B5FBF] uppercase">
        <p className="text-[#8B5FBF]">Benefits</p>
      </div>
      <div className="font-[900] text-center text-2xl md:text-5xl mt-5  text-[#4a4a4a]">
        <h1>
          Unlock Your Travel Potential with
          <br /> Flyease
        </h1>
      </div>
      <div className=" mt-4 md:mt-8">
        <p className="font-[400]  text-sm md:text-lg w-[80%] text-[#4a4a4a] mx-auto text-center ">
          Flyease is a powerful platform that revolutionizes flight management.
          With features like seamless bookings, real-time updates, schedule
          tracking, and secure payments, Flyease empowers travelers and agents
          to simplify the flying experience.
        </p>
      </div>
      <div className="mt-10">
        <div className="w-full lg:flex md:justify-center md:items-center gap-24">
          <div>
            <Image
              src="/images/Benefit.gif"
              width={500}
              height={400}
              alt="hero"
              className="lg:w-[500px] sm:w-[450px] mx-auto bg-[rgb(247,247,243)] flex justify-center"
            />
          </div>

          <div className="grid grid-cols-[auto,1fr] gap-x-6 items-start  lg:w-1/2">
            {/* Benefit 1 */}
            <div className="h-full grid grid-cols-1 grid-rows-[max(44px),1fr]">
              <div className="h-[44px] w-[44px] rounded-full border-2 border-dotted border-[#8B5FBF] flex justify-center items-center">
                <AiOutlineBulb className="h-6 w-6 text-[#8B5FBF] stroke-[50]" />
              </div>
              <div className="h-full flex justify-center">
                <div className="w-1 h-full border-l-2 border-dotted border-[#8B5FBF]"></div>
              </div>
            </div>
            <div className="mb-12 last:mb-0 mt-1 ">
              <h2 className="mb-4 font-sansSerif text-lg  sm:text-2xl font-semibold text-[#4a4a4a]">
                Simplify Travel Management
              </h2>
              <p className="text-xs sm:text-large font-rubik text-[#4a4a4a] max-w-[80%]">
                Flyease offers tools and resources to make flight management
                seamless. From booking tickets to tracking schedules, Flyease
                ensures a secure and efficient travel experience for everyone.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="h-full grid grid-cols-1 grid-rows-[max(44px),1fr]">
              <div className="h-[44px] w-[44px] rounded-full border-2 border-dotted border-[#8B5FBF] flex justify-center items-center">
                <AiOutlineSun className="h-6 w-6 text-[#8B5FBF] stroke-[50]" />
              </div>
              <div className="h-full flex justify-center">
                <div className="w-1 h-full border-l-2 border-dotted border-[#8B5FBF]"></div>
              </div>
            </div>
            <div className="mb-12 last:mb-0 mt-1">
              <h2 className="mb-4 font-sansSerif text-lg sm:text-2xl font-semibold text-[#4a4a4a]">
                Track Flights Effortlessly
              </h2>
              <p className="text-xs sm:text-large font-rubik text-[#4a4a4a] max-w-[80%]">
                Flyease makes it easy to track flight statuses and schedules.
                With real-time updates, you can monitor your travel plans and
                make adjustments with ease.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="h-full grid grid-cols-1 grid-rows-[max(44px),1fr]">
              <div className="h-[44px] w-[44px] rounded-full border-2 border-dotted border-[#8B5FBF] flex justify-center items-center">
                <AiOutlineThunderbolt className="h-6 w-6 text-[#8B5FBF] stroke-[50]" />
              </div>
              <div className="h-full flex justify-center">
                <div className="w-1 h-full border-l-2 border-dotted border-[#8B5FBF]"></div>
              </div>
            </div>
            <div className="mb-12 last:mb-0">
              <h2 className="mb-4 font-sansSerif text-lg sm:text-2xl font-semibold text-[#4a4a4a]">
                Secure and Streamlined Payments
              </h2>
              <p className="text-xs sm:text-large font-rubik text-[#4a4a4a] max-w-[80%] ">
                Flyease simplifies the payment process with secure gateways.
                Whether booking flights or managing transactions, Flyease
                ensures every step is safe and easy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
