"use client";
import { easeIn, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Photo = (props) => {
    return (
        <div className='w-full h-full relative'>
            <motion.div 
            initial={{opacity:0}}
            animate={{
                opacity:1,
                transition:{delay:2, duration:0.4, ease:"easeIn"},
            }}
            >
                <div className='w-[298px] h-[298] xl:w-[498px] xl:h-[498px] mix-blend-lighten'>
                    <Image 
                    src="https://i.ibb.co/2W14bSc/rashadul-removebg.png"
                    priority
                    quality={100}
                    fill
                    alt=''
                    className='object-contain'
                    />
                </div>

            </motion.div>
           
        </div>
    );
};

export default Photo;