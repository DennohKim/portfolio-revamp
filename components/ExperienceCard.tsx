import { motion } from "framer-motion";

import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({experience}: Props) => {
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
        src={urlFor(experience?.companyImage).url()}
        className="w-28 h-28 rounded-full object-cover"
        alt="Expereince card"
       
      />

      <div className="px-0 md:px-10 ">
        <h4 className="sm:text-2xl md:text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img key={technology._id} className="h-10 w-10 rounded-full object-cover" src={urlFor(technology.image).url()} alt="tech logos"/>
          ))}
          
          {/* <Image
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            objectFit="cover"
            layout="fixed"
            alt="Icon"
            width={80}
            height={80}
            className="rounded-full"
          />
         */}
          
        </div>
        <p className="uppercase py-5 text-gray-300 ">{new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}</p>
        <ul className="list-disc space-y-4 ml-5 text-sm">
          {experience.points.map((point,i) => (
            <li key={i}>{point}</li>
          ))}
          
      
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
