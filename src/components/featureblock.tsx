import React from 'react'

const Featureblock = () => {
  return (
    <div>

      {/* Features Section */}
      <div className="w-full h-auto pb-16 py-11 ">
        <h1 className="text-center text-[#2A254B] text-xl font-Clash-Display">What makes our brand different</h1>
        <div className="flex flex-wrap justify-center md:justify-evenly px-4 py-10 gap-8">
          {[
            {
              img: "/Delivery.png",
              title: "Next day as standard",
              desc: "Order before 3pm and get your order the next day as standard",
            },
            {
              img: "/Checkmark.png",
              title: "Made by true artisans",
              desc: "Handmade crafted goods made with real passion and craftsmanship",
            },
            {
              img: "/Purchase.png",
              title: "Unbeatable prices",
              desc: "For our materials and quality you won’t find better prices anywhere",
            },
            {
              img: "/Sprout.png",
              title: "Recycled packaging",
              desc: "We use 100% recycled materials to ensure our footprint is more manageable",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#F9F9F9] text-[#2A254B] w-72 h-auto rounded-sm px-5 py-12 text-center  hover:bg-slate-200"
            >
             
              <h1 className="text-custom-purple text-lg mt-4">{item.title}</h1>
              <p className="text-custom-purple mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

     </div>
  );
};

export default Featureblock;