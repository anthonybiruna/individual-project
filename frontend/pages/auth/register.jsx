import Link from 'next/link'
import React from 'react'

function Register() {

  return (
      
    <div className='flex h-screen justify-center item-center'>
        <div className='m-auto bg-blue-300 rounded-xl shadow-lg '>
            <div className='m-5'>

                <p className='flex justify-center font-bold text-xl text-white'> Register Yuk</p>

                <div className='mt-5'>
                    <input className='rounded-full' type="text" placeholder='username' />
                </div>

                <div className='mt-5'>
                    <input className='rounded-full' type="text" placeholder='email' />
                </div>

                <div className='mt-5'>
                    <input className='rounded-full' type="password" placeholder='password' />
                </div>

                <div className='mt-5'>
                    <input className='rounded-full' type="password" placeholder='password' />
                </div>

                <Link href="/auth/login">
                <button className='bg-blue-500 hover:bg-blue-600 text-white rounded-full mt-5 p-2 w-full' type='submit'>Register</button>
                </Link>
            
            </div>
          
        </div>
    </div>
  )
}

export default Register