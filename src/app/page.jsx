'use client'

import { useState, useEffect, useRef } from "react";
import * as React from 'react';
import Modal from 'react-modal';

import { FaArrowRight } from "react-icons/fa";
import { CgPlayButtonR } from "react-icons/cg";
import { SiHyperskill } from "react-icons/si";
import { FaGithub, FaLinkedin, FaPaperclip } from 'react-icons/fa';

import SidePanel from '../components/sidePanel';
import MobileMenu from '../components/hamburger';
import FooterModal from './home/modal.jsx';

import {
  PROJECTS,
  WORK_EXPERIENCES,
  SKILLS
} from './data'

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("Projects");

  // refs for sections
  const projectsRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);

  // function to handle menu item click
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setShowHeader(true);
    // scroll to the corresponding section
    const sectionId = menuItem.toLowerCase().replace(/\s+/g, "-");
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // no active menu on mobile screens
    if (window.innerWidth < 768) return;

    Modal.setAppElement('#modalEl'); // important for accessibility

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50% of section in view = active
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveMenuItem(entry.target.dataset.menu);
        }
      });
    }, options);

    const sections = [projectsRef.current, workRef.current, aboutRef.current];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mx-6 md:gap-6">
      {/* Desktop */}
      <div className="hidden md:block col-span-1">
        <SidePanel
          activeMenuItem={activeMenuItem}
          onMenuItemClick={handleMenuItemClick}
        />
      </div>

      <div className="block md:hidden mb-6 mt-12">
        <div className="flex flex-col">
          <div className="w-full h-[15vh]">
            <img
              src="/images/me.jpg"
              alt="image of Angie"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <hr className="my-4" />
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-5xl font-extrabold mb-2">Angie Li</h1>
              <h2 className="text-xl">Front-End Developer</h2>
            </div>
            <MobileMenu activeMenuItem={activeMenuItem} handleMenuItemClick={handleMenuItemClick}/>
          </div>
        </div>

        <section className="mt-4">
          <div className='flex gap-8'>
            <a href='https://github.com/al2231' target="_blank" rel="noopener noreferrer"><FaGithub size={16} /></a>
            <a href='https://www.linkedin.com/in/angie-3200-li/' target="_blank" rel="noopener noreferrer"><FaLinkedin size={16} /></a>
            <a href="/Li_Resume.pdf" download><FaPaperclip size={16} /></a>
          </div>
        </section>
      </div>
      <div className="col-span-3 flex flex-col my-8 gap-36 md:pl-12">
        <section id="projects" ref={projectsRef} data-menu="Projects">
          <Projects visible={showHeader} />
        </section>
        <section id="work-experiences" ref={workRef} data-menu="Work Experiences">
          <WorkExperiences />
        </section>
        <section id="about" ref={aboutRef} data-menu="About">
          <About />
        </section>
        <FooterModal />
      </div>
    </div>
  );
}

