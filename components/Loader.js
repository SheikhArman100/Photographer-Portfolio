"use client";
import {
  ImageContainer,
  LoaderContainer,
  LoaderContainer2,
  block,
  block2
} from "@/libs/framer-motion/Loader.animation";
import image1 from "@/public/assets/image1.jpg";
import image10 from "@/public/assets/image10.jpg";
import image2 from "@/public/assets/image2.jpg";
import image3 from "@/public/assets/image3.jpg";
import image4 from "@/public/assets/image4.jpg";
import image5 from "@/public/assets/image5.jpg";
import image6 from "@/public/assets/image6.jpg";
import image7 from "@/public/assets/image7.jpg";
import image8 from "@/public/assets/image8.jpg";
import image9 from "@/public/assets/image9.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const Loader = ({setIsLoading}) => {
  const [imageIndex, setImageIndex] = useState(0)
  const [changeImageIndex, setChangeImageIndex] = useState(false)
  const imageList = useMemo(() => [image1, image2, image3, image4, image5,image6,image7,image8,image9,image10], []);

  useEffect(() => {
    let interval
    if(changeImageIndex){  
      interval = setInterval(() => {
      setImageIndex((prev) =>
        prev < 9 ? prev + 1 : prev
      );
    },300);
    // After 1500 milliseconds (2 seconds), set changeImageIndex back to false
      setTimeout(() => {
        setChangeImageIndex(false);
      }, 3000);
    
    
  }

  
    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
      
    };
  }, [imageIndex,changeImageIndex]);

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
        <motion.div variants={block}  onAnimationComplete={()=>setChangeImageIndex(true)} className="absolute w-full h-full inset-0 bg-customOffWhite origin-top z-[1]"/>
        <motion.div variants={block2}  className="absolute w-full h-full inset-0 bg-customOffWhite origin-top z-[1]"/>
        <Image
          src={imageList[imageIndex]}
          fill
          priority
          sizes="320px"
          className="object-cover w-full h-full "
          alt="loader image"
        />
      </motion.div>
    </motion.div>
    <motion.div variants={LoaderContainer2}
      initial="hidden"
      animate="show"
      onAnimationComplete={()=>setIsLoading(false)}
      className="w-full h-full absolute inset-0 bg-customGreen flex items-center justify-center  origin-bottom z-[2]"/>
    </div>
  );
};

export default Loader;
