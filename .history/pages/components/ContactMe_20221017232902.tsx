import React from 'react';
import {motion} from "framer-motion";
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;

};



type Props = {}

function ContactMe({}: Props) {

    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:shivammpanchal@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

  return (
    <div className="h-screen relative flex justify-evenly flex-col text-center
    md:text-left md:flex-row max-w-7xl mx-auto z-0 items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact
        </h3>

        <div className="flex flex-col space-y-5 p">
            <h4 className="text-4xl font-semibold text-center">
                I have got just what you need.{" "}
                <span className="decoration-[#F7AB0A]/50 underline">Let's talk</span>
            </h4>

            <div className="space-y-10">
                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                    <p>+14166184845</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                    <p>shivammpanchal@gmail.com</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                    <p>5 Durrington cres</p>
                </div>

                <form 
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-2 w-fit mx-auto ">
                    <div className="space-x-2 mb:5">
                        <input {...register('name')} className="contactInput" placeholder="Name" type="text" />
                        <input {...register('email')} className="contactInput" placeholder="Email" type="email" />
                    </div>
                    <input {...register('subject')} className="contactInput" placeholder="Subject" type="text" />

                    <textarea  {...register('message')} className="contactInput" placeholder="Message" />
                    <button 
                    type="submit"
                    className= "bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg" >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactMe

