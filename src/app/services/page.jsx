"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services=[
    {
        num:"01",
        title:"Web Development",
        description:"Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip",
        href:""
    },
    {
        num:"02",
        title:"UI/UX Design",
        description:"Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip",
        href:""
    },
    {
        num:"03",
        title:"Logo Design",
        description:"Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip",
        href:""
    },
    {
        num:"04",
        title:"SEO",
        description:"Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip",
        href:""
    },
]

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                initial={{opacity:0}}
                animate={{
                    opacity:1,
                    transition:{delay:2.4,duration:0.4,ease:"easeIn"}
                }}
                >
                    {
                        services.map((service,index)=>{
                            <div key={index}>
                                <div>
                                    <div>{service.num}</div>
                                    <Link href={service.href}>
                                        <BsArrowDownRight />
                                    </Link>
                                </div>
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                                <div className="border-b border-white/20 w-full" />
                            </div>

                        })
                    }
                </motion.div>
            </div>
        </section>
    );
};

export default Services;