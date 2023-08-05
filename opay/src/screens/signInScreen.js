import React from 'react'
import { FaArrowLeft, FaEnvelope, FaFingerprint, } from 'react-icons/fa'

function signInScreen() {
  return (
    <div>
        <div className='flex space-x-2 items-center  hover:bg-gray-100 p-2 w-25'>
            <FaArrowLeft className='text-green-500'/> <p>Sign In</p>
        </div>
        <div>
            <image src='' alt='opaylogo'/>
        </div>

        <form className='bg-white mt-4 p-5  w-50'>
          <div className='text-center mb-5'>
          <h3 className='text-purplr-500 text-2xl'>OPay</h3>
          </div>
          <div className='block'>
          
          <div className='w-full mb-3'>
          <input className='bg-grey-200 appearance-none border-2 border-grey-100 rounded w-full py-2 px-4 text-grey-700 leading-tight
          focus:outline-none focus:bg-white focus:border-green-500' type='text' placeholder='enter your mail' id='inline-full-name'></input>
          </div>
          
          
          <div className='  w-full'>
          <input className='bg-grey-200 appearance-none border-2 border-grey-100 rounded w-full py-2 px-4 text-grey-700 leading-tight
          focus:outline-none focus:bg-white focus:border-green-500' type='text' placeholder='enter password' id='inline-password' />

          </div>

          <div className='mt-5 space-y-4'>
          <button className='bg-green-400 text-white p-4 font-bold rounded-lg w-full hover:bg-grey-400' >Sign In</button>
          <button className='bg-light-400  text-green-500 border-green-500 border p-4 font-bold rounded-lg w-full hover:bg-grey-400' >Create a new account</button>
          </div>


          

          </div>

          <div className='text-center items-center  mt-5'>
            <p className='text-sm text-2xl'>Forgot password</p>
            <p className='text-sm text-gray-500'>Login with fingerprint</p>
          </div>
          <div className='flex items-center justify-center mt-1'>
                <i> <FaFingerprint className='text-green-500 text-3xl text-center  rounded-full p-1 border border-green-500 '/></i>

            </div>
         
        </form>
    <div className='flex items-center space-x-2 justify-center'>
    <FaEnvelope className='text-green-500'/> <p>Need Help? <span className='text-green-500'>Chat with OPay support</span> </p>
    </div>
        


    </div>
  )
}

export default signInScreen