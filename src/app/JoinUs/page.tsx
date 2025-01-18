import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <div className="bg-black text-gray-400 w-full lg:w-[1411px] py-2">JoinUs</div>

      <nav className="flex w-full lg:w-[1411px] bg-[#F5F5F5] text-black font-semibold h-12 items-center px-4">
        <div className="w-[24px] h-[24px] relative">
          <Image src="/Vector.png" alt="Logo" width={24} height={24} />
        </div>
        <ul className="flex gap-4 ml-auto text-sm sm:text-base">
          <li>Find a Store |</li>
          <Link href="/Help">
            <li className="cursor-pointer">Help |</li>
          </Link>
          <li>JoinUs |</li>
          <li>Sign in</li>
        </ul>
      </nav>

      <div>
        <Image
          src="/picture25.png"
          alt=""
          width={1480}
          height={60}
          className="w-full lg:w-[1411px] h-auto"
        />
      </div>

      <div>
        <Image
          src="/picture24.png"
          alt=""
          width={380}
          height={833}
          className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[380px] relative lg:left-[499px] h-auto"
        />
      </div>

      <div>
        <Image
          src="/picture26.png"
          alt=""
          width={1411}
          height={331}
          className="w-full lg:w-[1411px] h-auto"
        />
      </div>
    </div>
  );
};

export default Page;
