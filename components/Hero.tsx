import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The name is Chizaa",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        objectFit="cover"
        layout="fixed"
        alt="Profile photo"
        width={150}
        height={150}
        className="relative rounded-full mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
      <h1 className="text-5xl lg:text-6xlfont-semibold scroll-px-10">
        <span className="mr-3 ">{text}</span>
        <Cursor cursorColor="#F7ABBA" />
      </h1>
      <div className="pt-5">
        <Link  href="#about">
        <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
        <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
        <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
        <button className="heroButton">Projects</button>
        </Link>
      
      </div>

      </div>
      
    </div>
  );
};

export default Hero;
