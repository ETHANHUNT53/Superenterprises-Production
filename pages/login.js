import React from 'react'
import Link from 'next/link'
import { useState , useEffect } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if(localStorage.getItem('myuser')){
      router.push('/')
    }
  }, [])
  

  const handleChange = (e)=>{
   if(e.target.name == 'email'){
      setEmail(e.target.value)
    }
    else if(e.target.name == 'password'){
      setPassword(e.target.value)
    }
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = {email , password}
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method : 'POST' ,
      headers : {
        "Content-Type": "application/json" , 
        "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log(response);
    setEmail("")
    setPassword("")
    if(response.success){
      localStorage.setItem('myuser' , JSON.stringify({token : response.token, email : response.email }))
      toast.success('You are successfully logged in', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(()=>{

          router.push(process.env.NEXT_PUBLIC_HOST)
        },1000)
    }
    else{
      toast.error(response.error, {
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
  }
  return (
    <div className="flex min-h-screen flex-col  px-6 py-12 lg:px-8">
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
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="/logo-no-background.png" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit} className="space-y-6"  method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input value={email} onChange={handleChange} id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="mt-2">
          <input value={password} onChange={handleChange} id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"/>
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <Link href="/forgot" className="font-semibold text-yellow-600 hover:text-yellow-500">Forgot password?</Link>
          </div>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <Link href="/signup" className="font-semibold leading-6 text-yellow-600 hover:text-yellow-500"> Sign Up</Link>
    </p>
  </div>
</div>
  )
}

export default Login