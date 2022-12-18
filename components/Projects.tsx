import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col md:flex-row max-w-full justify-evenly mx-auto items-center z-0  ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 sm:text-md md:text-2xl lg:pb-10 ">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <div className="">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              className="h-72 w-full object-cover object-center"
              alt=""
            />
            </div>
            

            <div className="space-y-10 px-0 md:px-20 max-w-7xl mx-auto  ">
              <h4 className="sm:text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50 mr-3">
                  Case Study {index + 1} of {projects.length}:
                </span>
                {project?.title}
              </h4>
              <div className="flex items-center space-x-6 justify-center">
                {project?.technologies.map((technology) => (
                  <motion.img
                    key={technology._id}
                    src={urlFor(technology?.image).url()}
                    alt={technology.title}
                    className="h-12 w-12 object-cover object-center rounded-full"
                  />
                ))}
              </div>
              <div className="xxs:w-1/4 xs:w-1/2 md:w-full  mx-auto flex items-center flex-wrap">
                <p className="xxs:text-sm md:text-base text-center xs:w-1/2 lg:w-3/4 mx-auto ">{project?.summary}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
