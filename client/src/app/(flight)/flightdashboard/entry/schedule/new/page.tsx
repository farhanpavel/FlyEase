"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  const [flight, setFlight] = useState({
    flightNumber: "",
    airline: "",
    origin: "",
    destination: "",
    price: "",
    date: "",
    startTime: "",
    endTime: "",
    availableSeats: "",
  });

  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFlight({ ...flight, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(flight);
    setLoading(true);

    try {
      const response = await fetch(`/api/flight/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(flight),
      });

      if (!response.ok) {
        alert("Server Error");
        throw new Error("Failed to submit data");
      } else {
        setLoading(false);
        setTimeout(() => {
          router.back();
        }, 3000);
      }
    } catch (err) {
      console.log("error", err);
      setLoading(false);
    }
  };

  return (
    <Card className="border-[1px] border-gray-300">
      <CardHeader className="space-y-4">
        <CardTitle>Flight Details</CardTitle>
        <CardDescription>Enter Flight Informations</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-6">
              <div className="space-y-2">
                <Label className="text-xs" htmlFor="flight_num">
                  Flight Number
                </Label>
                <Input
                  id="flightNumber"
                  type="text"
                  className="w-1/2"
                  name="flightNumber"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" htmlFor="airline">
                  Airline
                </Label>
                <Input
                  id="airline"
                  type="text"
                  className="w-1/2"
                  name="airline"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" htmlFor="origin">
                  Origin
                </Label>
                <Input
                  id="origin"
                  type="text"
                  className="w-1/2"
                  name="origin"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" htmlFor="destination">
                  Destination
                </Label>
                <Input
                  id="destination"
                  type="text"
                  className="w-1/2"
                  name="destination"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" htmlFor="price">
                  Price
                </Label>
                <Input
                  id="price"
                  type="number"
                  className="w-1/2"
                  name="price"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" htmlFor="date">
                  Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  className="w-1/2"
                  name="date"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" htmlFor="startTime">
                  Start Time
                </Label>
                <Input
                  id="startTime"
                  type="time"
                  className="w-1/2"
                  name="startTime"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" htmlFor="endTime">
                  End Time
                </Label>
                <Input
                  id="endTime"
                  type="time"
                  className="w-1/2"
                  name="endTime"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" htmlFor="seat">
                  Available Seats
                </Label>
                <Input
                  id="availableSeats"
                  type="number"
                  className="w-1/2"
                  name="availableSeats"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <CardFooter className="flex justify-end mt-7">
            {isLoading ? (
              <Button
                type="submit"
                className="bg-[#8b5fbf] text-xs hover:bg-[#8b5fbf] hover:transition-all hover:delay-100"
              >
                Submit
              </Button>
            ) : (
              <Button
                type="submit"
                disabled
                className="bg-[#8b5fbf] hover:bg-[#8b5fbf] hover:transition-all hover:delay-100"
              >
                <Loader2 className="h-4 w-4 animate-spin" />
              </Button>
            )}
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
