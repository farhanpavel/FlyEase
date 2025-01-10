"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader/page";
import Cookies from "js-cookie";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  FieldErrors,
} from "react-hook-form";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
}

export default function Signup() {
  const [isLogged, setLogged] = useState(false);
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  useEffect(() => {
    const id = Cookies.get("id");
    if (id) {
      router.push("/flightdashboard/entry/schedule");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return <div></div>;
  }

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    const { name, email, password, confirmpassword } = data;

    if (password !== confirmpassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(`/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });
      if (!response.ok) {
        alert("Duplicate Data Found");
        throw new Error("Failed to submit data");
      } else {
        setLogged(true);
        setTimeout(() => {
          router.push("/signin");
        }, 2000);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-[80%] sm:w-3/4 m-auto  flex flex-wrap sm:flex-nowrap shadow-lg shadow-purple-600 justify-around text-center p-16 ">
          <div className="space-y-7 flex flex-wrap flex-col justify-center items-center">
            <div>
              <Image
                src="/images/logo.png"
                width={200}
                height={200}
                alt="logo"
              />
            </div>
            <div className="text-center space-y-1 2xl:text-2xl text-md text-xl font-[700]">
              <h1>Welcome back!</h1>
              <p>Please Signup To Your Account</p>
            </div>
            <div className="2xl:w-3/4 w-full">
              <form
                className="flex flex-col gap-y-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  className="border border-gray-300 p-2 text-[#4a4a4a] rounded-[5px] bg-[#F0F4F4] focus:border focus:border-[#8B5FBF] focus:ring-[2px] focus:ring-[#8B5FBF] focus:outline-none"
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">{errors.name.message}</p>
                )}

                <input
                  className="border border-gray-300 p-2 text-[#4a4a4a] rounded-[5px] bg-[#F0F4F4] focus:border focus:border-[#8B5FBF] focus:ring-[2px] focus:ring-[#8B5FBF] focus:outline-none"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email.message}</p>
                )}

                <input
                  className="border border-gray-300 p-2 text-[#4a4a4a] rounded-[5px] bg-[#F0F4F4] focus:border focus:border-[#8B5FBF] focus:ring-[2px] focus:ring-[#8B5FBF] focus:outline-none"
                  placeholder="Password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-600 text-sm">
                    {errors.password.message}
                  </p>
                )}

                <input
                  className="border border-gray-300 p-2 text-[#4a4a4a] rounded-[5px] bg-[#F0F4F4] focus:border focus:border-[#8B5FBF] focus:ring-[2px] focus:ring-[#8B5FBF] focus:outline-none"
                  placeholder="Confirm Password"
                  type="password"
                  {...register("confirmpassword", {
                    required: "Please confirm your password",
                  })}
                />
                {errors.confirmpassword && (
                  <p className="text-red-600 text-sm">
                    {errors.confirmpassword.message}
                  </p>
                )}

                <div className="space-x-3">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#8B5FBF] w-1/2 text-white rounded-full mt-2"
                  >
                    {isLogged ? <Loader /> : "Register"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="order-first sm:order-last lg:flex items-center hidden">
            <Image
              src="/images/signup.png"
              width={400}
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
