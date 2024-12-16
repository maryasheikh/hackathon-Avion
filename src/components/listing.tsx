import React from 'react'

const Listing = () => {
  return (
   
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-wrap justify-center gap-5">
        {/* Card 1 */}
        <div className="w-[305px] h-[375px] bg-white flex flex-col  ">
          <img
            src="/dandy-chair.png"
            alt="The Dandy Chair"
            className="h-100 w-full object-cover mb-4 "
          />
          <h3 className="text-lg font-semibold text-[#2A254B]">The Dandy Chair</h3>
          <p className="text-[#2A254B]">£250</p>
          
        </div>
        
        {/* Card 2 */}
        <div className="w-[305px] h-[375px] bg-white flex flex-col  ">
          <img
            src="/vase-set.png"
            alt="Rustic Vase Set"
            className="h-100 w-full object-cover mb-4 "
          />
          <h3 className="text-lg font-semibold text-[#2A254B]">Rustic Vase Set</h3>
          <p className="text-[#2A254B]">£350</p>
        </div>

        {/* Card 3 */}
        <div className="w-[305px] h-[375px] bg-white flex flex-col ">
          <img
            src="/silky-vase.png"
            alt="The Silky Vase"
            className="h-100 w-full object-cover mb-4 "
          />
          <h3 className="text-lg font-semibold text-[#2A254B]">The Silky Vase</h3>
          <p className="text-[#2A254B]">£225</p>
        </div>

        {/* Card 4 */}
        <div className="w-[305px] h-[375px] bg-white  flex flex-col r">
          <img
            src="/lucy-lamp.png"
            alt="The Luxy Lamp"
            className="h-100 w-full object-cover mb-4 "
          />
          <h3 className="text-lg font-semibold text-[#2A254B]">The Luxy Lamp</h3>
          <p className="text-[#2A254B]">£399</p>
        </div>
      </div>

      {/* View Collection Button */}
      <button className="mt-32 gap-6 px-6 py-3 bg-gray-100 text-[#2A254B] text-lg hover:bg-gray-400 border border-gray-200">
        View Collection
      </button>
    </div>
  );
}

export default Listing