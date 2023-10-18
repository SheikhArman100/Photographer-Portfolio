/* eslint-disable react/no-unescaped-entities */
"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import camera from "@/public/assets/camera.png";
import {
  ArrowBigDownIcon,
  ArrowDown,
  ArrowRight,
  Instagram,
  Play,
  Sparkle,
} from "lucide-react";
import image11 from "@/public/assets/image11.jpg";
import image9 from "@/public/assets/image9.jpg";
import image12 from "@/public/assets/image12.png";
import circleTextImage from "@/public/assets/circleText.svg";
import { motion } from "framer-motion";
import {
  bottomCircle,
  bottomCircleText,
  bottomContainer,
  bottomSubContainer,
  bottomText,
  middleContainer,
  middleContainerItems,
} from "@/libs/framer-motion/heroSection.animation";

const HeroSection = () => {
  return (
    <div className="h-screen w-full  ">
      <div className="h-[75%] w-full py-4  px-[3rem] lg:px-[6rem] ">
        <Navbar />
        {/* middle part */}
        <motion.div variants={middleContainer} className="w-full h-full ">
          <motion.div variants={middleContainerItems} className="w-full h-full grid grid-cols-2">
          {/* left side */}
            <div className="relative  ">
              <div className=" w-full h-full flex flex-col items-start justify-center gap-y-[3rem] lg:px-8 xl:px-14  ">
                <h1 className="relative text-6xl font-semibold z-[1]">
                  Charlotte <br />
                  Evelyn
                </h1>
                <div>
                  <p className="font2 relative text-base font-medium z-[1]">
                    Pro <br /> Photographer
                  </p>
                  <div className="w-6 h-0.5 bg-customOrange" />
                </div>
              </div>
              <div className="absolute right-0 bottom-8  md:w-[18rem] lg:w-[22rem] h-[25rem]  rounded-t-full">
                <Image
                  src={image12}
                  fill
                  placeholder="blur"
                  alt="hero image"
                  className="object-cover w-full h-full rounded-t-full"
                />
                <div className="absolute -bottom-6 right-[50%] translate-x-[50%] w-12 h-12 rounded-full  bg-customWhite flex items-center justify-center">
                  <Sparkle className="fill-customBlack w-full h-full rotate-[25deg]" />
                </div>
                <div className=" md:h-[6rem] lg:h-[7.5rem] aspect-square bg-customYellow rounded-full absolute -right-8 flex items-center justify-center">
                  <div className="h-8 w-8">
                    <Play className="fill-customBlack stroke-none h-full w-full" />
                  </div>
                  <div className="absolute ">
                    <Image src={circleTextImage} alt="circle text" />
                  </div>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="w-full flex flex-col items-center justify-center ml-10">
              <div className="  flex ">
                <span className="text-customOrange md:text-6xl lg:text-7xl font-bold mr-4">
                  “
                </span>
                <p className="md:text-2xl lg:text-3xl font-bold mt-[1rem]">
                  My camera is a <br />
                  <span className="text-customOrange">sketchbook</span>
                </p>
              </div>
              <div className=" mt-4">
                <div className="flex md:gap-x-4 lg:gap-x-12">
                  <div>
                    <p className="font2 font-bold md:text-xs lg:text-sm  uppercase">
                      Stay tuned for news <br /> and new work on <br />
                      Instagram
                    </p>
                    <span className="flex items-center justify-start gap-x-3 mt-3">
                      <Instagram />
                      <div className="h-0.5 w-24 bg-customWhite" />
                    </span>
                  </div>
                  <div className="relative md:w-28 lg:w-32 h-40">
                    <Image
                      src={image9}
                      fill
                      placeholder="blur"
                      alt="right pic"
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
                <button className="bg-customOrange w-full h-20 uppercase md:text-lg lg:text-xl font-semibold">
                  Contact <br /> with me
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* bottom part */}
      <motion.div
        variants={bottomContainer}
        className="w-full h-[25%] bg-customBlack px-[3rem] lg:px-[6rem] origin-left"
      >
        <motion.div
          variants={bottomSubContainer}
          className=" relative h-full w-full grid grid-cols-3 content-center"
        >
          <div className="absolute -top-12 -left-8 md:h-32 md:w-32 lg:h-36 lg:w-36 rotate-[35deg] ">
            <Image
              src={camera}
              fill
              alt="camera"
              className="object-cover w-full h-full"
            />
          </div>
          <motion.p className="text-customYellow md:text-xl lg:text-2xl font-bold flex items-center uppercase max-w-xs mt-2 overflow-hidden ">
            --Let's take your photography to the next level
          </motion.p>
          <div className="  flex-grow flex items-center justify-center ">
            <motion.div
              variants={bottomCircle}
              className="md:h-28 lg:h-32 aspect-square border border-customWhite rounded-full "
            >
              <motion.div
                variants={bottomCircleText}
                className="w-full h-full flex flex-col items-center justify-center gap-y-1 p-4"
              >
                <p className="text-sm font2 font-semibold uppercase text-center">
                  Scroll Down
                </p>
                <ArrowDown size={32} className="stroke-customOrange" />
              </motion.div>
            </motion.div>
          </div>
          <div className="relative  flex-grow">
            <div className="absolute -left-4 bottom-0 md:w-32 lg:w-36 md:aspect-[1/1.25] lg:aspect-[1/1.15]">
              <Image
                src={image11}
                fill
                placeholder="blur"
                className="w-full h-full object-cover"
                alt="image 2"
              />
            </div>
            <div className="md:pl-[7.5rem] lg:pl-[8.5rem] flex flex-col  pt-3">
              <p className="font2 md:text-sm lg:text-base font-semibold uppercase ">
                Jenny Kim was a british <br /> Artist and Designer
              </p>
              <div className="flex items-center gap-x-2">
                <span className="text-customYellow text-sm  whitespace-nowrap">All Project</span>
                <ArrowRight className="stroke-customYellow" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
