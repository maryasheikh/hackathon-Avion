import React from 'react'

const Features2 = () => {
  return (
    <div>
     <section>
  <div className="container px-14 py-24 mx-auto flex flex-wrap bg-white  ">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto h-[478px] lg:w-1/2 sm:w-1/2 content-start sm:pr-10 bg-[#2A254B] p-11">
      <div className="w-full sm:p-4 px-4 mb-6">
        <h1 className="  title-font font-medium text-2xl mb-2 text-white font-mono ">
        It started with a small idea
        </h1>
        <div className="leading-relaxed text-white py-3 text-xl">
        A global brand with local beginnings, our story begain in a small studio in South London in early 2014
        </div>
      </div>
      <div >
      <button className="mt-28  px-8 py-4 bg-gray-700 text-white  hover:bg-slate-400 border border-gray-800"
          >View Collection
        </button>
      </div>
     
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full overflow-hidden mt-6 sm:mt-0 pl-6 ">
      <img
        className="object-cover object-center h-full"
        src="/Image block.png "
        alt="sofa image"
      />
    </div>
  </div>
</section>
    </div>
  )
}

export default Features2