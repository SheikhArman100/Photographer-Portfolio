"use client";
import Image from "next/image";
import React from "react";
import image3 from "@/public/assets/image3.jpg";
import image6 from "@/public/assets/image6.jpg";
import image8 from "@/public/assets/image8.jpg";
import image10 from "@/public/assets/image10.jpg";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  articleAnimation,
  fadeBottom,
  fadeLeft,
  fadeRight,
  fadeTop,
  textContainer,
  textScaleContainer,
} from "@/libs/framer-motion/aesthetic.animation";
import RevealTitle from "@/components/RevealTitle";
import RevealParagraph from "@/components/RevealParagraph";

const AestheticSection = () => {
  return (
    <motion.article
      variants={articleAnimation}
      initial="hidden"
      whileInView="view"
      viewport={{
        margin: "-30%",
        once:true
      }}
      className="h-screen w-full bg-customGreen text-customWhite relative overflow-hidden"
    >
      <motion.div
        variants={fadeLeft}
        className="absolute top-[15%] left-0 h-[70%] w-[22rem] origin-left"
      >
        <Image
          src={image3}
          fill
          sizes="352px"
          placeholder="blur"
          className="h-full w-full object-cover"
          alt="aesthetic pic1"
        />
      </motion.div>
      <motion.div
        variants={fadeRight}
        className="absolute top-[15%] right-0 h-[60%] w-[20rem]  origin-right"
      >
        <Image
          src={image6}
          fill
          sizes="320px"
          placeholder="blur"
          className="h-full w-full object-cover"
          alt="aesthetic pic2"
        />
      </motion.div>
      <motion.div
        variants={fadeTop}
        className="absolute top-0 left-[18rem] h-[12rem] w-[10rem]  origin-top"
      >
        <Image
          src={image8}
          fill
          sizes="160px"
          placeholder="blur"
          className="h-full w-full object-cover"
          alt="aesthetic pic3"
        />
      </motion.div>
      <motion.div
        variants={fadeBottom}
        className="absolute bottom-0 right-[15rem] h-[15rem] w-[14rem]  origin-bottom"
      >
        <Image
          src={image10}
          fill
          sizes="224px"
          placeholder="blur"
          className="h-full w-full object-cover"
          alt="aesthetic pic4"
        />
      </motion.div>
      <motion.section
        variants={textContainer}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center"
      >
        <span className="text-5xl italic">01</span>
        <div className="font2 uppercase text-customOrange text-base font-semibold mt-3 relative  w-full ">
          <h2>Aesthetic Shots</h2>
          <motion.div
            variants={textScaleContainer}
            className="absolute inset-0 w-full h-full bg-customGreen  origin-right"
          />
        </div>

        <RevealTitle
          phrases={["I just shoot cool", "photos!"]}
          phraseStyle="text-5xl font-semibold"
          containerStyle="mt-5"
        />

        <div className="h-36 aspect-square border-[0.1rem] border-customOffWhite rounded-full flex flex-col items-center justify-center p-2 mt-4">
          <span className="uppercase font2 text-sm font-semibold">
            Explore gallery
          </span>
          <div className="">
            <ArrowDown className="stroke-customOrange" />
          </div>
        </div>
      </motion.section>
    </motion.article>
  );
};

export default AestheticSection;
