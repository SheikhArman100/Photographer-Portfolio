"use client";
import {
  ImageContainer,
  LoaderContainer,
  LoaderContainer2,
  block,
  block2,
} from "@/libs/framer-motion/Loader.animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const imageList = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
  "image10.jpg",
];

const Loader = ({ setIsLoading }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [changeImageIndex, setChangeImageIndex] = useState(false);

  useEffect(() => {
    let interval;
    if (changeImageIndex) {
      interval = setInterval(() => {
        setImageIndex((prev) => (prev < 9 ? prev + 1 : prev));
      }, 300);
      // After 1500 milliseconds (2 seconds), set changeImageIndex back to false
      setTimeout(() => {
        setChangeImageIndex(false);
      }, 3000);
    }

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [imageIndex, changeImageIndex]);

  return (
    <div className="relative w-full h-screen bg-customGreen">
      <motion.div
        variants={LoaderContainer}
        initial="hidden"
        animate="show"
        className="w-full h-full bg-customOffWhite flex items-center justify-center  origin-top"
      >
        <motion.div
          variants={ImageContainer}
          className="relative w-80 aspect-[1/1.5] bg-customOffWhite "
        >
          <motion.div
            variants={block}
            onAnimationComplete={() => setChangeImageIndex(true)}
            className="absolute w-full h-full inset-0 bg-customOffWhite origin-top z-[1]"
          />
          <motion.div
            variants={block2}
            className="absolute w-full h-full inset-0 bg-customOffWhite origin-top z-[1]"
          />
          <Image
            src={`/assets/${imageList[imageIndex]}`}
            fill
            priority
            sizes="320px"
            className="object-cover w-full h-full "
            alt="loader image"
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={LoaderContainer2}
        initial="hidden"
        animate="show"
        onAnimationComplete={() => setIsLoading(false)}
        className="w-full h-full absolute inset-0 bg-customGreen flex items-center justify-center  origin-bottom z-[2]"
      />
    </div>
  );
};

export default Loader;
