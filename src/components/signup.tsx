import React from 'react'
//import Image from 'next/image'

const Signup = () => {
  return (
    <>
    <section>
   <div className=' text-white mt-4 '>
    <div 
        className='w-full max-w-[640px] md:max-w-[1340px] h-[350px] mx-auto flex justify-center items-center flex-col px-4' 
        style={{
            backgroundImage: "url('/gallery.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
    >
  
          <h1 className='text-2xl md:text-4xl text-center'>
            Join the club and get the benefits
          </h1>
          <h2 className='text-center py-4 text-sm md:text-base'>
            Sign up for our newsletter and receive exclusive offers on new
            <br /> ranges, sales, pop-up stores, and more.
          </h2>
          <div className='mt-4 w-full'>
            <form action="" className='flex flex-col md:flex-row items-center justify-center'>
              <input 
                type="text "
                placeholder="your@email.com"
                className="p-4 bg-[#F9F9F9] w-full md:w-[354px] h-[56px] outline-none mb-4 md:mb-0 text-black"
              />
              <button className='p-2 bg-[#2A254B] text-white w-full md:w-[118px] h-[56px] hover:bg-slate-400'>
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
)
}

export default Signup
