"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-20">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-6xl font-extrabold">
            <span
              className="text-transparent bg-clip-text
             bg-gradient-to-r from-[#6E3DA2] to-[#CD7BCF]">
              Hello, I am{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Hamza",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am an experienced full stack engineer with a robust blend of
            creative and problem-solving abilities.
          </p>
          <div>
            <a href="mailto:s.hamza.zar@gmail.com">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white bg-gradient-to-br from-[#6E3DA2] via-purple-500 to-[#CD7BCF] hover:bg-slate-200 text-white">
                Hire Me
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1NJRwktNmNZV_LcSNp8zmWYzhjFxFXf3t/view?usp=sharing"
              target="_blank"
              rel="noreferrer">
              <button className="px-1 py-1  w-full sm:w-fit rounded-full bg-gradient-to-br from-[#6E3DA2] via-purple-500 to-[#CD7BCF] hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[350px] h-[350px] relative">
            <Image
              src="/images/hero-section.png"
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
