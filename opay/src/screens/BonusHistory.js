import React from 'react'
import {  FaArrowLeft, FaCalendarCheck, FaDollarSign, FaMobile } from 'react-icons/fa'

function BonusHistory() {
  return (
    <div className=' bg-gray-100'>
         {/*Header Tab*/}
         <div className='flex justify-between bg-white fixed top-0 left-0 right-0 p-1'>
            <div className='flex items-center space-x-3'>
            <FaArrowLeft className='text-sm'/>
            <h3 className='font-bold text-xl'>History</h3>
            </div>
            
           
        </div>
          {/*Header end Tab*/}

           {/*switch button starthere */}
           <div className='mt-10 p-2 flex justify-evenly ' >

                <button className='bg-green-500 p-2 shadow-md rounded-full text-white text-base w-1/2'>Completed</button>
                <button className='bg-white p-2 shadow-md rounded-full text-black text-base  w-1/2'>Expired</button>

           </div>
            {/*switch button END here */}

             {/*bonus list  start here */}
             <div className='bg-white shadow mt-5'>
                <div className='pt-5'>
                <div className='flex justify-between shadow p-2 '>
                    <div className='flex items-center space-x-3'>
                            <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border'>
                                <FaCalendarCheck className='text-green-500 text-1xl'/>
                            </div>
                            <div>
                                    <p className='text-black font-bold'>Daily Cashback</p>
                                    <span className='text-sm font-medium text-gray-500'>2023-01-06 03:47:35</span>
                            </div>
                        
                    </div>

                    <div className=''>
                        <div className='flex items-center justify-center space-x-1'>
                        <FaDollarSign className='text-md bg-orange-500 text-white rounded-lg p-1'/>
                        <p className='text-bold text-orange-500 font-bold'>+10</p>
                        </div>
                        
                        <p className='text-green-600 font-medium    text-base'>is Available</p>
                    </div>


                </div>

                <div className='flex justify-between shadow p-2 mt-'>
                    <div className='flex items-center space-x-3'>
                            <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border'>
                                <FaCalendarCheck className='text-green-500 text-1xl'/>
                            </div>
                            <div>
                                    <p className='text-black font-bold'>Daily Cashback</p>
                                    <span className='text-sm font-medium text-gray-500'>2023-01-06 03:47:35</span>
                            </div>
                        
                    </div>

                    <div className=''>
                        <div className='flex items-center justify-center space-x-1'>
                        <FaDollarSign className='text-md bg-orange-500 text-white rounded-lg p-1'/>
                        <p className='text-bold text-orange-500 font-bold'>+3</p>
                        </div>
                        
                        <p className='text-green-600 font-medium    text-base'>is Available</p>
                    </div>


                </div>


                <div className='flex justify-between shadow p-2 '>
                    <div className='flex items-center space-x-3'>
                            <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border'>
                                <FaCalendarCheck className='text-green-500 text-1xl'/>
                            </div>
                            <div>
                                    <p className='text-black font-bold'>Daily Cashback</p>
                                    <span className='text-sm font-medium text-gray-500'>2023-01-06 03:47:35</span>
                            </div>
                        
                    </div>

                    <div className=''>
                        <div className='flex items-center justify-center space-x-1'>
                        <FaDollarSign className='text-md bg-orange-500 text-white rounded-lg p-1'/>
                        <p className='text-bold text-orange-500 font-bold'>+3</p>
                        </div>
                        
                        <p className='text-green-600 font-medium    text-base'>is Available</p>
                    </div>


                </div>


                <div className='flex justify-between shadow p-2 '>
                    <div className='flex items-center space-x-3'>
                            <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border'>
                                <FaCalendarCheck className='text-green-500 text-1xl'/>
                            </div>
                            <div>
                                    <p className='text-black font-bold'>Daily Cashback</p>
                                    <span className='text-sm font-medium text-gray-500'>2023-01-06 03:47:35</span>
                            </div>
                        
                    </div>

                    <div className=''>
                        <div className='flex items-center justify-center space-x-1'>
                        <FaDollarSign className='text-md bg-orange-500 text-white rounded-lg p-1'/>
                        <p className='text-bold text-orange-500 font-bold'>+3</p>
                        </div>
                        
                        <p className='text-green-600 font-medium    text-base'>is Available</p>
                    </div>


                </div>
                </div>
             </div>
    </div>
  )
}

export default BonusHistory