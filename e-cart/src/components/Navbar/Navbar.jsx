import React from 'react'
import {FiSearch} from 'react-icons/fi'
import { FiUser } from 'react-icons/fi'
import {BsCart} from 'react-icons/bs'
import {BsShop} from 'react-icons/bs'

function Navbar() {
  return (
    <nav className='w-full max-h-20  fixed bg-white shadow-md '>
        {/* this is the navbar content */}
        <div className='flex items-center justify-around'>
            {/* title of the webiste */}
            <div className='p-4 '>
                <p className='text-blue-600 font-bold font-sans text-xl leading-tight'>Flipkart</p>
                <p className='text-yellow-600 leading-tight font-bold float-end mr-2'>Plus</p>

            </div>
            {/* Search bar */}
            <div className='p-4 w-[40%] flex items-center'>
                <div className='w-full h-9 bg-slate-200 flex items-center px-3 rounded-lg'>
                    <FiSearch className='size-7 text-slate-500 '/>
                    <input type="text" className='w-full outline-none px-4 bg-slate-200' placeholder='Search for products,Brands and More'/>

                </div> 

            </div>

            {/* menu options */}
            <div className='flex gap-16'>

                <div className='text-center'>
                    <FiUser className='size-6 inline'/>
                    <p className='inline px-1 '>Login</p>
                </div>
                <div className='text-center'>
                    <BsCart className='size-6 inline'/>
                    <p className='inline px-1 '>Cart</p>
                </div>

                <div className='text-center'>
                    <BsShop className='size-6 inline'/>
                    <p className='inline px-1 '>Become a Seller</p>
                </div>
                

            </div>

        </div>

      
    </nav>
  )
}

export default Navbar
