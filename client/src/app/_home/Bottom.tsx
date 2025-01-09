import React from "react";
import Link from "next/link";
export default function Bottom() {
  return (
    <div className="container mx-auto">
      <div className="mt-20 bg-purple-600 rounded-2xl p-14 w-[90%] mx-auto">
        <div className="text-center space-y-6">
          <div>
            <h1 className="text-xl font-[900] md:text-2xl  text-white ">
              Elevate Your Travel Experience with Flyease Today
            </h1>
          </div>

          <div>
            <p className="text-sm w-[80%] mx-auto font-[500] text-white">
              Flyease is your trusted travel partner, offering advanced features
              to streamline your journey, ensure secure bookings, and provide a
              stress-free travel experience.
            </p>
          </div>

          <div>
            <button className="px-8 py-4 rounded-full bg-purple-900 text-white font-[700]">
              <Link href={"/signup"}>Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
