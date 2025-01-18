
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="w-full lg:w-[1440px] relative lg:left-80 text-gray-500 bg-black py-1">
        <h1>Home-Page</h1>
      </header>

      {/* Hero Image */}
      <Link href="/Login">
        <div className="relative lg:left-80 top-1 sm:top-2 max-w-full mx-auto">
          <Image src="/picture21.png" alt="" width={1440} height={60}/>
        </div>
      </Link>

      {/* Info Section */}
      <section className="w-full lg:w-[1440px] relative lg:left-80 bg-[#F5F5F5] text-center">
        <div className="font-medium">Hello Nike App</div>
        <p className="text-sm sm:w-3/4 lg:w-1/2 mx-auto py-2">
          Download the app to access everything Nike. Get Your Great
        </p>
      </section>
        <div className="mt-4 relative lg:top-[-22px]">
          <Link href="/Product">
            <Image src="/Image.png" alt="Product" width={1344} height={700} className="w-full sm:w-3/4 lg:w-1/2 mx-auto" />
          </Link>
        </div>

      {/* Feature Section */}
      <section className="py-6">
        <div className="text-center font-semibold">First Look</div>
        <div className="flex justify-center my-4 lg:w-[700px] relative lg:left-[799px]">
          <Image src="/Nike Air Max Pulse.png" alt="" width={500} height={60} className="w-3/4 sm:w-1/2" />
        </div>
        <p className="text-center mx-auto w-11/12 sm:w-3/4 lg:w-1/2 text-black">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          —designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button className="px-4 py-2 rounded-full bg-black text-white">Notify Me</button>
          <button className="px-4 py-2 rounded-full bg-black text-white">Shop Air Max</button>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-6">
        <div className="flex flex-wrap justify-center gap-4">
          <div>
            <Image src="/image 1.png" alt="" width={1440} height={605} />
          </div>
        </div>
      </section>

      <section className="py-6">
        
        <div className="flex justify-center my-4">
          <Image src="/pic2.png" alt="" width={1344} height={977} className="w-3/4 sm:w-1/2" />
        </div>
      </section>
     
       <div className="flex justify-center my-4">
          <Image src="/pic3.png" alt="" width={1344} height={561} className="w-3/4 sm:w-1/2" />
        </div>

        <div className="flex justify-center my-4">
          <Image src="/picture2.png" alt="" width={1344} height={977} className="w-3/4 sm:w-1/2" />
        </div>

        <div className="flex justify-center my-4">
          <Image src="/picrure3.png" alt="" width={1344} height={592} className="w-3/4 sm:w-1/2" />
        </div>

      {/* Navigation Sections */}
      <section className="lg:w-[880px] relative lg:left-[599px] grid grid-cols-2 sm:grid-cols-4 py-6 text-center">
        <nav>
          <ul className="space-y-2">
            <li className="font-bold">Icons</li>
            <li className="text-gray-500">Air Force 1</li>
            <li className="text-gray-500">Huarache</li>
            <li className="text-gray-500">Air Max 90</li>
            <li className="text-gray-500">Air Max 95</li>
          </ul>
        </nav>
        <nav>
          <ul className="space-y-2">
            <li className="font-bold">Shoes</li>
            <li className="text-gray-500">All Shoes</li>
            <li className="text-gray-500">Custom Shoes</li>
            <li className="text-gray-500">Jordan Shoes</li>
            <li className="text-gray-500">Running Shoes</li>
          </ul>
        </nav>
        <nav>
          <ul className="space-y-2">
            <li className="font-bold">Clothing</li>
            <li className="text-gray-500">All Clothing</li>
            <li className="text-gray-500">Modest Wear</li>
            <li className="text-gray-500">Hoodies & Pullovers</li>
            <li className="text-gray-500">Shirts & Tops</li>
          </ul>
        </nav>
        <nav>
          <ul className="space-y-2">
            <li className="font-bold">Kids</li>
            <li className="text-gray-500">Infant & Toddler Shoes</li>
            <li className="text-gray-500">Kids' Shoes</li>
            <li className="text-gray-500">Kids' Jordan Shoes</li>
            <li className="text-gray-500">Kids' Basketball Shoes</li>
          </ul>
        </nav>
      </section>

      {/* Footer Section */}
      <footer className="flex justify-center py-4">
        <Image src="/picture4.png" alt="" width={1440} height={331} />
      </footer>
    </div>
  );
};

export default Navbar;

