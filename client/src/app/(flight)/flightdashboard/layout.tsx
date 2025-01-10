"use client";
import { FlightPanel } from "@/components/Flightpanel/page";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
export default function Landing({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = Cookies.get("id");

    if (!id) {
      router.back();
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <div className="bg-[#F0F4F4] min-h-screen">
      <FlightPanel />
      {children}
    </div>
  );
}
