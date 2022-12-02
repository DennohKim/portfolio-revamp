import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import React from "react";
import { GetStaticProps } from "next";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProject";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Chizaa Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials}/>

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}  />
      </section>

      <section id="about" className="snap-center">
        <About  pageInfo={pageInfo}  />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start ">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects  />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer ">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 object-cover rounded-full filter grayscale hover:grayscale-0 cursor-pointer "
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      projects,
      socials,
      skills,
      experiences,
      pageInfo,
    },

    //Nextjs will attempt to regenerate the page every 10 seconds
    revalidate: 10,
  };
};
