/* eslint-disable react/no-unescaped-entities */
"use client";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const info=[
    {
        icon:<FaPhoneAlt />,
        title:"Phone",
        description:"8801603010103"
    },
    {
        icon:<FaEnvelope />,
        title:"Email",
        description:"rashadul.dev@gmail.com"
    },
    {
        icon:<FaMapMarkerAlt />,
        title:"Address",
        description:"Mirpur twin tower,Dhaka"
    },
]

const Contact = () => {
    return (
        <motion.section
        initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1, 
                transition:{delay:2.4,duration:0.4,ease:"easeIn"}
            }}
            className="py-0"
        >
           <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/* form */}
                <div className="xl:w-[54%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 px-10 py-5 bg-[#27272c] rounded-xl">
                        <h3 className="text-4xl text-accent">Let's work together</h3>
                        <p className="text-white/60">Passionate web developer skilled in HTML, CSS, JavaScript, and modern frameworks.</p>
                        {/* input feilds */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" placeholder="Firstname"/>
                            <Input type="lastname" placeholder="Lastname"/>
                            <Input type="email" placeholder="Email Address"/>
                            <Input type="phone" placeholder="Phone Number"/>
                        </div>
                        {/* select */}
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a values" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select a Service</SelectLabel>
                                    <SelectItem value="est">Web Development</SelectItem>
                                    <SelectItem value="cst">UI/UX Design</SelectItem>
                                    <SelectItem value="mst">Logo Design</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {/* Textarea */}
                        <Textarea
                        className="h-[200px]"
                        placeholder="Type your message here."
                        />
                        {/* btn */}
                        <Button size="md" className="max-w-40">
                            Send message    
                        </Button>
                    </form>
                </div>
                {/* info */}
                <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                    <ul className="flex flex-col gap-10">
                        {
                            info.map((item,index)=>{
                                return <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
           </div>
        </motion.section>
    );
};

export default Contact;