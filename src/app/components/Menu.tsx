import React from "react";
import Image from "next/image";

function Menu () {
  return (
    <section id="menu" className="bg-green-700 text-green-900 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-yellow-500 mb-8">OUR MENU</h2>

        <div className="grid md:grid-cols-10 lg:grid-cols-4 gap-3 py-5">
          
          <div className="bg-green-100 p-6 rounded-lg shadow-lg">
            <div className="relative mb-6">
              <Image
                src="/signature burger.jpg"
                alt="The Smokey Burger"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Signature Burgers</h3>
            <div className="flex justify-between items-center mb-6">
              <p className="text-xl">The Smokey Burger</p>
              <p className="text-xl font-bold">$9.99</p>
            </div>
            <p className="text-lg">A juicy burger packed with smoky flavors and melted cheese, topped with fresh veggies.</p>
          </div>

        
          <div className="bg-green-100 p-6 rounded-lg shadow-lg">
            <div className="relative mb-6">
              <Image
                src="/bbq.jpg"
                alt="BBQ Bacon Delux"
                width={400}
                height={600}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Specials</h3>
            <div className="flex justify-between items-center mb-6">
              <p className="text-xl">BBQ Bacon Deluxe</p>
              <p className="text-xl font-bold">$11.99</p>
            </div>
            <p className="text-lg">BBQ sauce, crispy bacon, cheddar cheese, and our signature patty.</p>
          </div>

          
          <div className="bg-green-100 p-6 rounded-lg shadow-lg">
            <div className="relative mb-6">
              <Image
                src="/fries.jpg"
                alt="Crispy Fries"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Sides</h3>
            <div className="flex justify-between items-center mb-6">
              <p className="text-xl">Crispy Fries</p>
              <p className="text-xl font-bold">$3.99</p>
            </div>
            <p className="text-lg">Golden and crispy fries seasoned to perfection, perfect with any burger.</p>
          </div>

          
          <div className="bg-green-100 p-6 rounded-lg shadow-lg">
            <div className="relative mb-6">
              <Image
                src="/drink.jpg"
                alt="Cola"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Drinks</h3>
            <div className="flex justify-between items-center mb-6">
              <p className="text-2xl">Cola</p>
              <p className="text-xl font-bold">$1.99</p>
            </div>
            <p className="text-lg">Refreshing cola to pair perfectly with your meal.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;