export function Projects({ visible }) {
  return (
    <div>
      <h3 className={`${visible ? "block" : "hidden"} mb-5 text-lg font-medium`}>Highlighted Projects</h3>
      <div className="flex flex-col gap-6 mb-4">
        {PROJECTS.map((project) => (
          <a
          // bg-zinc-300/30
            className="relative overflow-hidden flex flex-col md:flex-row gap-4 rounded-2xl 
              p-8 bg-zinc-600/30
             ring-1 ring-transparent transition-all duration-300
             hover:ring-2 hover:ring-blue-500 hover:ring-inset hover:shadow-[inset_0_0_10px_rgba(59,130,246,0.8)]"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.name}
          >
            {/* bg-zinc-50/40 ring-zinc-200/50*/}
            <div className="relative basis-1/2 flex-shrink-0 rounded-2xl p-1 
                  ring-1  ring-inset bg-zinc-950/40 ring-zinc-800/50">
              <img src={project.image} alt={project.name} className="object-cover w-full h-full rounded-xl" />
            </div>
            <div className="px-1 flex flex-col md:basis-1/2 justify-center gap-4 mt-4 md:mt-0">
            {/* text-zinc-900 */}
              <div className="font-base relative inline-block font-[450] text-zinc-50">
                {project.name}
                {/* bg-zinc-900 */}
                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-50"></span>
              </div>
              {/* text-zinc-600 */}
              <p className="text-base text-zinc-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    // bg-zinc-200/70 text-zinc-700
                    className="rounded-full bg-zinc-800/70 px-3 py-1 text-sm text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      {/* bg-zinc-300/30 */}
      <p className="flex items-center group w-fit
        px-8 py-4 bg-zinc-600/30 rounded-2xl ">
        <a href="./projects">
          View Project Archives
        </a>
        <FaArrowRight
          className="ml-2 transition-transform duration-300 group-hover:translate-x-3"
          size={24}
        />
      </p>

    </div>
  )
}

export function WorkExperiences() {
  return (
    <div>
      <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
      <div className="flex flex-col space-y-2 mb-4">
        {WORK_EXPERIENCES.map((job) => (

          <div key={job.id} className="space-y-2">
            <div className="relative h-full w-full rounded-[15px] p-4 bg-zinc-950">
              <div className="relative flex w-full flex-col md:flex-row justify-between">
                {/* text-zinc-600 */}
                <p className="w-1/3 text-zinc-400">
                  {job.start} - {job.end}
                </p>
                <div className="md:w-2/3">
                  <h4 className="font-normal text-zinc-100">
                    {job.title} * {job.company}
                  </h4>
                  {/* text-zinc-500 */}
                  <p className="text-sm/7 md:pr-8 text-justify text-zinc-400">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {job.tools.map((tool) => (
                      <span
                        key={tool}
                        // bg-zinc-200/70 text-zinc-700
                        className="rounded-full bg-zinc-800/70 px-3 py-1 text-sm text-zinc-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* bg-zinc-300/30 */}
      <p className="flex items-center group w-fit
        px-8 py-4 bg-zinc-600/30 rounded-2xl ">
        <a href="./resume">
          View Full Resume
        </a>
        <FaArrowRight
          className="ml-2 transition-transform duration-300 group-hover:translate-x-3"
          size={24}
        />
      </p>
    </div>
  )
}


export function About() {
  return (
    <div>
      <h3 className="mb-5 text-lg font-medium">About Me</h3>
      <div className="space-y-8 px-4 md:pl-4 md:pr-12 leading-relaxed text-justify">
        <section>
          <p className='italic border-l-2 pl-2'>
            With a user-centric mindset, I bridge front-end and back-end design and development <br />
            to create intuitive and accessible experiences.
          </p>
        </section>

        <section className="leading-7">
          <p>
            I am currently a Web and Mobile student at <a href='http://rit.edu/' target='_blank' className='text-blue-500'>RIT</a>,
            working on my senior project building a birdbox monitor. This involves
            following the entire development process alongside
            our sponsor (<a href='https://www.geneseelandtrust.org/' target='_blank' className='text-blue-500'>Genesee Land Trust</a>):
            from project management and requirements gathering, to hardware, interface
            design, and development.
          </p>
        </section>

        <section>
          {/* <p>
            With this, I have had experience across a wide range, including:
          </p> */}
          <ul className="list-disc mt-2 space-y-2 list-none">
            {SKILLS.map((skill) => (
              <li key={skill.id} className="border-2 border-zinc-800 p-4 rounded-xl">
                <div className='flex items-center'>
                  <SiHyperskill className='mr-4' size={36} />
                  <p className="text-left">
                    <strong>{skill.name}</strong> <br />
                    {skill.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="leading-7">
          <p>
            I am always open to learning new things and exploring different realms,
            striving to grow as both a designer / developer and as an individual. As
            technology, or even the world, continues to evolve, I believe we must evolve right
            alongside it. Outside of the technological world, exploring new foods, sports, skills, and
            scenery. <br /> To me, the world is truly what you make of it.
          </p>
        </section>

        <section className="mt-8">
          <p className='flex'><CgPlayButtonR className="mr-2" size={24} /> Current YouTube Watch</p>
          <div className="mt-2 aspect-video w-full max-w-2xl">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/NLlGopyXT_g?si=gksAGwMV4spSv3V9"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
    </div >

  )
}

