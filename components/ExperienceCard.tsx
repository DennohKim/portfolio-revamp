import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-6 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        className="w-32 h-32 rounded-full object-cover"
        alt="Expereince card"
       
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">CEO of GOOGLE</h4>
        <p className="font-bold text-2xl mt-1">GOOGLE</p>
        <div className="flex space-x-2 my-2">
          
          <Image
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            objectFit="cover"
            layout="fixed"
            alt="Icon"
            width={80}
            height={80}
            className="rounded-full"
          />
        
          <Image
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            objectFit="cover"
            layout="fixed"
            alt="Icon"
            width={80}
            height={80}
            className="rounded-full"
          />
      
          <Image
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            objectFit="cover"
            layout="fixed"
            alt="Icon"
            width={80}
            height={80}
            className="rounded-full"
          />
    
          <Image
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            objectFit="cover"
            layout="fixed"
            alt="Icon"
            width={80}
            height={80}
            className="rounded-full"
          />
    
           <Image
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            objectFit="cover"
            layout="fixed"
            alt="Icon"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-300 ">Started work... -Ended ...</p>
        <ul className="list-disc space-y-4 ml-5 text-sm">
          <li>Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;