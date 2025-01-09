"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function EntryPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/flightdashboard/entry");
  }, [router]);

  return null;
}
