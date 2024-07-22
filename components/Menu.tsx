"use client";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { ModeToggle } from "./ModeToggle";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/work", label: "Works" },
  //{ path: "/writting", label: "Writtings" },
];

const Menu = () => {
  const container = useRef<HTMLDivElement>(null);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const toggleMenu = () => {
    toggleOpen();
  };

  const menuLinkItemVariants = {
    open: {
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 75,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const menuLinksVariants = {
    open: {
      transition: { staggerChildren: 0.17, delayChildren: 0.75 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const navbar = {
    open: {
      clipPath: "polygon(0 0,100% 0,100% 100%,0% 100%)",
      transition: {
        duration: 1.25,
        ease: "easeInOut",
      },
    },
    closed: {
      clipPath: "polygon(0 0,100% 0,100% 0%,0% 0%)",
      transition: {
        delay: 0.7,
      },
    },
  };

  return (
    <motion.div
      ref={container}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <div className="fixed top-0 left-0 w-screen py-5 px-4 z-[1] bg-primary/10 backdrop-blur-md">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <div>
            <Link className="font-bold" href={"/"}>
              Urlyss
            </Link>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div onClick={toggleMenu}>
              <p className=" cursor-pointer font-bold">Menu</p>
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>

      <motion.div
        className="fixed top-0 left-0 w-screen h-screen p-8 bg-primary text-primary-foreground  z-[2]"
        variants={navbar}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col justify-between">
          <div className="fixed top-0 left-0 w-full">
            <div className="w-full p-8 flex justify-between mx-auto max-w-7xl">
              <div>
                <Link href={"/"} className="font-bold">
                  Urlyss
                </Link>
              </div>
              <div onClick={toggleMenu}>
                <p className=" cursor-pointer font-bold">Close</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between flex-col pt-16 mx-auto">
            <motion.div variants={menuLinksVariants} className="space-y-4">
              {menuLinks.map((link, index) => (
                <div
                  className="w-max p-1"
                  key={index}
                  onClick={toggleMenu}
                  style={{ clipPath: "polygon(0 0,100% 0,100% 100%,0% 100%)" }}
                >
                  <motion.div
                    className="relative"
                    variants={menuLinkItemVariants}
                  >
                    <Link
                      href={link.path}
                      className="hover:underline menu-link  text-5xl md:text-7xl font-normal tracking-[-0.02em] leading-[85%]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Menu;
