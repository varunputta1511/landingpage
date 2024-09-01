import React from 'react'
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-5 lg:mt-10">
        <h1 className="text-4xl sm:text-6xl lg:text-5xl text-center tracking-wide">
            Vocational.ly: A Leading Platform For
            <span className='bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text'> Vocational Training.</span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
        Vocational.ly connects students with top-tier tutors for high-quality vocational training. The platform offers expert instruction in practical skills across various industries, ensuring learners gain both theoretical knowledge and hands-on experience. With a focus on real-world applications, Vocational.ly helps students excel in their chosen careers by learning from the best professionals in their fields.
        </p>
        <div className="flex justify-center my-10">
            <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md'>
                Try A Demo
            </a>

            <a href='#'className='py-3 px-4 mx-3 rounded-md border'>
                Book A Call
            </a>
        </div>
        <div className='flex mt-10 justify-center'>
            <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
            <source src={video1} type="video/mp4"/>
            your browser does not support video tag.
            </video>

            <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
            <source src={video2} type="video/mp4"/>
            your browser does not support video tag.
            </video>
        </div>
    </div>
  )
}

export default HeroSection