import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      {/* Main container */}
      <div className="w-full lg:w-[1411px] relative lg:left-[-39px] mx-auto bg-black text-gray-400 p-1">
        Card
      </div>

      {/* Header Image */}
      <div className="w-full lg:w-[1411px] relative lg:left-96 ">
        <Image
          src={'/picture14.png'}
          alt=""
          width={1440}
          height={96}
          className="w-full h-auto"
        />
      </div>

      {/* Image 1 */}
      <div className="relative -top-44 sm:-top-56 md:-top-[566px] left-7 sm:left-1/5 md:left-1/4 w-3/4 sm:w-2/3 md:w-1/2">
        <Image
          src={'/pic4.png'}
          alt=""
          width={1100}
          height={547.89}
          className="w-full h-auto"
        />
      </div>

      {/* Checkout link */}
      <div className="relative -top-[99px] sm:-top-[150px] md:-top-[888px] left-2/3 transform -translate-x-1/2 w-1/2 sm:w-1/3 md:w-80">
        <Link href="/Checkout">
          <Image
            src={'/Auto Layout Horizontal (2).png'}
            alt=""
            width={222}
            height={40}
            className="w-full h-auto"
          />
        </Link>
      </div>

      {/* Footer Image */}
      <div className="relative -top-44 sm:-top-56 md:-top-[555px] w-full lg:w-[1411px] lg:left-96">
        <Image
          src={'/picture17.png'}
          alt=""
          width={1440}
          height={331}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default page;
