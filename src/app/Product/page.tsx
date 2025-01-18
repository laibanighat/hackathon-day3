'use client'
import React,{ useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="container mx-auto">
      <div className="bg-black text-gray-400 py-1">All product-page</div>

      <div className="my-4 relative top-[-11px]">
        <Link href="/Detail">
          <Image 
            src="/picture6.png" 
            alt="" 
            width={1440} 
            height={96} 
          />
        </Link>
      </div>

      <div className="my-4">
        <Image 
          src="/picture7.png" 
          alt="" 
          width={1440} 
          height={51} 
        />
      </div>

      {/* Mobile Menu Button */}
      <div className='sm:hidden'>
        <button onClick={toggleMenu} className="text-3xl">
           {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>
         
         {isMenuOpen && (
          <div>
            <Image src="/picture9.png" alt="" width={260} height={849} />
          </div>
         )}

         <div className='hidden sm:block'>
          <Image src="/picture9.png" alt="" width={260} height={849}/>
         </div>

      <div className='relative lg:top-[-833px] lg:left-24'>
        <Image 
          src="/picture8.png" 
          alt="" 
          width={1092} 
          height={17706} 
          className="mx-auto max-w-full"
        />
      </div>

      <div className="relative top-[-266px] lg:top-[-1499px]">
        <Image 
          src="/picture10.png" 
          alt="" 
          width={1092} 
          height={259} 
          className="mx-auto max-w-full"
        />
      </div>

      <div className="relative top-[-265px] lg:top-[-1499px]">
        <Image 
          src="/picture11.png" 
          alt="" 
          width={1440} 
          height={331} 
          className="mx-auto max-w-full"
        />
      </div>
    </div>
  );
};

export default page;
