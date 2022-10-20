import React from 'react';
import {motion} from "framer-motion";
import { Project } from '../../typings';
import { urlFor } from '../../sanity';
import Link from 'next/link';
type Props = {
  projects: Project[];
};

function Projects({projects}: Props) {
  
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration:1.5}}
    className="h-screen relative flex justify-evenly flex-col text-left
    overflow-hidden md:flex-row max-w-full mx-auto z-0 items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

        <div className="relative w-full flex overflow-x-scroll mt-5 overflow-y-hidden snap-x
        snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80">
          {
            projects?.map((project, i) =>     
                (<div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                items-center justify-center p-20 md:p-44 h-screen">
                  <Link  href={project?.linkToBuild} >
                  <a target="_blank" rel="noopener noreferrer" className='link-item'>
                    {
                      project.image && <motion.img
                      className="cursor-pointer hover:border"
                      initial={{y:-300, opacity:0}}
                      transition={{duration:1.2}}
                      whileInView={{opacity:1 , y:0}}
                      viewport={{once: true}}
                      src= {urlFor(project?.image).url()}
                      alt= ""/>
                    }
                    
                    </a>
                  </Link>
                  <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                    <h4 className="xl:text-4xl font-semibold text-center text-sm">
                      <span className="underline decoration-[#F7AB0A]/50">
                          Case Study {i+1} of {projects.length}:
                      </span> {" "} {project?.title}
                    </h4>

                  <div className="flex items-center space-x-2 justify-center">
                    {project?.technologies.map((technology)=>
                      (<img 
                        className="h-10 w-10"
                        key={technology._id}
                        src= {urlFor(technology?.image).url()}
                        alt=""
                      />)
                    )}

                  </div>
                    <p className="text-lg text-center md:text-left">
                      {project?.summary}
                    </p>
                  </div>
                </div>)
              
            )}
        </div>

        <div  className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects