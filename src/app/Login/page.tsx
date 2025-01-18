//import React from 'react'
//import Image from 'next/image'
//import Link from 'next/link'

//const page = () => {
//  return (
//    <div>
//        <div className='bg-black text-gray-500 p-2'>Login</div>
//
//      <div className='flex justify-center'>
//        <Image src={'/picture21.png'} alt="" width={1440} height={96} className='w-full max-w-full' />
//      </div>
//
//      <div className='relative mx-auto sm:left-0 md:left-[200px] lg:left-[555px]'>
//        <Image src={'/picture22.png'} alt="" width={380} height={489} className='w-full max-w-[380px]'/>
//      </div>
//
//      <div className='flex justify-center'>
//        <Image src={'/picture23.png'} alt="" width={1440} height={331} className='w-full max-w-full'/>
//      </div>
//
  //    <Link href="JoinUs">
    //  <div className='relative mx-auto top-[-381px] sm:left-0 md:left-[300px] lg:left-[771px] text-gray-400 text-center'>Join Us</div>
//      </Link>
//    </div>
//  )
//}

//export default page



import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <div className='bg-black text-gray-500 p-1 w-full lg:w-[1440px]'>
        Login
      </div>

      <div>
        <Image src={'/picture21.png'} alt="" width={1440} height={96} />
      </div>

      <Link href="JoinUs">
        <div className='relative mx-auto sm:left-0 md:left-[555px]'>
           <Image src={'/picture22.png'} alt="" width={380} height={489} />
        </div>
      </Link>  

      <div>
        <Image src={'/picture23.png'} alt="" width={1440} height={331} />
      </div>

      
    </div>
  )
}

export default page

