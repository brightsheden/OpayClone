import React from 'react'
import { FaCog, FaEye, FaGrinTears, FaMoneyBill, FaPiggyBank, FaScrewdriver, FaWallet } from 'react-icons/fa'
import TabBar from '../Components/TabBar'

function FinanceScreen() {
  return (
    <div>
         {/*Header Tab*/}
         <div className='flex justify-between bg-white fixed top-0 left-0 right-0 p-1 '>
            <h3 className='font-bold text-xl'>Finance</h3>
          
        </div>
        {/*Header Tab end her */}


           {/*advert. card start here*/}
           <div className='bg-green-200 mt-12 rounded p-5 mt-4 text-center'>
            <p>Advert</p>

         </div>
         {/*advert. card end here*/}

          {/*finance packages start here*/}
          <div>
            <div className='flex justify-between pt-2'>
                <button className='text-green-500 font-medium bg-white p-3 rounded w-1/2'>Savings</button>
                <button className='text-black font-medium bg-gray-200 p-3 rounded w-1/2'>Loan</button>
            </div>
            {/*balance details start here*/}
            <div className='flex justify-between mt-5'>
                <div className='flex items-center space-x-3'>
                <p>Balance: <span  className='text-green-500 font-bold' >#50000</span></p>
                <FaEye/>
                </div>

                <FaCog className='text-green-500'/>
               
          
            </div>
            {/*balance details end here*/}

             {/*packages start here*/}
            <div className='grid grid-cols-2 space-y-3 gap-2'>
                <div className='bg-purple-100 p-2 rounded-lg'>
                    <FaMoneyBill className='text-purple-500 text-2xl'/>
                    <h3 className='text-purple-600 font-bold'>OWealth</h3>
                    <p className='text-sm w-2/2 my-4'>
                        Enjoy daily return and withdraw at any time.Up to 15% p.a
                    </p>
                    <span className='text-purple-600 font-bold'>
                        #3,000
                    </span>

                </div>

                <div className='bg-blue-100 p-2 rounded-lg'>
                    <FaPiggyBank className='text-blue-500 text-2xl'/>
                    <h3 className='text-blue-600 font-bold'>Targets</h3>
                    <p className='text-sm w-2/2 my-4'>
                        Enjoy daily return and withdraw at any time.Up to 15% p.a
                    </p>
                    <span className='text-blue-600 font-bold'>
                        #3,000
                    </span>

                </div>


                <div className='bg-red-100 p-2 rounded-lg'>
                    <FaWallet className='text-red-500 text-2xl'/>
                    <h3 className='text-red-600 font-bold'>SafeBox</h3>
                    <p className='text-sm w-2/2 my-4'>
                        Enjoy daily return and withdraw at any time.Up to 15% p.a
                    </p>
                    <span className='text-red-600 font-bold'>
                        #3,000
                    </span>

                </div>



                <div className='bg-green-100 p-2 rounded-lg'>
                    <FaPiggyBank className='text-green-500 text-2xl'/>
                    <h3 className='text-green-600 font-bold'>Fixed</h3>
                    <p className='text-sm w-2/2 my-4'>
                        Enjoy daily return and withdraw at any time.Up to 15% p.a
                    </p>
                    <span className='text-green-600 font-bold'>
                        #3,000
                    </span>

                </div>

            </div>
          </div>
          {/*finance packages end here*/}

          <TabBar/>

    </div>
  )
}

export default FinanceScreen