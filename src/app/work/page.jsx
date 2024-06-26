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

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: "A dynamic frontend project featuring responsive design, interactive elements, and seamless user experience, utilizing modern web technologies like HTML5, CSS3, and JavaScript for optimal performance and aesthetics.",
        stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Typescript" }],
        image: "https://i.ibb.co/ChFHLJt/portfollio-img.png",
        live: "https://rashadul-landing-page.vercel.app",
        github: "https://github.com/rashaduldev/Landing-page-with-NEXT_JS",
    },
    {
        num: "02",
        category: "fullstack",
        title: "project 2",
        description: "A fullstack CMS-based project built with Next.js, Tailwind CSS, and a headless CMS, offering dynamic content management, responsive design, and seamless user experience across devices.",
        stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Node.js" }],
        image: "https://i.ibb.co/D5nC5tq/trade.png",
        live: "https://trade-venture-roan.vercel.app",
        github: "https://github.com/rashaduldev/Trade-Venture",
    },
    {
        num: "03",
        category: "fullstack",
        title: "project 2",
        description: "A comprehensive fullstack project integrating a robust backend with a sleek, responsive frontend, utilizing technologies like Node.js, Express, MongoDB, and React to deliver a seamless, scalable web application.",
        stack: [{ name: "React.js" }, { name: "Tailwind CSS" }, { name: "Node.js" }],
        image: "https://i.ibb.co/yXGHRy2/bistro-img.png",
        live: "https://sturdy-support.surge.sh/",
        github: "https://github.com/rashaduldev/Bistro-Boss-Client",
    },
    
   
    {
        num: "04",
        category: "resume",
        title: "project 3",
        description: "Developed a sleek and modern personal portfolio website using Next.js and Tailwind CSS. The project showcases dynamic content, optimized performance, and responsive design, providing an engaging user experience across all devices. Features include an interactive gallery, blog section, and contact form, demonstrating proficiency in fullstack development and modern web technologies.",
        stack: [{ name: "React.js" }, { name: "Tailwind CSS" }],
        image: "https://i.ibb.co/CHNB72r/resume-photo.png",
        live: "https://rashedul-follio.vercel.app/",
        github: "https://github.com/rashaduldev/Portfollio",
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
