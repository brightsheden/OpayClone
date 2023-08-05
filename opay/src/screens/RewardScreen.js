import React from 'react'
import { FaArrowRight, FaDollarSign, FaMobile, FaMoneyBill, FaQuestion } from 'react-icons/fa'
import TabBar from '../Components/TabBar'

function RewardScreen() {
  return (
    <div className='container bg-gray-100 mx-auto relative'>
        {/*Header Tab*/}
        <div className='flex justify-between bg-white fixed top-0 left-0 right-0 p-1 '>
            <h3 className='font-bold text-xl'>Rewards</h3>
            <p className='text-green-800 text-base'>Rules</p>
        </div>

         {/*Cash Back details card start here*/}
         <div className='mt-10 bg-white shadow p-2 '>
            <div className='flex justify-between  space-x-2 '>
                <div className='bg-gray-200 p-2 rounded-lg space-y-3 w-1/2'>
                    <div className='flex items-center space-x-3 '>
                        <FaDollarSign className='text-md bg-orange-500 text-white rounded-lg p-1'/>
                        <p className='text-sm'>Cashback</p>
                        <FaQuestion className='text-md text-gray-500 border border-1 rounded-full border-gray-600 p-1'/>
                    </div>

                    <div className='flex justify-between items-center space-x-3 '>
                        <p className='text-green-500 font-bold text-2xl'>#450.00</p>
                        <FaArrowRight className='text-sm text-gray-500'/>
                    </div>
                </div>

                <div className='bg-gray-200 rounded-lg space-y-3 p-2 w-1/2'>
                    <div className='flex items-center space-x-3'>
                        <FaMoneyBill className='text-green-500 '/>
                        <p className='text-green-500 text-base font-medium'>Voucher</p>
                      
                    </div>
                    <div className='flex justify-between items-center space-x-3 '>
                        <p className='text-green-500 font-bold text-2xl'>0</p>
                        <FaArrowRight className='text-sm text-gray-500'/>
                    </div>
                </div>
            </div>

            {/* second card section*/}
            <div className='mt-3'>
                <h3 className='text-black text-sm font-bold'>Daily Cashback</h3>
                <p className='text-sm text-gray-500 '>You've earned <span className='text-orange-600 font-medium'>#70</span> cashbark</p>
                {/*bonus buttons start here*/}
                <div className='flex space-x-3 mt-2'>
                    <div className='w-20 text-center'>
                        <p className='bg-gray-400 rounded-full text-gray-700 '>10</p>
                        <span>2.2</span>
                    </div>

                    <div className='w-20 text-center'>
                    <p className='bg-gray-400 rounded-full text-gray-700 '>10</p>
                        <span>2.2</span>
                    </div>

                    <div className='w-20 text-center'>
                        <p className='bg-green-200 rounded-full text-green-700 '>10</p>
                        <span>2.2</span>
                    </div>

                    <div className='w-20 text-center'>
                        <p className='bg-green-700 rounded-full text-white '>10</p>
                        <span>2.2</span>
                    </div>

                    <div className='w-20 text-center'>
                         <p className='bg-green-200 rounded-full text-green-700 '>10</p>
                        <span>2.2</span>
                    </div>

                    <div className='w-20 text-center'>
                         <p className='bg-green-200 rounded-full text-green-700 '>10</p>
                        <span>2.2</span>
                    </div>

                    <div className='w-20 text-center'>
                         <p className='bg-green-200 rounded-full text-green-700 '>10</p>
                        <span>2.2</span>
                    </div>
                </div>
                 {/*bonus buttons end here*/}

                 <div className='text-white bg-green-400 rounded-full text-center p-1 mt-3'>
                    <p className='text-white font-medium text-base'>You have signed in today</p>
                    
                 </div>

                
            </div>
         </div>
         {/*Cash Back details card end here*/}

         {/*advert. card start here*/}
         <div className='bg-green-200 rounded p-5 mt-4 text-center'>
            <p>Advert</p>

         </div>
         {/*advert. card end here*/}

         {/*Bonus History start here*/}
         <div className='bg-white shadow mt-4'>
            <div className='flex justify-between shadow p-2'>
                <p className='font-bold'>All Bonus</p>
                <div className='flex items-center space-x-3'><p className='text-sm text-gray-500'>History</p> <FaArrowRight className='text-sm text-gray-500'/></div>
            </div>

            <div className='text-center mt-5'>
                <h3 className='font-medium  '>Time-limited</h3>
                <p className='bg-green-500 mt-2 ml-8  rounded-full p-1 w-10' style={{marginLeft:'155px'}}></p>
            </div>

            <div>
                <div className='flex justify-between shadow p-2'>
                    <div className='flex items-center space-x-3'>
                            <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border'>
                                <FaMobile className='text-green-500 text-1xl'/>
                            </div>
                            <div>
                                    <p className='text-black font-bold'>Buy Airtime</p>
                                    <span className='text-sm font-medium text-gray-500'>Buy airtime and get 3% cashbark</span>
                            </div>
                        
                    </div>

                    <div className=''>
                        <div className='flex items-center justify-center space-x-1'>
                        <FaDollarSign className='text-md bg-orange-500 text-white rounded-lg p-1'/>
                        <p className='text-bold text-orange-500 font-bold'>+3</p>
                        </div>
                        
                        <p className='bg-green-500 text-white p-2  rounded-full text-base'>Go</p>
                    </div>


                </div>

                <div className='flex justify-between shadow p-2'>
                    <div className='flex items-center space-x-3'>
                            <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border'>
                                <FaMobile className='text-green-500 text-1xl'/>
                            </div>
                            <div>
                                    <p className='text-black font-bold'>Buy Airtime</p>
                                    <span className='text-sm font-medium text-gray-500'>Buy airtime and get 3% cashbark</span>
                            </div>
                        
                    </div>

                    <div className=''>
                        <div className='flex items-center justify-center space-x-1'>
                        <FaDollarSign className='text-md bg-orange-500 text-white rounded-lg p-1'/>
                        <p className='text-bold text-orange-500 font-bold'>+3</p>
                        </div>
                        
                        <p className='bg-green-500 text-white p-2  rounded-full text-base'>Go</p>
                    </div>


                </div>

                <div className='flex justify-between shadow p-2 '>
                    <div className='flex items-center space-x-3'>
                            <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border'>
                                <FaMobile className='text-green-500 text-1xl'/>
                            </div>
                            <div>
                                    <p className='text-black font-bold'>Buy Airtime</p>
                                    <span className='text-sm font-medium text-gray-500'>Buy airtime and get 3% cashbark</span>
                            </div>
                        
                    </div>

                    <div className=''>
                        <div className='flex items-center justify-center space-x-1'>
                        <FaDollarSign className='text-md bg-orange-500 text-white rounded-lg p-1'/>
                        <p className='text-bold text-orange-500 font-bold'>+3</p>
                        </div>
                        
                        <p className='bg-green-500 text-white p-2  rounded-full text-base'>Go</p>
                    </div>


                </div>

                

            </div>
         </div>
        <TabBar/>
    </div>
  )
}

export default RewardScreen