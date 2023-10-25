"use client";
import {
  buttonContainer,
  buttonItems,
  circleScale,
  circleText,
  containerOpacityAnimation,
  containerScaleAnimation,
  marqueeContainer,
  marqueeText,
  sectionAnimation,
  textContainer,
  textOpacity,
} from "@/libs/framer-motion/experimental.animation";
import { motion, useScroll } from "framer-motion";
import { ArrowRight, Sparkle } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import image2 from "@/public/assets/image2.jpg";

const ExperimentalProject = () => {
  return (
    <section
      variants={sectionAnimation}
      initial="hidden"
      whileInView="view"
      viewport={{
            once:true
          }}
      className="h-screen w-full bg-customOffWhite text-customBlack flex flex-col "
    >
      <div
        
        className="w-full h-16 flex items-center justify-between origin-right "
      >
        <div className="h-full flex-[1_1_60%] flex items-center justify-center  border-r border-b border-customBlack gap-x-1">
          <p className="text-xl uppercase font-[700] font2">Personal</p>
          <span className="mb-4 text-sm font-bold font2">58</span>
        </div>
        <div className="h-full flex-[1_1_100%]   flex items-center justify-center border-r border-b border-customBlack gap-x-1">
          <p className="text-xl uppercase font-[700] font2">
            Experimental photography
          </p>
          <span className="mb-4 text-sm font-bold font2">26</span>
        </div>
        <div className="h-full flex-[1_1_60%]   flex items-center justify-center  border-b border-customBlack gap-x-1">
          <p className="text-xl uppercase font-[700] font2">Commercial</p>
          <span className="mb-4 text-sm font-bold font2">74</span>
        </div>
      </div>
      <motion.div
        variants={containerScaleAnimation}
        initial="hidden"
        whileInView="view"
        viewport={{
            once:true
          }}
        className="h-16 overflow-hidden origin-left  border-b border-customBlack "
      >
        <motion.div variants={marqueeContainer} className="w-fit h-full">
          <motion.div
            variants={marqueeText}
            className="w-full h-full flex items-center capitalize"
          >
            <Sparkle size={36} className="stroke-none fill-customOrange" />
            <p className="text-3xl  italic whitespace-nowrap">
              Beyond Your Limit.
            </p>
            <Sparkle size={36} className="stroke-none fill-customOrange ml-4" />
            <p className="text-3xl italic whitespace-nowrap">born to break.</p>
            <Sparkle
              size={36}
              className="stroke-none fill-customOrange ml-4 "
            />
            <p className="text-3xl ] italic whitespace-nowrap">
              Non conventional.
            </p>
            <Sparkle
              size={36}
              className="stroke-none fill-customOrange ml-4 "
            />
            <p className="text-3xl  italic whitespace-nowrap">
              Photography Approach.
            </p>
            <Sparkle size={36} className="stroke-none fill-customOrange" />
            <p className="text-3xl  italic whitespace-nowrap">
              Beyond Your Limit.
            </p>
            <Sparkle size={36} className="stroke-none fill-customOrange ml-4" />
            <p className="text-3xl italic whitespace-nowrap">born to break.</p>
            <Sparkle
              size={36}
              className="stroke-none fill-customOrange ml-4 "
            />
            <p className="text-3xl ] italic whitespace-nowrap">
              Non conventional.
            </p>
            <Sparkle
              size={36}
              className="stroke-none fill-customOrange ml-4 "
            />
            <p className="text-3xl  italic whitespace-nowrap">
              Photography Approach.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={containerOpacityAnimation}
        initial="hidden"
        whileInView="view"
        viewport={{
            once:true
          }}
        className="relative w-full h-full grid grid-cols-2"
      >
        <div className="flex flex-col justify-center  pl-[4rem] lg:pl-[7rem] ">
          <span
            variants={textContainer}
            className="text-customOrange flex items-center gap-x-2 text-sm font-bold uppercase font2 relative "
          >
            <motion.div variants={textContainer}  className="absolute w-full h-full bg-customOffWhite origin-right"/>
              <div className="h-1 w-1 bg-customOrange rounded-full" />
              Experimental Project
            
          </span>
          <h3 className="text-5xl font-bold leading-[3.5rem]">
            I bring joy and creativity with every photo
          </h3>
          <p className="font2 text-sm font-semibold max-w-[50%] mt-4">
            Young woman and one black man, in vibrant dress in slow motion in a
            rose-strewn field. Her hair blowing softly in the breeze, with a
            topper borrowed from a Bernie Sanders.
          </p>
          <div className="mt-8 flex items-center justify-between">
            <motion.button variants={buttonContainer} className=" py-3 px-6 bg-customYellow  text-sm font2 font-bold uppercase origin-bottom">
             <motion.div variants={buttonItems} className="flex items-center gap-x-2"> View Project <ArrowRight /></motion.div>
            </motion.button>
            <div className="flex items-center gap-x-2">
              <span className="font2 text-sm font-bold">21.10.2023</span>
              <div className="h-6 w-0.5 bg-customOrange" />
              <span className="text-sm font-bold uppercase font2">
                Charlotte
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-center">
          <div className="relative w-[25rem] md:h-[90%] xl:h-[85%] rounded-t-full">
            <Image
              src={image2}
              fill
              placeholder="blur"
              alt="experimental image"
              className="w-full h-full object-cover rounded-t-full"
            />
            <motion.div
              variants={circleScale}
              className="absolute top-[40%] -left-16 h-32 aspect-square bg-customWhite rounded-full flex items-center justify-center p-4 shadow-lg"
            >
              <motion.p
                variants={circleText}
                className="text-center font2 text-sm font-semibold uppercase"
              >
                Drag to view more
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperimentalProject;
