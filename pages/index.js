import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Super Enterprises</title>
        <meta name="description" content="SuperEnterprises.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
        <img src="/home.jpg" alt="" />
      </div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Collections</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Browse Our Exclusive Collection!</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        {/* <div className="border border-gray-200 p-6 rounded-lg tra"> */}
          <Link href={'/tshirts'}>
          <img src='https://www.codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fcollections%2Ftshirt.webp&w=2048&q=75' className='rounded w-full object-cover mb-2 transition-transform duration-300 hover:scale-110 '/>
        
          
        {/* </div> */}
      </Link>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        {/* <div className="border border-gray-200 p-6 rounded-lg tra"> */}
          <Link href={'/hoodies'}>
          <img src='https://www.codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fcollections%2Fhoodie.webp&w=2048&q=75' className='rounded w-full object-cover mb-2 transition-transform duration-300 hover:scale-110 '/>
        
          
        {/* </div> */}
      </Link>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        {/* <div className="border border-gray-200 p-6 rounded-lg tra"> */}
          <Link href={'/mugs'}>
          <img src='https://www.codeswear.com/_next/image?url=https%3A%2F%2Fcodeswear.nyc3.cdn.digitaloceanspaces.com%2Fconstants%2Flanding%2Fcollections%2Fmugs.webp&w=2048&q=75' className='rounded w-full object-cover mb-2 transition-transform duration-300 hover:scale-110 '/>
        
          
        {/* </div> */}
      </Link>
      </div>
      {/* <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div> */}
    </div>
    
  </div>
</section>
<section className='text-gray-600 body-font'>
  <div className='container px-5 py-24 mx-auto'>
    <div className='flex flex-wrap justify-center -m-4 dark:text-gray-100 '>
      <div className='w-full xl:w-1/3 md:w-1/2 p-4'>
        <div className='border border-gray-200 p-6 rounded-lg text-center '>
          <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4 text-center'>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 6a2 2 0 1 0 -4 0c0 1.667 .67 3 2 4h-.008l7.971 4.428a2 2 0 0 1 1.029 1.749v.823a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-.823a2 2 0 0 1 1.029 -1.749l7.971 -4.428"></path></svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center ">Premium Tshirts</h2>
          <p className="leading-relaxed text-gray-500 text-base">Our T-Shirts are 100% made of cotton.</p>
        </div>

      </div>
      <div className='w-full xl:w-1/3 md:w-1/2 p-4'>
        <div className='border border-gray-200 p-6 rounded-lg text-center '>
          <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4 text-center'>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path></svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center ">Free Shipping</h2>
          <p className="leading-relaxed text-gray-500 text-base">We ship all over India for FREE</p>
        </div>

      </div>
      <div className='w-full xl:w-1/3 md:w-1/2 p-4'>
        <div className='border border-gray-200 p-6 rounded-lg text-center '>
          <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4 text-center'>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path></svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center ">Exciting Offers</h2>
          <p className="leading-relaxed text-gray-500 text-base">We provide amazing offers & discounts on our products.</p>
        </div>

      </div>
    </div>
  </div>
</section>
      
    </>
  )
}
