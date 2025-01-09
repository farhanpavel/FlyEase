"use client";
import { FlightPanel } from "@/components/Flightpanel/page";

export default function Landing({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#F0F4F4] min-h-screen">
      <FlightPanel />
      {children}
    </div>
  );
}
