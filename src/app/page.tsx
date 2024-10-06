import Image from 'next/image';

function Home() {
  return (
    <div className="container min-h-screen bg-green-800 bg-center bg-cover px-20 relative">
      <nav>
        <div className="flex justify-between items-center">
          <Image src="/logo.png" alt="logo" width="150" height="150"/>

          <ul className="flex space-x-9 font-semibold text-1xl">
          <li className="bg-yellow-600 rounded-full px-5 hover:bg-transparent hover:text-white hover:border"><a href="#">ORDER NOW</a></li>
          <li className="hover:bg-transparent hover:text-white"><a href="#">HOME</a></li>
          <li className="hover:bg-transparent hover:text-white"><a href="#">ABOUT</a></li>
          <li className="hover:bg-transparent hover:text-white"><a href="#">MENU</a></li>
          <li className="hover:bg-transparent hover:text-white"><a href="#">CONTACT</a></li>
          </ul>
        </div>
      </nav>
      <h1 className="text-9xl text-white font-bold italic">
        <br />
        The
        <br />
         Smoky 
        <br />
         Burger
         </h1>
         <br />
         <br />
         <p className="font-semibold px-4 text-2xl text-white">"Taste The Difference in Every Bite"</p>
         <div className="w-full  xl:w-1/2  xl:absolute bottom-0 right-20 top-23 ">
          <Image src="/main.png" alt="main" width="900" height="900"></Image>
          </div>
        </div>
           
       
  )
};
export default Home;