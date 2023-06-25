import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillCloseCircle,
  AiOutlineShoppingCart,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useState , useEffect } from "react";
import { useRouter } from "next/router";


const Header = ({logout,user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {

  const [dropdown, setDropdown] = useState(false)
  const [sidebar, setSidebar] = useState(false)
  const router = useRouter()

  useEffect(() => {
    Object.keys(cart).length !== 0 && setSidebar(true)
    let exempted = ['/checkout' , '/order' , '/orders','/myaccount','/']
    if(exempted.includes(router.pathname)){
      setSidebar(false)
    }
  }, [])
  
  
  const ref = useRef();
  const toggleCart = () => {
    setSidebar(!sidebar)
    // if (ref.current.classList.contains("translate-x-full")) {
    //   ref.current.classList.remove("translate-x-full");
    //   ref.current.classList.add("translate-x-0");
    // } else if (!ref.current.classList.contains("translate-x-full")) {
    //   ref.current.classList.remove("translate-x-0");
    //   ref.current.classList.add("translate-x-full");
    // }
  };

  return (
    <>
    {!sidebar && <a onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} className="fixed right-9 cursor-pointer top-4 z-30">
       {dropdown && <div  className="absolute right-5  z-30  bg-white shadow-lg border top-5 py-3 rounded-md px-5 w-32">
        <ul>
          <Link href={'/myaccount'}><li className="py-2 text-sm hover:text-red-700 font-bold cursor-pointer">My Account</li></Link>
          <Link href={'/orders'}><li className="py-2 text-sm hover:text-pink-700 font-bold cursor-pointer">My Orders</li></Link>
          <li onClick={logout} className="py-2 text-sm hover:text-pink-700 font-bold cursor-pointer">Logout</li>
        </ul>
       </div>}

   
       {user.value && <MdAccountCircle  className="text-3xl  md:text-2xl mx-3"/>}
       
       </a>}
    <div className={`flex sticky top-0 z-10 bg-white flex-col md:flex-row md:justify-start justify-center items-center shadow-md ${!sidebar && 'overflow-hidden'}`}>
      <div className="logo mr-auto md:mx-5 my-5">
        <Link href={"/"}>
          {" "}
          <Image src={"/logo-no-background.png"} width={200} height={40} />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md">
          <Link href={"/tshirts"}>
            <li className="hover:text-yellow-500">Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li className="hover:text-yellow-500">Hoodies</li>
          </Link>
          <Link href={"/stickers"}>
            <li className="hover:text-yellow-500">Stickers</li>
          </Link>
          <Link href={"/mugs"}>
            <li className="hover:text-yellow-500">Mugs</li>
          </Link>
        </ul>
      </div>
      <div
        
        className="cart items-center absolute right-0 top-4 text-xl mx-5 flex cursor-pointer"
      >
        
       {!user.value && <Link href={'/login'}><button className="bg-yellow-700 px-2 mx-2 py-1 rounded-md text-sm text-white">Login</button> </Link>}
      

      
        <AiOutlineShoppingCart onClick={toggleCart} className="text-3xl md:text-2xl" />
      </div>

      <div
        ref={ref}
        className={`sidebar  absolute  bg-yellow-100 top-0 px-8 h-[100vh] w-72 py-10  transition-all ${
          sidebar ? "right-0" : "-right-96"
        } `}
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl "
        >
          <AiFillCloseCircle />
        </span>
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
                  <div className="w-2/3 font-semibold ">{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
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
        <div className="flex">
          <Link href={"/checkout"}>
            {" "}
            <button disabled={Object.keys(cart).length === 0} className="disabled:bg-yellow-300 flex mx-auto mt-16  text-white bg-yellow-900 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              <BsFillBagCheckFill className="m-1" />
              Checkout
            </button>
          </Link>
          <button
            disabled={Object.keys(cart).length === 0}
            onClick={clearCart}
            className="flex mx-auto mt-16 disabled:bg-yellow-300 text-white relative h-11 bg-yellow-900 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-600 rounded text-lg"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
