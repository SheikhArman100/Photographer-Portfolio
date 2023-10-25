"use client";
import {
  ImageContainer,
  LoaderContainer,
  LoaderContainer2,
  block,
  block2,
  imageAnimation,
  imageBlock,
  imageContainer,
  loaderContainer2,
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

const Loader = ({ setIsLoading }) => {

  return (
    <div className="relative w-full h-screen bg-customGreen">
      <motion.div variants={LoaderContainer} initial="hidden" animate="show" className="absolute inset-0 h-full w-full bg-customOffWhite origin-top flex items-center justify-center">
        <motion.div variants={imageContainer} className="relative w-80 aspect-[1/1.5]  overflow-hidden">
          <motion.div  variants={imageAnimation}  className="absolute inset-0 h-full w-full ">
            <Image src={image1} fill priority sizes="320px" className="h-full w-full object-cover" alt="image1"/>
          </motion.div>
          <motion.div  variants={imageAnimation}  className="absolute inset-0 h-full w-full ">
            <Image src={image2} fill priority sizes="320px" className="h-full w-full object-cover" alt="image2"/>
          </motion.div>
          <motion.div  variants={imageAnimation}  className="absolute inset-0 h-full w-full ">
            <Image src={image3} fill priority sizes="320px" className="h-full w-full object-cover" alt="image3"/>
          </motion.div>
          <motion.div  variants={imageAnimation}  className="absolute inset-0 h-full w-full ">
            <Image src={image4} fill priority sizes="320px" className="h-full w-full object-cover" alt="image4"/>
          </motion.div>
          <motion.div  variants={imageAnimation}  className="absolute inset-0 h-full w-full ">
            <Image src={image5} fill priority sizes="320px" className="h-full w-full object-cover" alt="image5"/>
          </motion.div>
          <motion.div  variants={imageAnimation}  className="absolute inset-0 h-full w-full ">
            <Image src={image6} fill priority sizes="320px" className="h-full w-full object-cover" alt="image6"/>
          </motion.div>
          <motion.div  variants={imageAnimation}  className="absolute inset-0 h-full w-full ">
            <Image src={image7} fill priority sizes="320px" className="h-full w-full object-cover" alt="image7"/>
          </motion.div>
          <motion.div  variants={imageAnimation}  className="absolute inset-0 h-full w-full ">
            <Image src={image8} fill priority sizes="320px" className="h-full w-full object-cover" alt="image8"/>
          </motion.div>
          <motion.div  variants={imageAnimation}  className="absolute inset-0 h-full w-full ">
            <Image src={image9} fill priority sizes="320px" className="h-full w-full object-cover" alt="image9"/>
          </motion.div>
          <motion.div  variants={imageAnimation}  className="absolute inset-0 h-full w-full ">
            <Image src={image10} fill priority sizes="320px" className="h-full w-full object-cover" alt="image10"/>
          </motion.div>
          {/* //!image block */}
          <motion.div  variants={imageBlock}  className="absolute inset-0 h-full w-full bg-customOffWhite "/>
          


        </motion.div>
      </motion.div>
      <motion.div variants={loaderContainer2} initial="hidden" animate="show" className="absolute inset-0 h-full w-full bg-customGreen origin-bottom" onAnimationComplete={()=>setIsLoading(false)}/>
    </div>
  );
};

export default Loader;
