import React from 'react';
import {motion} from "framer-motion";
import { Project } from '../../typings';
type Props = {
  projects: Project[]
};

function Projects({}: Props) {
  const projects = [1,2,3,4,5];
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration:1.5}}
    className="h-screen relative flex justify-evenly flex-col text-left
    overflow-hidden md:flex-row max-w-full mx-auto z-0 items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80">
          {
            projects.map((project, i) => (
              <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
              items-center justify-center p-20 md:p-44 h-screen">
                <motion.img
                initial={{y:-300, opacity:0}}
                transition={{duration:1.2}}
                whileInView={{opacity:1 , y:0}}
                viewport={{once: true}}
                src= "https://s.yimg.com/ny/api/res/1.2/sgqDUK8POxYlV73fu36XSw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMzOQ--/https://s.yimg.com/uu/api/res/1.2/20lwQW4fLuXvc2DWYRyUaA--~B/aD04NDc7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://o.aolcdn.com/hss/storage/midas/c7d3867c75a207082015ffc09e0cc1e6/203523899/goog.png" alt= ""/>
                
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="text-4xl font-semibold text-center">
                    <span className="underline decoration-[#F7AB0A]/50">
                        Case Study {i+1} of {projects.length}:
                    </span> {" "} Yotube Clone
                  </h4>

                  <p className="text-lg text-center md:text-left">
                    Youtube clone application consisting of stunning video sections, custom categories, 
                    channel pages, and, most importantly, you can play videos straight from your YouTube Clone App!
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div  className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects