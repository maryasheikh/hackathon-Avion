import React from 'react'

const Footer = () => {
  return (

    <div>
<footer className="w-auto h-[380px] bg-[#2A254B] text-white pr-20">
  <div className="container mx-auto py-12 px-8">
    <div className="flex flex-wrap md:text-left text-center">
      {/* Menu Section */}
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="text-sm font-medium tracking-widest mb-4">Menu</h2>
        <nav className="list-none space-y-2">
          <li>
            <a className="hover:underline">New arrivals</a>
          </li>
          <li>
            <a className="hover:underline">Best sellers</a>
          </li>
          <li>
            <a className="hover:underline">Recently viewed</a>
          </li>
          <li>
            <a className="hover:underline">Popular this week</a>
          </li>
          <li>
            <a className="hover:underline">All products</a>
          </li>
        </nav>
      </div>

      {/* Categories Section */}
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="text-sm font-medium tracking-widest mb-4">Categories</h2>
        <nav className="list-none space-y-2">
          <li>
            <a className="hover:underline">Crockery</a>
          </li>
          <li>
            <a className="hover:underline">Furniture</a>
          </li>
          <li>
            <a className="hover:underline">Homeware</a>
          </li>
          <li>
            <a className="hover:underline">Plant pots</a>
          </li>
          <li>
            <a className="hover:underline">Chairs</a>
          </li>
          <li>
            <a className="hover:underline">Crockery</a>
          </li>
        </nav>
      </div>

      {/* Our Company Section */}
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="text-sm font-medium tracking-widest mb-4">Our Company</h2>
        <nav className="list-none space-y-2">
          <li>
            <a className="hover:underline">About us</a>
          </li>
          <li>
            <a className="hover:underline">Vacancies</a>
          </li>
          <li>
            <a className="hover:underline">Contact us</a>
          </li>
          <li>
            <a className="hover:underline">Privacy</a>
          </li>
          <li>
            <a className="hover:underline">Returns policy</a>
          </li>
        </nav>
      </div>

      {/* Mailing List Section */}
      <div className="lg:w-1/4 md:w-1/2 w-full px-8">
        <h2 className="text-sm font-medium tracking-widest mb-4">Join our mailing list</h2>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:w-auto bg-gray-700 text-white  border-none py-3 px-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className=" lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-[#2A254B] bg-white border-0 py-3 px-6  space-x-6 focus:outline-none hover:bg-gray-500 ">
            Sign up
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="border-t border-white/20 py-4">
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
      <p className="text-sm">
        Copyright © 2023 Avion LTD
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

      <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>

      <a className="text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            
          </svg>
        </a>

        <a className="ml-3 text-gray-500">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
    
      <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        </span>
      
      <div className="flex space-x-4 mt-4 sm:mt-0">
        <a href="#" className="hover:text-indigo-500">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="hover:text-indigo-500">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="hover:text-indigo-500">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
  
</footer>
</div>
  )
}

export default Footer