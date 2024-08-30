import React from 'react'
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-5 lg:mt-10">
        <h1 className="text-4xl sm:text-6xl lg:text-5xl text-center tracking-wide">
            Vocational.ly Provides A platform for 
            <span className='bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text'> vocational learning.</span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum delectus, obcaecati asperiores, assumenda commodi aut, consectetur impedit suscipit eligendi temporibus minima. Nemo delectus corporis rem at deleniti veritatis totam sequi.
        </p>
        <div className="flex justify-center my-10">
            <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md'>
                Try a Demo
            </a>
            <a href='#'className='py-3 px-4 mx-3 rounded-md border'>
                Book A call
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