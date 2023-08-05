import React from 'react'
import { FaBox, FaBoxOpen,  FaChartLine, FaHome,  FaUserCircle, FaWallet } from 'react-icons/fa'

function TabBar() {
  return (
    <div className='bg-white shadow-md  z-50 fixed bottom-0 left-0 right-0 rounded-lg '>
        <ul className='flex flex-wrap  justify-between mt-1 p-1'>
            <l1>
                <FaHome className='text-2xl text-green-500 '/>
                <p className='inline-block text-green-600 hover:bg-green-500   font-medium ' >Home</p>
            </l1>
            <l1>
                <FaBoxOpen className='text-2xl text-gray-500 hover:text-green-500'/>
                <p className='inline-block text-green-600 hover:bg-green-500   font-medium ' >Reward</p>
            </l1>

             <l1 className='text-center'>
                <FaChartLine className='text-2xl text-gray-500'/>
                <p className='inline-block text-green-600 hover:bg-green-500   font-medium ' >Finance</p>
            </l1>

             <l1>
                <FaWallet className='text-2xl text-gray-500'/>
                <p className='inline-block text-green-600 hover:bg-green-500   font-medium ' >Cards</p>
            </l1>

            
            <l1>
                <FaUserCircle className='text-2xl text-gray-500'/>
                <p className='inline-block text-green-600 hover:bg-green-500   font-medium ' >Me</p>
            </l1>
        </ul>
    </div>
  )
}

export default TabBar