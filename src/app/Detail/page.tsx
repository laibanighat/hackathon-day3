import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='w-full lg:w-[1440px] bg-black text-gray-500 py-1 text-lg md:text-xl'>
        Product detail
      </div>

      {/* Hero Image */}
      <div className='relative w-full'>
        <Image src={'/picture12.png'} alt="" width={1440} height={96} />
      </div>

      {/* Main Content Section */}
      <div className='relative flex flex-col md:flex-row md:items-start px-4 sm:px-8 lg:px-16'>
        {/* Left Image */}
        <div className='w-full md:w-1/2 lg:w-2/5'>
          <Image src={'/Rectangle.png'} alt="" width={653} height={653} />
        </div>

        {/* Right Content */}
        <div className='w-full md:w-1/2 lg:w-3/5 mt-8 md:mt-0 md:ml-8'>
          {/* Product Name */}
          <div className='mb-4'>
            <Image src={'/Nike Air Force 1 PLT.AF.ORM (1).png'} alt="" width={367} height={96} />
          </div>

          {/* Product Description */}
          <div className='mb-4'>
            <Image src={'/Auto Layout Vertical.png'} alt="" width={374.92} height={342} />
          </div>

          {/* Call to Action */}
          <div>
            <Link href="/Card">
                <Image src={'/Auto Layout Horizontal (1).png'} alt="" width={174.42} height={44} />
               </Link>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className='mt-8 w-full sm:w-[1440px]'>
        <Image src={'/picture13.png'} alt="" layout="responsive" width={1440} height={331} />
      </div>
    </div>
  );
};

export default page;
