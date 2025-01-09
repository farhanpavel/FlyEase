"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
interface Flight {
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  date: string;
  startTime: string;
  endTime: string;
  price: number;
  availableSeats: number;
}

export default function Page() {
  const [flight, setFlight] = useState<Flight | null>(null);
  const flightId = Cookies.get("flightid");
  useEffect(() => {
    const fetchFlightData = async () => {
      try {
        const response = await fetch(`/api/flight/${flightId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch flight data");
        }
        const data = await response.json();
        console.log(data.data);
        setFlight(data.data);
      } catch (error) {
        console.error("Error fetching flight data:", error);
      }
    };

    fetchFlightData();
  }, []);

  if (!flight) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-semibold text-[#4a4a4a] mb-6 text-center">
        Flight Details
      </h1>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-gray-700">
            <strong>Flight Number:</strong>{" "}
            <span className="text-[#8B5FBF]">{flight.flightNumber}</span>
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-gray-700">
            <strong>Airline:</strong>{" "}
            <span className="text-[#8B5FBF]">{flight.airline}</span>
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-gray-700">
            <strong>Origin:</strong>{" "}
            <span className="text-[#8B5FBF]">{flight.origin}</span>
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-gray-700">
            <strong>Destination:</strong>{" "}
            <span className="text-[#8B5FBF]">{flight.destination}</span>
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-gray-700">
            <strong>Date:</strong>{" "}
            <span className="text-[#8B5FBF]">{flight.date}</span>
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-gray-700">
            <strong>Start Time:</strong>{" "}
            <span className="text-[#8B5FBF]">{flight.startTime}</span>
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-gray-700">
            <strong>End Time:</strong>{" "}
            <span className="text-[#8B5FBF]">{flight.endTime}</span>
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-gray-700">
            <strong>Price:</strong>{" "}
            <span className="text-[#8B5FBF]">${flight.price}</span>
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-gray-700">
            <strong>Available Seats:</strong>{" "}
            <span className="text-[#8B5FBF]">{flight.availableSeats}</span>
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-[#8B5FBF] text-white py-2 px-6 rounded-lg hover:bg-[#6d4b92] transition-all duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
}
