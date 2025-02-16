"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import { SiExpress, SiMongoose, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

// About Data
const about={
    title:"About me",
    description:"Passionate web developer with expertise in creating dynamic, user-friendly websites. Committed to continuous learning and delivering innovative solutions for modern web challenges.",
    info:[
        {
            fieldName:"Name",
            fieldValue:"Md Rashadul Islam"
        },
        {
            fieldName:"Phone",
            fieldValue:"+8801603010103"
        },
        {
            fieldName:"Experience",
            fieldValue:"2+years"
        },
        {
            fieldName:"Skype",
            fieldValue:"rashadul.skype"
        },
        {
            fieldName:"Nationality",
            fieldValue:"Bangladeshi"
        },
        {
            fieldName:"Email",
            fieldValue:"rashadul.dev@gmail.com"
        },
        {
            fieldName:"Freelance",
            fieldValue:"Available"
        },
        {
            fieldName:"Language",
            fieldValue:"Bangla,English"
        },
    ]

}
// Experiance Data
const exprience={
    icon:"",
    title:"My exprience",
    description:"Developed and maintained both front-end and back-end components of web applications using technologies such as JavaScript, React, Node.js, and Express.",
    items:[
        {
            company:"UySystems ltd",
            position:"Front-end Developer",
            duration:"2024-2025",
        },
        {
            company:"UySystems ltd",
            position:"Front-end Developer (Intern)",
            duration:"2023-2024",
        },
        {
            company:"ShopUp Robi Dhanmondi Branch (Robi-AT)",
            position:"IT officer",
            duration:"2022-2023",
        },
        {
            company:"IIST",
            position:"Web Development Level-4 (Cource)",
            duration:"2021",
        },
    ]
}
// Education Data
const education={
    icon:"",
    title:"My Education",
    description:"Gained comprehensive knowledge in software development, algorithms, data structures, and web technologies through coursework and hands-on projects",
    items:[
        {
            institute:"Green University of Bangladesh",
            degree:"Bsc in CSE",
            duration:"2022-2025",
        },
        {
            institute:"Dhaka Polytechnic Institute",
            degree:"Diploma in Computer Techmology",
            duration:"2019-2022",
        },
        {
            institute:"Cox's Bazar Polytechnic Institute",
            degree:"Diploma in Computer Techmology (1st & 2nd semester)",
            duration:"2018-2019",
        },
        {
            institute:"Nawdabash High School",
            degree:"SSC",
            duration:"2017",
        },
    ]
}
// Skills Data
const skills={
   title:"My Skills",
   description:"Developed and maintained both front-end and back-end components of web applications using technologies such as JavaScript, React, Node.js, and Express." ,
   skillist:[
    {
        icon:<FaHtml5 />,
        name:"html 5",
    },
    {
        icon:<FaCss3 />,
        name:"css 3",
    },
    {
        icon:<FaReact />,
        name:"react.js",
    }, 
    {
        icon:<FaVuejs />,
        name:"vue.js",
    },
    {
        icon:<FaJs/>,
        name:"javascript",
    },
    {
        icon:<SiTypescript />,
        name:"typescript",
    },
    {
        icon:<SiNextdotjs/>,
        name:"next.js",
    },
    {
        icon:<SiTailwindcss/>,
        name:"tailwind.css",
    },
    {
        icon:<FaNodeJs/>,
        name:"node.js",
    },
    {
        icon:<SiExpress />,
        name:"express",
    },
    {
        icon:<DiMongodb />,
        name:"mongodb",
    }, 
    {
        icon:<SiMongoose />,
        name:"mongoose",
    },
    {
        icon:<FaFigma/>,
        name:"figma",
    },
   ]
}

const Resume = () => {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{delay:2.4, duration:0.4, ease:"easeIn"}
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
          <div className="container mx-auto">
            <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="exprience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>

                {/* content */}
                <div className="min-h-[70vh] w-full">
                    {/* exprience */}
                    <TabsContent value="exprience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{exprience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{exprience.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {
                                        exprience.items.map((item,index)=>{
                                            return(
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-[14px] max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60 text-[14px]">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                     {/* education */}
                     <TabsContent value="education" className="w-full">
                     <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {
                                        education.items.map((item,index)=>{
                                            return(
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-[14px] max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60 text-[14px]">{item.institute}</p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                     {/* skills */}
                     <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center lg:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {
                                    skills.skillist.map((skill,index)=>{
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="capitalize">
                                                            {skill.name}
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </TabsContent>
                     {/* about */}
                     <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-w-[620px] mx-auto xl:mx-0">
                                {
                                    about.info.map((item,index)=>{
                                        return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </TabsContent>

                </div>
            </Tabs>
          </div>
        </motion.div>
    );
};

export default Resume;