"use client";
import { navItems } from "@/utils/data";
import { AlignRight, Sparkle } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import { NavLogo, navLink, navVariants } from "@/libs/framer-motion/navbar.animation";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const currentRoute = usePathname();
  return (
    <motion.div
      variants={navVariants}
      className="w-full  flex items-center justify-between h-10 "
    >
      <motion.div
        
        className="flex items-center justify-start gap-x-2 flex-grow"
      >
        <motion.svg variants={NavLogo} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"  stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkle stroke-transparent fill-customOrange"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"/></motion.svg>
        {/* <Sparkle size={34} className="stroke-transparent fill-customOrange" /> */}
        <span className="md:text-xl lg:text-2xl font-semibold">Charlotte</span>
      </motion.div>

      <ul
        className=" gap-x-4 flex  items-center justify-center   flex-grow  overflow-hidden"
        onMouseLeave={() => setHovered(null)}
      >
        {navItems.map((nav, index) => {
          return (
            <motion.li
              key={index}
              variants={navLink}
              
              custom={index}
              className="relative px-4 py-2 rounded-xl md:text-xs lg:text-sm font-medium uppercase "
              onMouseEnter={() => setHovered(nav.name)}
            >
              <Link href={nav.link}>
                <p className="relative z-[2] c">{nav.name}</p>
                {currentRoute === nav.link ? (
                  <motion.div
                    layoutId="active"
                    transition={{ duration: 0.3, ease: "linear" }}
                    className="absolute    inset-0 w-full h-full  z-[1] "
                    style={{
                      borderRadius: 8, //(px).framer can not read tailwind className
                    }}
                  />
                ) : null}
                {hovered === nav.name ? (
                  <motion.div
                    layoutId="hovered"
                    transition={{ duration: 0.3, ease: "linear" }}
                    className="absolute glassEffect inset-0 w-full h-full  "
                    style={{
                      borderRadius: 8,
                    }}
                  />
                ) : null}
              </Link>
            </motion.li>
          );
        })}
      </ul>
      <div className="">
        <AlignRight />
      </div>
    </motion.div>
  );
};

export default Navbar;
