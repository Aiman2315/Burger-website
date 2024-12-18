import React from "react";



function Contact () {
  return (
    <section id="contact" className="bg-green-700 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-poppins font-bold text-yellow-400 mb-8">CONTACT US</h2>

        <p className="text-lg mb-8">
          Have any questions or feedback? We'd love to hear from you! Reach out to us using the form below.
        </p>

        <form action="#" method="POST" className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-roboto font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-2 rounded-lg text-black border-2 border-green-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-roboto font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded-lg text-black border-2 border-green-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-roboto font-semibold">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg text-black border-2 border-green-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-block bg-yellow-400 text-green-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="mt-16 text-lg">
          <h3 className="text-4xl font-roboto font-semibold mb-4 ">Our Location</h3>
          <p className="mb-4">
            <span className="font-semibold">Fast Food Court - Burger King</span>
            <br />
            123 Burger Lane, Food City, 56789
            <br />
            Call us: <span className="font-semibold">(123) 456-7890</span>
          </p>

          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.0302485986343!2d-74.0060154!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2332ed53df%3A0x38ee64b31fda27fe!2sBurger%20King!5e0!3m2!1sen!2sus!4v1639456769451!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
