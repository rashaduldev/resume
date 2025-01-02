"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Frontend Designer",
    description: "Crafts visually appealing and responsive user interfaces using modern design principles and technologies like HTML, CSS, JavaScript, and frameworks such as React or Angular, ensuring optimal user experience.",
    href: ""
  },
  {
    num: "02",
    title: "Backend Developer",
    description: "Specializes in building and maintaining the server-side logic, databases, and APIs of web applications, ensuring robust performance, security, and scalability using technologies like Node.js, Python, or PHP.",
    href: ""
  },
  {
    num: "03",
    title: "WordPress Developer",
    description: "Customizes WordPress themes and plugins, optimizes site performance, and ensures security while delivering tailored solutions for content management and e-commerce platforms.",
    href: ""
  },
  {
    num: "04",
    title: "Full-Stack Developer",
    description: "Combines expertise in both frontend and backend development to deliver complete web solutions, integrating user-friendly interfaces with efficient server-side functionality for seamless applications.",
    href: ""
  },
];


const Services = () => {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {
            services.map((service, index) => (
              <div key={index} className="flex flex-1 flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-semibold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full" />
              </div>
            ))
          }
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
