import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const SignUp = () => {
  const router = useRouter()
  useEffect(() => {
    if(localStorage.getItem('token')){
      router.push('/')
    }
  }, [])
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e)=>{
    if(e.target.name == 'name'){
      setName(e.target.value)
    }
    else if(e.target.name == 'email'){
      setEmail(e.target.value)
    }
    else if(e.target.name == 'password'){
      setPassword(e.target.value)
    }
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = {name , email , password}
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup` , {
      method : 'POST' ,
      headers : {
        "Content-Type": "application/json" , 
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log(response);
    setEmail("")
    setName("")
    setPassword("")
    toast.success('Your account has been created!', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <div>
      <ToastContainer
position="top-left"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

    <div className="flex min-h-screen flex-col  px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="/logo-no-background.png" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up for an account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit} className="space-y-6"  method="POST">
      <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
        <div className="mt-2">
          <input onChange={handleChange} value={name} id="name" name="name" type="text" autocomplete="email" required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input onChange={handleChange} value={email} id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
         
        </div>
        <div className="mt-2">
          <input onChange={handleChange} value={password} id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">Sign Up</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Already a member?
      <Link href="/login" className="font-semibold leading-6 text-yellow-600 hover:text-yellow-500"> Sign In</Link>
    </p>
  </div>
</div>
</div>
  )
}

export default SignUp