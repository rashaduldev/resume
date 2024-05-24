"use client";

import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";  // Import Swiper styles
import Image from "next/image";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
        image: "/images/project1.jpg",
        live: "https://liveproject1.com",
        github: "https://github.com/user/project1",
    },
    {
        num: "02",
        category: "fullstack",
        title: "project 2",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Node.js" }],
        image: "/images/project2.jpg",
        live: "https://liveproject2.com",
        github: "https://github.com/user/project2",
    },
    {
        num: "03",
        category: "backend",
        title: "project 3",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
        image: "/images/project3.jpg",
        live: "https://liveproject3.com",
        github: "https://github.com/user/project3",
    },
];

const WorkPage = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1, 
                transition:{delay:2.4,duration:0.4,ease:"easeIn"}
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* Text outline */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* Project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category}
                            </h2>
                            {/* Project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* Stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            <div className="border border-white/20"></div>
                            {/* Buttons */}
                            <div className="flex items-center gap-4">
                                {/* Live project button */}
                                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* Github project button */}
                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>GitHub Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                   <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    {/* overlay */}
                                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                    {/* image */}
                                    <div className="relative w-full h-full">
                                        <Image 
                                        src={project.image}
                                        alt={project.title} 
                                        fill
                                        className="object-cover" />
                                    </div>

                                   </div>
                                    </SwiperSlide>
                                );
                            })};
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default WorkPage;
