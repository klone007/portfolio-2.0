import React from 'react';
import {motion} from "framer-motion";
import { PageInfo } from '../../typings';
import { urlFor } from '../../sanity';
type Props = {
    pageInfo: PageInfo
}

function About({pageInfo}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.6
    }}
    className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px]
         text-gray-500 text-2xl">About</h3>
        
        {/*profile pic : "https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1259&q=80" */}
        {
            
        }
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a little background</h4>
            <p className='text-base'>
                {pageInfo?.backgroundInformation}
            </p>
        </div>

    </motion.div>
  )
}

export default About