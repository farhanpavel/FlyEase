"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader/page";
import Cookies from "js-cookie";
export default function Signin() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isvalid, setvalid] = useState(false);
  const { email, password } = user;
  const [isLoading, setLoading] = useState(true);
  const [isLogged, setLogged] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const id = Cookies.get("id");
    if (id) {
      setLoading(true);
      router.push("/flightdashboard/entry/schedule");
    } else {
      setLoading(false);
    }
  });
  if (isLoading) {
    return <div></div>;
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((x) => ({
      ...x,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        if (response.status === 401) {
          setvalid(true);
        } else {
          throw new Error("invalid");
        }
        return;
      }
      const result = await response.json();
      setLogged(true);
      setTimeout(() => {
        Cookies.set("id", result.data.accessToken);
        router.push("/flightdashboard/entry/schedule");
      }, 2000);
    } catch (err) {
      console.log("error", err);
    }
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-[80%] sm:w-3/4 m-auto  flex flex-wrap sm:flex-nowrap  shadow-lg shadow-purple-600 justify-around text-center p-16 ">
          <div className="space-y-7 flex flex-wrap flex-col justify-center items-center">
            <div>
              <Image
                src="/images/logo.png"
                width={200}
                height={200}
                alt="logo"
              />
            </div>
            <div className="text-center space-y-1 2xl:text-2xl text-md font- text-xl  font-[700]">
              <h1>Welcome back!</h1>
              <p>Please Login To Your Account</p>
            </div>
            <div className="2xl:w-3/4 w-full">
              <form
                action=""
                className="flex flex-col gap-y-2"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  name="email"
                  className="border border-gray-300 p-2 text-[#4a4a4a] rounded-[5px] bg-[#F0F4F4] focus:border focus:border-[#8B5FBF] focus:ring-[2px] focus:ring-[#8B5FBF] focus:outline-none"
                  placeholder="Email"
                  onChange={handleChange}
                />
                {isvalid && (
                  <div className="text-left text-sm text-red-600 mx-1">
                    <p>Invalid Email</p>
                  </div>
                )}
                <input
                  type="password"
                  name="password"
                  className="border border-gray-300 p-2 text-[#4a4a4a] rounded-[5px] bg-[#F0F4F4] focus:border focus:border-[#8B5FBF] focus:ring-[2px] focus:ring-[#8B5FBF] focus:outline-none"
                  placeholder="Password"
                  onChange={handleChange}
                />
                {isvalid && (
                  <div className="text-left text-sm text-red-600 mx-1">
                    <p>Invalid Password</p>
                  </div>
                )}
                <div className="space-x-3">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#8B5FBF] w-1/2 text-white  rounded-full mt-2"
                  >
                    {isLogged ? <Loader /> : "Login"}
                  </button>
                </div>
              </form>
              <div>
                <h1 className="text-sm  text-center mt-4">
                  Forgot Password?{" "}
                  <Link href={"/signup"} className="font-bold text-[#8B5FBF]">
                    Signup
                  </Link>
                </h1>
              </div>
            </div>
          </div>
          <div className="order-first sm:order-last lg:flex items-center hidden">
            <Image
              src="/images/signin.png"
              width={500}
              height={400}
              alt="logo"
              className="lg:w-[400px] md:w-[300px] 2xl:w-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
