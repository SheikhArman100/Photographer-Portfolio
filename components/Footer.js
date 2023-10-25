import { ArrowRight, Facebook, Instagram, Sparkle, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-y-8 bg-customBlack text-customOffWhite px-[3rem] lg:px-[6rem] ">
      <article className="w-full grid grid-cols-2 gap-x-[8rem] ">
        <section className="flex flex-col gap-y-2 py-[2rem] border-b border-customWhite">
          <div className="flex items-center">
            <Sparkle size={28} className="stroke-none fill-customOrange" />
            <h3 className="text-base font2 uppercase font-semibold">Studio</h3>
          </div>
          <ul className="flex items-center gap-x-2  font2 uppercase ">
            <li className="py-2 px-3 border border-customWhite text-xs font-semibold rounded-full">
              Features
            </li>
            <li className="py-2 px-3 border border-customWhite text-xs font-semibold rounded-full">
              About
            </li>
            <li className="py-2 px-3 border bg-customWhite text-customBlack text-xs font-bold rounded-full flex items-center gap-x-1">
              Projects <ArrowRight size={16} className="-rotate-45" />
            </li>
            <li className="py-2 px-3 border border-customWhite text-xs font-semibold rounded-full">
              Blog
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-y-2 py-[2rem] border-b border-customWhite">
          <div className="flex items-center">
            <Sparkle size={28} className="stroke-none fill-customOrange" />
            <h3 className="text-base font2 uppercase font-semibold">
              Discover
            </h3>
          </div>
          <ul className="flex items-center gap-x-2  font2 uppercase ">
            <li className="py-2 px-3 border border-customWhite text-xs font-semibold rounded-full">
              Photography
            </li>
            <li className="py-2 px-3 border border-customWhite text-xs font-semibold rounded-full">
              Cinematography
            </li>

            <li className="py-2 px-3 border border-customWhite text-xs font-semibold rounded-full">
              Commercial
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-y-2 py-[2rem]">
          <div className="flex items-center">
            <Sparkle size={28} className="stroke-none fill-customOrange" />
            <h3 className="text-base font2 uppercase font-semibold">Contact</h3>
          </div>
          <ul className="flex items-center gap-x-2  font2 uppercase ">
            <li className="py-2 px-3 border border-customWhite text-xs font-semibold rounded-full">
              [+88] 01892554-**
            </li>

            <li className="py-2 px-3 border bg-customWhite text-customBlack text-xs font-bold rounded-full flex items-center gap-x-1">
              sheikharman100@gmail.com
              <ArrowRight size={16} className="-rotate-45" />
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-y-2 py-[2rem]">
          <div className="flex items-center">
            <Sparkle size={28} className="stroke-none fill-customOrange" />
            <h3 className="text-base font2 uppercase font-semibold">
              NewsLetter
            </h3>
          </div>
          <form className="flex items-center gap-x-2 ">
            <input
              type="email"
              className="bg-transparent border border-customOffWhite py-2 pl-3  pr-16 rounded-full text-xs font2 font-bold"
            />
            <button
              type="submit"
              className="py-2 px-3 border bg-customWhite text-customBlack text-xs font-bold rounded-full flex items-center gap-x-1 uppercase font2"
            >
              Subscribe
              <ArrowRight size={16} className="-rotate-45" />
            </button>
          </form>
        </section>
      </article>

      <section className="border-t border-customWhite h-16 grid grid-cols-3 items-center">
        <div className="flex items-center justify-start gap-x-2 flex-grow ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sparkle stroke-transparent fill-customOrange"
          >
            <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z" />
          </svg>
          {/* <Sparkle size={34} className="stroke-transparent fill-customOrange" /> */}
          <span className="md:text-xl lg:text-2xl font-semibold">
            Charlotte
          </span>
        </div>
        <p className="font2 uppercase text-sm font-medium flex items-center justify-center">All rights reserved to @Sheikh Arman 2023</p>
        <div className="flex items-center justify-end gap-x-1">
            <Twitter size={24} className="stroke-customBlack fill-customOrange cursor-pointer"/>
            <Instagram size={24} className="stroke-customBlack fill-customOrange cursor-pointer"/>
            <Facebook size={24} className="stroke-customBlack fill-customOrange cursor-pointer"/>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
