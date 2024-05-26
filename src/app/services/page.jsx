"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Web Development expert designs, builds, and maintains websites, ensuring functionality, user experience, and performance. They possess strong coding skills and knowledge of web technologies.",
    href: ""
  },
  {
    num: "02",
    title: "Wordpress Developer",
    description: "WordPress Developer expert customizes and manages WordPress sites, creating themes and plugins, optimizing performance, and ensuring security while enhancing user experience and functionality.",
    href: ""
  },
  {
    num: "03",
    title: "App Development",
    description: "React Native App Developer specializes in building cross-platform mobile applications, utilizing React Native to create high-performance, responsive apps for both iOS and Android devices.",
    href: ""
  },
  {
    num: "04",
    title: "Full-Stack",
    description: "Full Stack Developer designs and manages both frontend and backend of web applications, ensuring seamless integration, performance, and user experience using various technologies and frameworks.",
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
