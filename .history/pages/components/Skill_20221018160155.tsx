import React from 'react';
import {motion} from "framer-motion";
import { Skill } from '../../typings';
import { urlFor } from '../../sanity';

type Props = {
    directionLeft?: boolean;
    skill: Skill;
}

function Skill({directionLeft, skill}: Props) {
  return (
    <div className="group relative flex cursor-pointer ">
        
        {

        }
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 
        rounded-full z-0 ">
            <div className="flex items-center justify-center h-full ">
                <p className="text-3xl font-bold text-black opacity-100 ">{skill?.progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill