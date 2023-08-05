import React from 'react'
import { FaArrowLeft, FaArrowRight, FaClock, FaUserAlt } from 'react-icons/fa'

function TransferScreen() {
  return (
    <div>
          {/*Header Tab*/}
         <div className='flex justify-between bg-white fixed top-0 left-0 right-0 p-1'>
            <div className='flex items-center space-x-3'>
            <FaArrowLeft className='text-sm'/>
            <h3 className='font-medium text-base text-gray-500'>Transfer to Bank Account</h3>
            </div>
            
           
        </div>
          {/*Header end Tab*/}
        <div className='flex items-center justify-between bg-gray-100 p-2 rounded'>
          

            <div className='flex items-center space-x-2 mt-5'>
                <div>
                    <FaClock className='bg-green-500 text-white p-1 rounded-full text-2xl'/>
                </div>
                <div>
                <p className='text-black font-medium'>Schedule Payments</p>
                                        <span className='text-sm  text-gray-500 '>schedule your recurring payment</span>
                </div>
            </div>

            <div className=''>
                        <FaArrowRight className='text-gray-300'/>
                        
                        
                    </div>
        </div>

        <div>
            <h4>Beneficiary</h4>
            <div className='flex space-x-5'>
                <div className=''>
                <FaUserAlt className='text-green-500 bg-green-200 p-1 text-3xl rounded-full '/>
                <span className='text-sm'>select beneficiary</span>
                </div>

                <div className=''>
                <FaUserAlt className='text-green-500 bg-green-200 p-1 text-3xl rounded-full '/>
                <span className='text-sm'>name</span>
                </div>

                <div className=''>
                <FaUserAlt className='text-green-500 bg-green-200 p-1 text-3xl rounded-full '/>
                <span className='text-sm'>name</span>
                </div>

                <div className=''>
                <FaUserAlt className='text-green-500 bg-green-200 p-1 text-3xl rounded-full '/>
                <span className='text-sm'>name</span>
                </div>
                

            </div>
        </div>

        <div>
        <form className='mt-4'>

                 <div>
                        <label className='block text-black   text-sm font-medium mb-2 ' >Bank</label>
                        <div className='w-full mb-4'>
                            <input  className='bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight
                        focus:outline-none focus:bg-white focus:border-green-500' type='text'></input>
                        </div>

                    </div>

                    <div>
                    <label className='block text-black   text-sm font-medium mb-2 ' >Account Number</label>
                    <div className='w-full mb-4'>
                        <input  className='bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight
                    focus:outline-none focus:bg-white focus:border-green-500' type='number'></input>
                    </div>

                    </div>

                    <div>
                    <label className='block text-black   text-sm font-medium mb-2 ' >Amount</label>
                    <div className='w-full mb-4'>
                        <input  className='bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight
                    focus:outline-none focus:bg-white focus:border-green-500' type='number'></input>
                    </div>

                    </div>

                    <div>
                    <label className='block text-black   text-sm font-medium mb-2 ' >Remark</label>
                    <div className='w-full mb-4'>
                        <input  className='bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight
                    focus:outline-none focus:bg-white focus:border-green-500' placeholder='optional' type='text'></input>
                    </div>

                    </div>

                    
                  
                   
                    <button className='text-white p-4 font-bold rounded-lg w-full hover:bg-purple-400 bg-green-500' >Proceed</button>
                </form>


        </div>
    </div>
  )
}

export default TransferScreen