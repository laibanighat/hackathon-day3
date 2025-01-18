import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <div className='bg-black text-gray-400 lg:w-[1440px]'>Contact Us</div>
        <div>
          <Image src={'/Contact Us - Page.png'} alt="" width={1440} height={1705}/>
        </div>
    </div>
  )
}

export default page
