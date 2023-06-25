import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import Head from "next/head";
import Script from "next/script";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = ({ clearCart, cart, subTotal, addToCart, removeFromCart }) => {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [pincode, setPincode] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [user, setUser] = useState({value: null})

  useEffect(() => {
    const myuser =JSON.parse(localStorage.getItem('myuser'))
    
    if(myuser && myuser.token){
      setUser(myuser)
      setEmail(myuser.email)
      fetchData(myuser.token)
      
    }
  }, [])

  useEffect(() => {
    if(name.length>3 && email.length>3 && phone.length>3 && address.length>3 && pincode.length>3){
      setDisabled(false)
    }
    else{
      setDisabled(true)
    }
  }, [name , email , phone , pincode , address])
  
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
    getPincode(res.pincode)
  }

  const getPincode =async(pin)=>{
    let pins= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
          let pinJson = await pins.json();
          if(Object.keys(pinJson).includes(pin)){
            setState(pinJson[pin][1])
            setCity(pinJson[pin][0])
          }
          else{
            setState('')
            setCity('')
          }
  }

  const handleChange = async(e)=>{
    
      if(e.target.name == 'name'){
        setName(e.target.value)
      }
      else if(e.target.name == 'email'){
        setEmail(e.target.value)
      }
      else if(e.target.name == 'phone'){
        setPhone(e.target.value)
      }
      else if(e.target.name == 'address'){
        setAddress(e.target.value)
      }
      else if(e.target.name == 'pincode'){
        setPincode(e.target.value)
        if(e.target.value.length == 6){
          getPincode(e.target.value)
        }
        else{
          setState('')
          setCity('')
        }
      }
      
  }
  const initiatePayment = async()=>{
    let oid = Math.floor(Math.random() * Date.now())
    const data = {user , cart, subTotal, oid, email: email, name, address, pincode, phone}
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    })
    let txnRes = await a.json()
    // console.log(txnRes); 
    if(txnRes.success){
    let txnToken = txnRes.txnToken
    var config = {
      "root": "",
      "flow": "DEFAULT",
      "data": {
      "orderId": oid, /* update order id */
      "token": txnToken, /* update token value */
      "tokenType": "TXN_TOKEN",
      "amount": subTotal /* update amount */
      },
      "handler": {
      "notifyMerchant": function(eventName,data){
      console.log("notifyMerchant handler function called");
      console.log("eventName => ",eventName);
      console.log("data => ",data);
      }
      }
      };
      
      
      window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
      // after successfully updating configuration, invoke JS Checkout
      window.Paytm.CheckoutJS.invoke();
      }).catch(function onError(error){
      console.log("error => ",error);
      });
    }
    else{
      if(txnRes.cartClear){

        clearCart()
      }
      toast.error(txnRes.error, {
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
  return (
    <div className="container m-auto">
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
      <Head >
        <title>Checkout</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/></Head>
      <Script type="application/javascript" src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}  crossorigin="anonymous"/>
      <h1 className="font-bold text-xl my-8 text-center">Checkout</h1>
      <h2 className="font-semibold text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div class=" mb-4">
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
          <div class=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            {user && user.token?<input
              
              value={user.email}
              type="email"
              id="email"
              name="email"
              readOnly
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            /> :<input
            onChange={handleChange}
            value={email}
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />}
            
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div class=" mb-4">
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
          <div class=" mb-4">
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
          <div class=" mb-4">
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
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              value={state}
              onChange={handleChange}
              
              type="text"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class=" mb-4">
          <label htmlFor="city" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
            value={city}
            onChange={handleChange}
              type="text"
              
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
           
          </div>
        </div>
      </div>
      <h2 className="font-semibold text-xl">2. Review Cart Items & Pay</h2>
      <div className="sidebar  bg-yellow-100  p-8  m-2 ">
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 text-base font-semibold">
              Your cart is empty!
            </div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className=" font-semibold ">{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
                  <div className="w-1/3 flex text-lg font-semibold items-center justify-center ">
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-yellow-900"
                    />
                    <span className="mx-2">{cart[k].qty}</span>
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-yellow-900"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <span className="total font-bold">Subtotal : ₹{subTotal}</span>
      </div>
      <div className="mx-8"></div>
      <Link href={'/checkout'}> <button disabled={disabled} onClick={initiatePayment} className="disabled:bg-yellow-300 flex ml-3   text-white bg-yellow-900 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-600 rounded text-lg">
            <BsFillBagCheckFill className="m-1" />
            Pay ₹ {subTotal}
          </button></Link>
    </div>
  );
};

export default Checkout;
