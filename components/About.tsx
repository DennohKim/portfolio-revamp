import React from 'react';
import { motion } from "framer-motion";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
     className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 sm:text-md md:text-2xl lg:pb-10 ">About</h3>

        <motion.img
        src={urlFor(pageInfo?.profilePic).url()}
        initial={{
            x: -200,
            opacity: 0,
            
        }}
        whileInView={{
            x: 0,
            opacity: 1,

        }}
        transition={{
            duration: 1.2,
        }}
        viewport={{ once:true }}
        className="-mb-20 md:mb-0 flex:shrink w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
    />
    <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50">little</span>  background</h4>
        <p className="text-base">
        {pageInfo?.backgroundInformation}
        </p>
    </div>
    
    </motion.div>
    
  )
}

export default About