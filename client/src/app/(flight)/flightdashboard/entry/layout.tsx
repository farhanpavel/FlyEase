"use client";

import FlightSidebar from "@/components/Flightsidebar/page";

export default function Userlanding({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-wrap p-20 ">
      <div className="w-[25%]">
        <FlightSidebar />
      </div>
      <div className="w-[70%] ">{children}</div>
    </div>
  );
}
