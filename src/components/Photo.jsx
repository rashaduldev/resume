"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import rashadul from "../../public/assets/rashadulislam.png";

const Photo = (props) => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[228px] h-[228px] xl:w-[318px] xl:h-[318px] xl:-mt-6 xl:ml-24 mix-blend-lighten absolute left-8 top-2 md:-left-20 md:top-10 scale-x-[-1]"
        >
          <Image
            src={rashadul}
            priority
            quality={100}
            fill
            alt="Rashadul Islam"
            className="object-contain rounded-full"
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className="w-[300px] xl:w-[356px] h-[300px] xl:h-[356px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
