import { useRouter } from 'next/router'
import React from 'react'
import Order from '@/models/Order'
import mongoose from 'mongoose'
import { useEffect,useState } from 'react'

const MyOrder = ({order,clearCart}) => {

  const products = order.products;
  const router = useRouter()
  const [date, setDate] = useState()
  useEffect(() => {
    const d = new Date(order.createdAt)
    setDate(d)
    if(router.query.clearCart == 1){
      clearCart()
    }
   
  }, [])
  

  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Super Enterprises</h2>
        <h1 className="text-gray-900 text-xl md:text-3xl title-font font-medium mb-4">Order Id : #{order.orderId}</h1>
        <p className="leading-relaxed mb-4">Your Order has been successfully placed.</p>
        <p className="leading-relaxed mb-4">Order Placed On:{date && date.toLocaleDateString("hi-IN")}</p>
        
         Your Payment Status is <span className='font-semibold text-yellow-700'>{order.status}</span>
        <div class="flex mb-4">
          <a class="flex-grow  text-center border-b-2  py-2 text-lg px-1">Item Description</a>
          <a class="flex-grow text-center border-b-2 border-gray-300 py-2 text-lg px-1">Quantity</a>
          <a class="flex-grow text-center border-b-2 border-gray-300 py-2 text-lg px-1">Item Total</a>
        </div>


        {Object.keys(products).map((key)=>{
          
         return  <div key={key} className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">{products[key].name}({products[key].size}/{products[key].variant})</span>
          <span className="m-auto text-gray-900">{products[key].qty}</span>
          <span className="m-auto text-gray-900">₹{products[key].price}*{products[key].qty} = ₹{products[key].price * products[key].qty}</span>
        </div>
        })}

        
        <div className="flex flex-col my-8">
          <span className="title-font font-medium text-2xl text-gray-900">Subtotal : ₹{order.amount}</span>
          <button className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Track Order</button>
          
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
  )
}
export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)

}
  let order = await Order.findById(context.query.id);
  
    
  return {
    props: {order: JSON.parse(JSON.stringify(order))}
}
}

export default MyOrder