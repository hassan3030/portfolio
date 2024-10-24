"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("Form submitted");
  };
  return (
    <div className=" w-full mr-5  rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#000316] ">
      <h2 className="font-bold text-2xl text-white text-center">
        Welcome to My Company Sit
      </h2>
      <p className=" text-xl  mt-2 text-white text-center m-auto">
        Send me an Email to make your sites or take your opinion 
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname  " className="text-white">First name</Label>
            <Input id="firstname" placeholder="First name" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-white">Last name</Label>
            <Input id="lastname" placeholder="last name" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-white">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer>
            <Label htmlFor="topic" className="text-white ">Your Topic</Label>
            <textarea id="topic" placeholder="Your Topic"  className="h-40 mt-2 mb-3 rounded" ></textarea>
          </LabelInputContainer>
       
       
        <button
          className="bg-gradient-to-br relative   group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mt-3"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

       
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
