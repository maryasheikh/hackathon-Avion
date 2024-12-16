import React from 'react'
import Image from "next/image";

const About  = () => {
  return (

    <div className="relative min-h-[700px] md:min-h-[600px] lg:min-h-[700px] flex flex-col md:block ">
      {/* White Box - On top for mobile, overlaid for larger screens */}
      <div className="bg-white p-8 md:p-12 md:max-w-lg lg:max-w-xl xl:max-w-2xl md:absolute md:top-1/2 md:right-20 md:transform md:-translate-y-1/2 z-10 ">
        <h1 className="text-3xl  ">
     Luxury homeware for people <br/> who love timeless design quality
        </h1>
        <p className="text-gray-600 mb-6 py-8">
         Shop the new Spring 2022 collection today
        </p>
       
        <button className="mt-10 px-8 py-4 bg-[#F9F9F9] text-black  hover:bg-slate-400 border border-gray-200"
          >View Collection
        </button>
      </div>

      {/* Background Image - Below div on mobile, full-size background on larger screens */}
      <div className="relative flex-grow md:absolute md:inset-0">
        <Image
          src="/banner.png"   
          alt="Luxury homeware showcase"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
      </div>
      </div>
  )
}
    
export default About;