import React from "react";
import image15 from "@/public/assets/image15.jpg";
import image16 from "@/public/assets/image16.jpg";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ProductPhotography = () => {
  return (
    <section className="relative h-screen w-full bg-customOffWhite text-customBlack ">
      <div className="w-full h-full flex items-center justify-between px-[3rem] lg:px-[6rem]">
        <div className="flex flex-col items-center gap-y-2">
         <div className="h-56 aspect-[1.8/2] p-1.5 shadow-xl bg-customWhite relative">
           <Image
            src={image15}
            
            placeholder="blur"
            className="w-full h-full object-cover"
            alt="product left image"
          />
         </div>
          <div className="flex items-center gap-x-3 font2  uppercase ">
            <span className="text-sm font2 font-medium">03/</span>
            <p className="text-sm font-bold">Abstract-Concept</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-2">
         <div className="h-56 aspect-[1.8/2] p-1.5 shadow-xl bg-customWhite relative">
           <Image
            src={image16}
            
            placeholder="blur"
            className="w-full h-full object-cover"
            alt="product right image"
          />
         </div>
          <div className="flex items-center gap-x-3 font2  uppercase ">
            <span className="text-sm font2 font-medium">04/</span>
            <p className="text-sm font-bold">Product-Concept</p>
          </div>
        </div>
        
      </div>
      {/* center part */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col items-center">
         <h4 className='font2 uppercase text-customOrange text-base font-semibold flex items-center gap-x-2 text-center'><div className="h-1 w-1 rounded-full bg-customOrange"/>Product Photography</h4>
          <h2 className='text-6xl font-semibold text-center mt-2'>Capturing the <br/> perfect frame for <br/> your product</h2>
           <p className="font2 text-base font-semibold text-center mt-5">
           Compel all your audience & capture the moment light with <br/>
           purpose.Capturing emotion through photos
          </p>
          <button  className=" py-3 px-6 bg-customYellow  text-sm font2 font-bold uppercase origin-bottom mt-5">
             <div className="flex items-center gap-x-2"> View Project <ArrowRight /></div>
          </button>

      </div>
    </section>
  );
};

export default ProductPhotography;
