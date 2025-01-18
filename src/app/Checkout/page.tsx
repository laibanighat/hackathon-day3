import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-black text-gray-400 py-1 w-full lg:w-[1411px]">Checkout</div>
      
      {/* Top Image */}
      <div>
        <Image
          src="/picture18.png"
          alt=""
          width={1440}
          height={72.8}
          className="w-full lg:w-[1411px]"
        />
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-9 mt-8">
        {/* Left Image */}
        <div className="w-full lg:w-[440px] sm:w-2/3 md:w-[440px] relative lg:left-56">
          <Image
            src="/Auto Layout Vertical (1).png"
            alt=""
            width={440}
            height={2206}
            className="w-full"
          />
        </div>
        
        {/* Right Image */}
        <div className="w-full sm:w-1/2 md:w-[320px] lg:w-[320px] relative lg:left-64">
          <Image
            src="/picture19.png"
            alt=""
            width={320}
            height={721}
            className="w-full"
          />
        </div>
      </div>
      
      {/* Footer Image */}
      <div className="mt-8">
        <Image
          src="/picture20.png"
          alt=""
          width={1440}
          height={51}
          className="w-full lg:w-[1411px]"
        />
      </div>
    </div>
  );
};

export default page;

