import React from 'react'
import { FaArrowRight, FaClock, FaCog,   FaFacebookMessenger,  FaPiggyBank, FaPrint,  FaUserAlt, FaUserShield, FaWallet } from 'react-icons/fa'
import TabBar from '../Components/TabBar'
function ProfileScreen() {
    
  return (
    <div>
        {/* user details start here */}
        <div className='bg-green-500 text-white p-3'> 
        <div className='flex justify-between'>
            <div className='flex justify-center items-center space-x-3'>
                <FaUserAlt/>
                <div>
                    <h3 className='text-base font-bold'>Hello, Username</h3>
                   
                </div>
            </div>

            <FaCog/>
        </div>

        <div className='flex items-center bg-yellow-700 p-2 rounded-lg mt-3'>
            <p className='w-2/2'>Complete personal information and increase higher transactions</p>
            <div className='flex items-center space-x-1 rounded-lg bg-yellow-900 p-2 h-6  '>
                <button className='  '>Go </button>
                <FaArrowRight className='text-sm'/>
            </div>
            
        </div>

        </div>
        {/* user details end here */}

        <div className='mt-5'>
        <div className='flex items-center justify-between shadow p-2 '>
                    <div className='flex items-center space-x-3'>
                            <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border'>
                                <FaFacebookMessenger className='text-green-500 text-1xl'/>
                            </div>
                            <div>
                                    <p className='text-black font-bold'>Friends</p>
                                    <span className='text-sm  text-gray-500'>chat with friends and family</span>
                            </div>
                        
                    </div>

                    <div className=''>
                        <FaArrowRight className='text-green-600'/>
                        
                        
                    </div>


                </div>

                <div className='flex items-center justify-between shadow p-2 '>
                    <div className='flex items-center space-x-3'>
                            <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border'>
                                <FaPiggyBank className='text-green-500 text-1xl'/>
                            </div>
                            <div>
                                    <p className='text-black font-medium'>Total Assets</p>
                                    <span className='text-sm  text-gray-500'>view your total assets and earnings</span>
                            </div>
                        
                    </div>

                    <div className=''>
                        <FaArrowRight className='text-green-600'/>
                        
                        
                    </div>


                </div>


                <div className='flex items-center justify-between shadow p-2 '>
                    <div className='flex items-center space-x-3'>
                            <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border'>
                                <FaPrint className='text-green-500 text-1xl'/>
                            </div>
                            <div>
                                    <p className='text-black font-bold'>Transaction History</p>
                                    <span className='text-sm  text-gray-500'>view details of transactions</span>
                            </div>
                        
                    </div>

                    <div className=''>
                        <FaArrowRight className='text-green-600'/>
                        
                        
                    </div>


                </div>

                <div className='flex items-center justify-between shadow p-2 '>
                    <div className='flex items-center space-x-3'>
                            <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border'>
                                <FaWallet className='text-green-500 text-1xl'/>
                            </div>
                            <div>
                                    <p className='text-black font-bold'>Bank Card/Account</p>
                                    <span className='text-sm  text-gray-500'>1 linked card/account</span>
                            </div>
                        
                    </div>

                    <div className=''>
                        <FaArrowRight className='text-green-600'/>
                        
                        
                    </div>


                </div>

                <div className='flex items-center justify-between shadow p-2 '>
                    <div className='flex items-center space-x-3'>
                            <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border'>
                                <FaClock className='text-green-500 text-1xl'/>
                            </div>
                            <div>
                                    <p className='text-black font-bold'>Schedule Payments</p>
                                    <span className='text-sm  text-gray-500'>schedule your recurring payment</span>
                            </div>
                        
                    </div>

                    <div className=''>
                        <FaArrowRight className='text-green-600'/>
                        
                        
                    </div>


                </div>

                <div className='flex items-center justify-between shadow p-2 '>
                    <div className='flex items-center space-x-3'>
                            <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border'>
                                <FaUserShield className='text-green-500 text-1xl'/>
                            </div>
                            <div>
                                    <p className='text-black font-bold'>Schedule Payments</p>
                                    <span className='text-sm  text-gray-500'>schedule your recurring payment</span>
                            </div>
                        
                    </div>

                    <div className=''>
                        <FaArrowRight className='text-green-600'/>
                        
                        
                    </div>


                </div>
        </div>

        <TabBar/>
    </div>
  )
}

export default ProfileScreen