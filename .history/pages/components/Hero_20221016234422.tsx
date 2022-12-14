import { TRACE_OUTPUT_VERSION } from 'next/dist/shared/lib/constants';
import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
import { PageInfo } from '../../typings';

type Props = {
    pageInfo: PageInfo
}

const Hero = ({pageInfo}: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Hello World!", 
            `Hi, The Name's ${pageInfo?.name}`,
            "<CoderForLife />", 
            "Let's Go"],
        loop: true,
        delaySpeed: 2000,

    });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        {/*Example img: "https://avatarfiles.alphacoders.com/865/86518.png"*/}
        <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
            src={urlFor(pageInfo?.profilePic).url()}
            alt=""
         />
         <div className='z-20'>
            <h2 className='tex-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Web Developer
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span>{text}</span>
                <Cursor cursorColor='#F7A' />
            </h1>
            <div className="pt-5">
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
         </div>

    </div>
  )
}

export default Hero