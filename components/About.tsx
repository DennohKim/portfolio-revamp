import React from 'react';
import { motion } from "framer-motion";

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
     className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl lg:pb-10 ">About</h3>

        <motion.img
        src="https://images.unsplash.com/photo-1586716402203-79219bede43c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
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
        className="-mb-20 md:mb-0 flex:shrink w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
    />
    <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50">little</span>  background</h4>
        <p className="text-base">
        I am a highly-motivated, creative and pro-active designer and web developer able to research, design and develop user experiences for various digital products including mobile applications, websites and web applications. I use my broad range of skills to execute designs that are clean, simple and effective.
        </p>
    </div>
    
    </motion.div>
    
  )
}

export default About