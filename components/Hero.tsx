import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The name is ${pageInfo?.name}`,
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
        src={urlFor(pageInfo?.heroImage).url()}
        objectFit="cover"
        layout="fixed"
        alt="Profile photo"
        width={150}
        height={150}
        className="relative rounded-full mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="font-jakarta text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className=" font-jakarta xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xlfont-semibold scroll-px-10">
          <span className="mr-3 font-jakarta font-bold">{text}</span>
          <Cursor cursorColor="#F7ABBA" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton font-jakarta">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton font-jakarta">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton font-jakarta">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton font-jakarta">Projects</button>
          </Link>
        </div>
        <div className="mt-2">
          <a href="https://resume.showwcase.com/dennohkim.pdf" target="_blank" rel="noreferrer" >
            <button className="heroButton font-jakarta">Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
