"use client";

import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";  // Import Swiper styles
import Image from "next/image";
import Sliderbuttons from "@/components/Sliderbuttons";
import learning from "../../../public/assets/learning.PNG";
import ssl from "../../../public/assets/ssl.PNG";
import travels from "../../../public/assets/travel.PNG";
import trade from "../../../public/assets/trade.PNG";

const projects = [
    {
        num: "01",
        category: "Learning Management System (LMS)",
        title: "Learning Management",
        description: "Learning Management System (LMS) This project is a dynamic, frontend-focused Learning Management System (LMS) designed to provide a seamless and engaging user experience. It is built with modern web technologies like HTML5, CSS3, JavaScript, and React. The system offers responsive design and interactive elements, enabling users to easily navigate through courses, track progress, and engage with educational content.",
        stack: [{ name: "HTML5" }, { name: "CSS3" },{ name: "React" }, { name: "Javascript" }],
        image: learning,
        live: "https://learning.tripleibd.com",
        github: "https://github.com/rashaduldev/Course-learning-Front-end",
    },
    {
        num: "02",
        category: "SSL Garments System",
        title: "SSL",
        description: "The SSL Garments System (Frontend) is a dynamic and responsive web application designed to manage garment production processes. Developed using Next.js and Tailwind CSS, this frontend interface enables users to interact with the garment management system, track orders, view inventory, and manage production workflows. The application features a user-friendly design with a focus on performance, offering a seamless experience across various devices.",
        stack: [{ name: "React.js" }, { name: "Tailwind CSS" }, { name: "Javascript" }],
        image: ssl,
        live: "https://stylorium.net",
        github: "https://github.com/rashaduldev/ssl",
    },
    {
        num: "03",
        category: "Tourisom & Travels",
        title: "Tourisom & Travels",
        description: "A full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js), offering seamless booking, destination exploration, and user management. Features include dynamic tour packages, secure authentication, a user-friendly interface, and responsive design for an enhanced travel planning experience.",
        stack: [{ name: "React" }, { name: "Tailwind" }, { name: "Node" },{ name: "Express" },{ name: "Mongodb" },{ name: "Firebase" }],
        image: travels,
        live: "https://tour-guide-theta.vercel.app",
        github: "https://github.com/rashaduldev/Tourist-Guide-Client",
    },
    
   
    {
        num: "04",
        category: "Trade Ventures",
        title: "Trade Ventures",
        description: "A responsive frontend application built with Next.js and Tailwind CSS, designed for seamless user interaction and dynamic content management. The project offers a clean UI, fast performance, and optimized navigation for enhanced user experience. It includes modern design principles and responsive layouts, ensuring accessibility across all devices.",
        stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
        image: trade,
        live: "https://trade-venture-roan.vercel.app",
        github: "https://github.com/rashaduldev/Trade-Venture",
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
            className="min-h-[75vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* Text outline */}
                            <div className="text-7xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* Project category */}
                            <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
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
                                            <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
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
                                            <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
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
                            })}
                                                    {/* Slider btns */}
                        <Sliderbuttons 
                        containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                        
                        />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default WorkPage;
