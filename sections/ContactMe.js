"use client";
import Image from "next/image";
import React from "react";
import image4 from "@/public/assets/image4.jpg";
import circleTextImage from "@/public/assets/circleText.svg";
import camera from "@/public/assets/camera.png";
import { ArrowRight, Play, Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import {
  buttonContainer,
  buttonItems,
  containerAnimation,
  scaleContainer,
  scaleContainerText,
  sectionAnimation,
  textScaleContainer,
} from "@/libs/framer-motion/contactme.animation";
import RevealTitle from "@/components/RevealTitle";

const ContactMe = () => {
  return (
    <section id="contact_me" className=" h-screen w-full bg-customGreen text-customWhite flex flex-col">
      <div className="relative flex-[1_1_100%]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[18rem] h-[75%] rounded-full rotate-12">
          <Image
            src={image4}
            fill
            sizes="288px"
            placeholder="blur"
            className=" w-full h-full object-cover rounded-full"
            alt="contact me image"
          />
          <div className=" md:h-[6rem] lg:h-[7.5rem] aspect-square bg-customYellow rounded-full absolute -right-[3.5rem] bottom-[40%] flex items-center justify-center">
            <div className="h-8 w-8">
              <Play className="fill-customBlack stroke-none h-full w-full" />
            </div>
            <div className="absolute ">
              <Image src={circleTextImage} alt="circle text" />
            </div>
          </div>
        </div>
        <motion.div
          variants={sectionAnimation}
          initial="hidden"
          whileInView="view"
          viewport={{ margin: "-30%", once:true }}
          className="h-full w-full px-[3rem] lg:px-[6rem] flex items-center justify-between"
        >
          <motion.div
            variants={containerAnimation}
            className="flex flex-col items-center "
          >
            <div className=" flex mt-6">
              <span className="text-customOrange md:text-6xl lg:text-7xl font-bold mr-4">
                “
              </span>
              <p className="text-4xl font-bold mt-[2rem]">
                <RevealTitle phrases={["Clicking the", "photos with the"]} />
                <RevealTitle
                  phrases={["perfection"]}
                  phraseStyle="text-customOrange"
                />
              </p>
            </div>
            <div className="relative h-48 aspect-square rotate-[35deg] ">
              <Image
                src={camera}
                fill
                sizes="(min-width: 1040px) 144px, 128px"
                alt="camera"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
          <motion.div variants={containerAnimation} className="">
            <h4 className="font2 uppercase text-customOrange text-sm font-semibold flex items-center gap-x-2 text-center relative">
              <motion.div
                variants={textScaleContainer}
                className="absolute w-full h-full bg-customGreen origin-right"
              />
              <div className="h-1 w-1 rounded-full bg-customOrange" />
              Contact Me
            </h4>
            <RevealTitle
              phrases={[" I explore styles", "every week, enjoy", " my work"]}
              phraseStyle="text-4xl font-semibold"
              containerStyle="mt-2"
            />

            <motion.button
              variants={buttonContainer}
              className=" py-3 px-6 border border-customOffWhite text-sm font2 font-bold uppercase  mt-5 origin-left"
            >
              <motion.div
                variants={buttonItems}
                className="flex items-center gap-x-2"
              >
                Book a call <ArrowRight />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={scaleContainer}
        initial="hidden"
        whileInView="view"
        viewport={{ once: true }}
        className="w-full h-[4.5rem] border-t border-b border-customOffWhite origin-left "
      >
        <motion.div
          variants={scaleContainerText}
          className="h-full flex items-center justify-center gap-x-2"
        >
          <h3 className="text-3xl  font-semibold">Infographics</h3>
          <Sparkle size={32} className="fill-customOrange stroke-none" />
          <h3 className="text-3xl  font-semibold">Branding</h3>
          <Sparkle size={32} className="fill-customOrange stroke-none" />
          <h3 className="text-3xl  font-semibold">Art Direction</h3>
          <Sparkle size={32} className="fill-customOrange stroke-none" />
          <h3 className="text-3xl  font-semibold">Production</h3>
          <Sparkle size={32} className="fill-customOrange stroke-none" />
          <h3 className="text-3xl  font-semibold">Mural Drawing</h3>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
