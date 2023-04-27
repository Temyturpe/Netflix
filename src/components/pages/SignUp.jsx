import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
       <div className="w-full h-screen">
          <img className='hidden md:block absolute w-full h-full object-cover' src="https://static.standard.co.uk/2022/11/16/10/netflix-s.jpg?width=1200" alt="/" />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-screen">
             <div className="fixed w-full px-4 py-20 z-50">
                 <div className="max-w-[450px] h-[550px] mx-auto bg-black/75 text-white">
                    <div className="max-w-[320px] mx-auto py-16">
                        <h1 className='text-3xl font-bold'>
                            Sign Up 
                        </h1>
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' autoComplete='email' className='p-3 my-2 bg-gray-700 rounded' />
                            <input onChange={(e) => setPassword(e.target.value)}  type="password" placeholder='Password' autoComplete='current-password'
                            className='p-3 my-2 bg-gray-700 rounded'/>
                            <button className='bg-red-600 py-3 my-6 rounded font-bold '>Sign Up</button>
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <p>
                                    <input type="checkbox"  className='mr-2'/> Remember me
                                </p>
                                <p>Need help?</p>
                            </div>
                            <p className='py-6'><span className='text-gray-600'>Already subscribed to Netflix?</span> <Link to='/login'>Sign In</Link> </p>
                        </form>
                    </div>
                 </div>
             </div>
          </div>
      </div>
      </>
  )
}

export default SignUp