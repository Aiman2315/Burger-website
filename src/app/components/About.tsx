import Image from "next/image";
import React from "react";




function About () {
  return (
    <section id="about" className="bg-green-700 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6 text-yellow-400">ABOUT US</h2>
        <p className="text-lg mb-8">
          At <span className="font-semibold">Fast Food Court - Burger King</span>, we are all about creating
          unforgettable burger experiences. From the smoky flavors of our signature{" "}
          <span className="font-semibold">Smokey Burger</span> to a menu packed with bold, delicious options, 
          we have built our brand around one mission: <em>"Taste the Difference in Every Bite."</em>
        </p>
        <Image src="/about.jpg" alt="Centered Image" className="mx-auto" width="400" height="100"/>
      </div>
    </section>
  );
};

export default About;