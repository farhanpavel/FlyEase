"use client";

import FlightSidebar from "@/components/Flightsidebar/page";

export default function Userlanding({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lg:flex lg:flex-wrap p-20 ">
      <div className="lg:w-[25%]">
        <FlightSidebar />
      </div>
      <div className="lg:w-[75%] mt-10 lg:mt-0">{children}</div>
    </div>
  );
}
