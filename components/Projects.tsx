import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0  ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl lg:pb-10 ">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              className="h-48 w-3/4 object-cover"
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-7xl mx-auto  ">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50 mr-3">
                  Case Study {index + 1} of {projects.length}:
                </span>
                {project?.title}
              </h4>
              <div className="flex items-center space-x-6 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    src={urlFor(technology?.image).url()}
                    alt={technology.title}
                    className="h-12 w-12 object-cover object-center rounded-full"
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
