import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  const [npassword, setNpassword] = useState('')
  const [user, setUser] = useState({ value: null });

  let router = useRouter();
  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (!myuser) {
      router.push("/");
    }
    if (myuser && myuser.token) {
      setUser(myuser);
      setEmail(myuser.email);
      fetchData(myuser.token)
    }
  }, []);

  const fetchData = async(token)=>{
    let data = {token:token}
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    })
    let res = await a.json()
    
    setName(res.name)
    setAddress(res.address)
    setPincode(res.pincode)
    setPhone(res.phone)
  }

  const handleUserSubmit = async()=>{
    let data= {token:user.token , address , name , phone , pincode}
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser`, {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    })
    let res = await a.json()
    if(res.success){

      toast.success("Successfully Updated Details", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
    }
  }
  const handlePasswordSubmit = async()=>{
    let res;
    if(npassword == cpassword){

    
    let data= {token:user.token , password , cpassword, npassword}
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatepassword`, {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    })
    res = await a.json()
  }else{
    res = {success : false}
  }
    if(res.success){

      toast.success("Successfully Updated Password", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        
      }else{
        
        toast.error("Error Updating Password", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    }
    setPassword('')
    setCpassword('')
    setNpassword('')
  }

  

  const handleChange = async (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    }  else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "address") {
      setAddress(e.target.value);
    } else if (e.target.name == "pincode") {
      setPincode(e.target.value);
    }else if(e.target.name == "password"){
      setPassword(e.target.value)
    }
    else if(e.target.name == "cpassword"){
      setCpassword(e.target.value)
    }else if(e.target.name == 'npassword'){
      setNpassword(e.target.value)
    }
  };

  return (
    <div className="container mx-auto">
      <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      <h1 className="text-3xl text-center font-bold">Update Your Account</h1>
      <h2 className="font-semibold text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              onChange={handleChange}
              value={name}
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email(cannot be updated)
            </label>
            {user && user.token ? (
              <input
                value={user.email}
                type="email"
                id="email"
                name="email"
                readOnly
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            ) : (
              <input
                onChange={handleChange}
                value={email}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            )}
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div className=" mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Address
          </label>

          <textarea
            onChange={handleChange}
            value={address}
            name="address"
            id="address"
            cols="30"
            rows="2"
            className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone Number
            </label>
            <input
              onChange={handleChange}
              placeholder="Your 10 Digit Phone Number"
              value={phone}
              type="phone"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              PinCode
            </label>
            <input
              onChange={handleChange}
              value={pincode}
              type="text"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <button onClick={handleUserSubmit} className="disabled:bg-yellow-300 flex ml-3 mb-5 m-2 text-white bg-yellow-900 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-600 rounded text-md">
           
           Submit
          </button>
      <h2 className="font-semibold text-xl">2. Change Password</h2>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              onChange={handleChange}
              value={password}
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
          <label htmlFor="npassword" className="leading-7 text-sm text-gray-600">
             New Password
            </label>
            <input
              onChange={handleChange}
              value={npassword}
              type="password"
              id="npassword"
              name="npassword"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
          <label htmlFor="cpassword" className="leading-7 text-sm text-gray-600">
             Confirm New Password
            </label>
            <input
              onChange={handleChange}
              value={cpassword}
              type="password"
              id="cpassword"
              name="cpassword"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            
          </div>
        </div>
        
      </div>
      <button onClick={handlePasswordSubmit} className="disabled:bg-yellow-300 flex ml-3 mb-5 m-2 text-white bg-yellow-900 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-600 rounded text-md">
           
           Submit
          </button>
      
    </div>
  );
};


export default MyAccount;
