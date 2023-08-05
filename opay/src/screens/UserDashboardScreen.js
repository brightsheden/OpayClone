import React from 'react'
import {  FaArrowDown, FaArrowRight, FaArrowUp, FaBell,  FaEye, FaMarkdown, FaMicrophone,  FaMobile,   FaMoneyBillWave, FaNetworkWired, FaPhone, FaQrcode, FaTrash, FaUser, FaUserAlt, FaUserCircle } from 'react-icons/fa'
import TabBar from '../Components/TabBar'

function UserDashboardScreen() {
  return (
    <div className='relative'>
    {/*header Tab*/}
    <div className='flex  justify-between mb-2'>
        <div className='flex  space-x-3'>
            <FaUserCircle className='text-2xl'/> 
            <div>
            <p>Hello User</p>
            <FaMarkdown className='invisible text-2xl text-gray-500'/>
            </div>
           

        </div>

        <div className='flex space-x-4'>
            <FaUserAlt className='text-2xl text-gray-500'/>
            <FaQrcode className='text-2xl text-gray-500'/>
            <FaBell className='text-2xl text-gray-500'/>
        </div>
      
    </div>

     {/*User Card*/}
     <div className='bg-green-500 p-3 text-white rounded'>

        <div className='flex  justify-between'>
            <div className='flex items-center space-x-3'> <span>Total Balance </span>
            <FaEye/></div>

            <div className='flex items-center space-x-3'>
                <span>Transaction History</span>
                <FaArrowRight/>
            </div>
           
        </div>
        <div className='text-2xl font-bold mb-5 '>
            #500000
        </div>
        <div className='flex justify-between '>
           {/* <div>
                <div className=' flex items-center justify-center bg-white p-2 rounded-lg w-20' >
                    <FaArrowDown className='text-xl text-green-500 w-20 '/>

                </div>
                
                Add money
            </div>    
  */}
            
            
            <div className='space-y-1 text-center' >
                <FaArrowDown className='bg-white text-green-500 text-3xl p-1 rounded'/>
                <p>
                    Add money
                </p>
            </div>
            
            <div className='space-y-1'>
                <FaNetworkWired className='bg-white text-green-500 text-3xl p-1 rounded'/>
                <p>
                    transfer
                </p>
                
            </div>
            <div className='space-y-1'>
                <FaArrowUp className='bg-white text-green-500 text-3xl rounded'/>
                <p>
                withdraw
                </p>
                
            </div>
        </div>

     </div>

     {/*Bills Payment*/}
     <div className='mt-3'>
        <h3 className='font-bold'>Payments</h3>
        <div className='grid grid-cols-4 gap-6 mt-4'>
            <div>
                <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border '>
                    <FaPhone className='text-1xl text-green-500 '/>

                </div>
                
                <p>Airtime</p>
            </div>

            <div>
                <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border'>
                <FaMobile className='text-green-500 text-1xl'/>
                </div>

                
                <p>data</p>
            </div>


            <div>
                <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border '>
                    <FaPhone className='text-1xl text-green-500 '/>

                </div>
                
                <p>Airtime</p>
            </div>

            <div>
                <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border'>
                <FaMobile className='text-green-500 text-1xl'/>
                </div>

                
                <p>data</p>
            </div>

            <div>
                <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border '>
                    <FaPhone className='text-1xl text-green-500 ' style={{padding:'none',margin:'none'}}/>

                </div>
                
                <p>Airtime</p>
            </div>

            <div>
                <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border'>
                <FaMobile className='text-green-500 text-1xl'  />
                </div>

                
                <p>data</p>
            </div>

            <div>
                <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border '>
                    <FaPhone className='text-1xl text-green-500 '/>

                </div>
                
                <p>Airtime</p>
            </div>

            <div>
                <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border'>
                <FaMobile className='text-green-500 text-1xl'/>
                </div>

                
                <p>data</p>
            </div>


        </div>
     </div>

     {/*Bills Payment*/}
     <div className='flex items-center space-x-2 mt-4 bg-gray-200 rounded-lg p-2' >
        <FaMicrophone/>
        <p>Earn up to %15 annual interest</p>
     </div>


     {/*Refer and eaen dic*/}
     <div className='flex  items-center shadow p-2 justify-between mt-4'>
        <div className='flex  items-center space-x-2 '>

        <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border '>
                    <FaMoneyBillWave className='text-1xl text-green-500 '/>

                </div>
        <div >
            <h3 className='text-1xl font-bold'>Refer & Earn</h3>
            <p className='text-2md text-gray-500 '>Earn #800 Cash Back per referal</p>
        </div>

        </div>

        <FaTrash/>
        

     </div>

     <div className='flex  items-center shadow p-2 justify-between mt-4'>
        <div className='flex  items-center space-x-2 '>

        <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border '>
                    <FaMoneyBillWave className='text-1xl text-green-500 '/>

       </div>
        <div >
            <h3 className='text-1xl font-bold'>Refer & Earn</h3>
            <p className='text-2md text-gray-500 '>Earn #800 Cash Back per referal</p>
        </div>

        

        </div>

        <FaTrash/>
        

     </div>


     <div className='flex  items-center shadow p-2 justify-between mt-4'>
        <div className='flex  items-center space-x-2 '>

        <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border '>
                    <FaMoneyBillWave className='text-1xl text-green-500 '/>

       </div>
        <div >
            <h3 className='text-1xl font-bold'>Refer & Earn</h3>
            <p className='text-2md text-gray-500 '>Earn #800 Cash Back per referal</p>
        </div>

        

        </div>

        <FaTrash/>
        

     </div>


     <div className='flex  items-center shadow p-2 justify-between mt-4'>
        <div className='flex  items-center space-x-2 '>

        <div className='bg-green-200 p-3 w-10 rounded-full border-green-500 border '>
                    <FaMoneyBillWave className='text-1xl text-green-500 '/>

       </div>
        <div >
            <h3 className='text-1xl font-bold'>Refer & Earn</h3>
            <p className='text-2md text-gray-500 '>Earn #800 Cash Back per referal</p>
        </div>

        

        </div>

        <FaTrash/>
        

     </div>



        <TabBar/>
    </div>
  )
}

export default UserDashboardScreen