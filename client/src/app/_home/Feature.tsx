import React from "react";
import { AiFillProduct, AiOutlineAlert, AiOutlineApi } from "react-icons/ai";

export default function Feature() {
  return (
    <div className="mt-10 container mx-auto" id="feature">
      <div className="font-[700] text-center text-xl text-[#8B5FBF] uppercase">
        <p>Features</p>
      </div>
      <div className="font-[900] text-center text-2xl md:text-5xl mt-5 w-[70%] mx-auto text-[#4a4a4a]">
        <h1>Enhance Your Travel Experience with Flyease Features</h1>
      </div>
      <div className="mt-4 md:mt-8">
        <p className="font-[400] text-sm md:text-lg w-[75%] mx-auto text-center text-[#4a4a4a]">
          Flyease provides an all-in-one solution for travelers. With seamless
          booking, real-time flight tracking, and secure payment options,
          Flyease ensures your travel journey is simple, efficient, and
          stress-free.
        </p>
      </div>
      <div className="lg:flex lg:flex-wrap space-y-4 lg:space-y-0 justify-evenly mt-28">
        {/* Feature 1 */}
        <div className="lg:w-1/4 flex flex-col text-center gap-y-5">
          <div>
            <AiFillProduct className="text-5xl mx-auto p-3 stroke-[30] bg-[#E6DDED] text-[#8B5FBF] rounded-full" />
          </div>
          <div className="text-lg sm:text-2xl font-semibold text-[#4a4a4a] font-sansSerif">
            <h1>Seamless Flight Booking</h1>
          </div>
          <div>
            <p className="text-sm text-center sm:text-sm font-rubik text-[#4a4a4a] max-w-[80%] mx-auto">
              Book flights effortlessly with Flyease&apos;s intuitive platform.
              Enjoy personalized flight options and smooth booking in just a few
              clicks.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="lg:w-1/4 flex flex-col text-center gap-y-5">
          <div>
            <AiOutlineAlert className="text-5xl mx-auto p-3 stroke-[30] bg-[#E6DDED] text-[#8B5FBF] rounded-full" />
          </div>
          <div className="text-lg sm:text-2xl font-semibold text-[#4a4a4a] font-sansSerif">
            <h1>Real-Time Flight Tracking</h1>
          </div>
          <div>
            <p className="text-sm sm:text-sm  text-center font-rubik text-[#4a4a4a] max-w-[80%] mx-auto">
              Stay updated with real-time flight statuses and schedules. Flyease
              makes it easy to track your travel plans and stay informed.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="lg:w-1/4 flex flex-col text-center gap-y-5">
          <div>
            <AiOutlineApi className="text-5xl mx-auto p-3 stroke-[30] bg-[#E6DDED] text-[#8B5FBF] rounded-full" />
          </div>
          <div className="text-lg sm:text-2xl font-semibold text-[#4a4a4a] font-sansSerif">
            <h1>Secure Payment Options</h1>
          </div>
          <div>
            <p className="text-sm sm:text-sm text-center font-rubik text-[#4a4a4a] max-w-[80%] mx-auto">
              Make transactions with confidence. Flyease offers secure payment
              gateways to ensure safe and hassle-free travel bookings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
