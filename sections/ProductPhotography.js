"use client";
import RevealParagraph from "@/components/RevealParagraph";
import RevealTitle from "@/components/RevealTitle";
import {
  ContainerAnimation,
  buttonContainer,
  buttonItems,
  imageAnimation,
  imageContainer,
  imageSection,
  imageText,
  revealAnimation,
  revealContainer,
  revealTitleAnimation,
  sectionAnimation,
  textContainer,
  textScaleWrapper,
} from "@/libs/framer-motion/product.animation";
import image15 from "@/public/assets/image15.jpg";
import image16 from "@/public/assets/image16.jpg";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ProductPhotography = () => {
  return (
    <motion.section
      variants={sectionAnimation}
      initial="hidden"
      whileInView="view"
      viewport={{ margin: "-30%",once:true }}
      className="relative h-screen w-full bg-customOffWhite text-customBlack "
    >
      <motion.div
        variants={ContainerAnimation}
        className="w-full h-full flex items-center justify-between px-[3rem] lg:px-[6rem]"
      >
        <motion.div
          variants={imageSection}
          className="flex flex-col items-center gap-y-2"
        >
          <motion.div
            variants={imageContainer}
            className="h-56 aspect-[1.8/2] p-1.5 shadow-xl bg-customWhite origin-bottom"
          >
            <motion.div
              variants={imageAnimation}
              className="relative h-full w-full"
            >
              <Image
                src={image15}
                fill
                sizes="190px"
                placeholder="blur"
                className="w-full h-full object-cover"
                alt="product left image"
              />
            </motion.div>
          </motion.div>
          <motion.div
            variants={imageText}
            className="flex items-center gap-x-3 font2  uppercase "
          >
            <span className="text-sm font2 font-medium">03/</span>
            <p className="text-sm font-bold">Abstract-Concept</p>
          </motion.div>
        </motion.div>
        <motion.div
          variants={imageSection}
          className="flex flex-col items-center gap-y-2"
        >
          <motion.div
            variants={imageContainer}
            className="h-56 aspect-[1.8/2] p-1.5 shadow-xl bg-customWhite origin-bottom"
          >
            <motion.div
              variants={imageAnimation}
              className="relative h-full w-full"
            >
              <Image
                src={image16}
                fill
                sizes="190px"
                placeholder="blur"
                className="w-full h-full object-cover"
                alt="product left image"
              />
            </motion.div>
          </motion.div>
          <motion.div
            variants={imageText}
            className="flex items-center gap-x-3 font2  uppercase "
          >
            <span className="text-sm font2 font-medium">04/</span>
            <p className="text-sm font-bold">Product-Concept</p>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* center part */}
      <motion.div
        variants={textContainer}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col items-center"
      >
        <h4 className="relative font2 uppercase text-customOrange text-base font-semibold flex items-center gap-x-2 text-center">
          <motion.div
            variants={textScaleWrapper}
            className="absolute w-full h-full bg-customOffWhite origin-right"
          />
          <div className="h-1 w-1 rounded-full bg-customOrange" />
          Product Photography
        </h4>
        <RevealTitle
          phrases={["Capturing the", "perfect frame for", "your product"]}
          phraseStyle="text-6xl font-bold text-center"
        />
        <RevealParagraph
          phrases={[
            "Compel all your audience & capture the moment light with",
            "purpose.Capturing emotion through photos",
          ]}
          containerStyle="items-center mt-4"
          phraseStyle="font2 text-base font-semibold  text-center"
        />
        {/* <p className="font2 text-base font-bold text-center mt-5 ">
          Compel all your audience & capture the moment light with <br />
          purpose.Capturing emotion through photos
        </p> */}
        <motion.button
          variants={buttonContainer}
          className=" py-3 px-6 bg-customYellow  text-sm font2 font-bold uppercase origin-bottom mt-5"
        >
          <motion.div
            variants={buttonItems}
            className="flex items-center gap-x-2"
          >
            View Project <ArrowRight />
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default ProductPhotography;
