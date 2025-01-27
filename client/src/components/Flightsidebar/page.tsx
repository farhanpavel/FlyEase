import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function FlightSidebar() {
  const pathname = usePathname();

  return (
    <div>
      <main>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 grid-cols-[180px_1fr] lg:grid-cols-[200px_1fr]">
          <nav className="grid gap-4  text-muted-foreground text-xs">
            <Link
              href="/flightdashboard/entry/schedule"
              className={`text-primary p-2 rounded-[5px] hover:transition-all hover:delay-200 ${
                pathname &&
                pathname.startsWith("/flightdashboard/entry/schedule")
                  ? "bg-purple-200 text-[#4a4a4a] font-medium"
                  : "hover:bg-gray-200"
              }`}
            >
              Schedule
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
}
