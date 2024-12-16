import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export const Upperheader = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className=" flex justify-center items-center">
    <CiSearch className='flex  justify-items-start size-6 mx-5' />
    <nav className="flex items-center justify-center w-[1440px] h-[132px] bg-[#ffffff] pt-3 pb-3">
      <img src='/Avion.png' alt='logo'  /> 
      
    </nav>
    <MdOutlineShoppingCart className= 'size-6 mx-3 ' />
    <FaRegCircleUser className= 'size-6 mx-3 mr-11' />
    </div>
</header> 
    </div>
  )
} 

export default Upperheader

export const Header = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-8">
      <a className="mr-5 hover:text-gray-300">Plant pots</a>
      <a className="mr-5 hover:text-gray-300">Ceramics</a>
      <a className="mr-5 hover:text-gray-300">Tables</a>
      <a className="mr-5 hover:text-gray-300">Chairs</a>
      <a className="mr-5 hover:text-gray-300">Crockery</a>
      <a className="mr-5 hover:text-gray-300">Tableare</a>
      <a className="mr-5 hover:text-gray-300">Cutlery</a>
    </nav>

  </div>
</header>     
    </div>
  )
} 