import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Shop Address */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Shop Info</h3>
          <p>NatureOn Store</p>
          <p>Farrukhabad, Uttar Pradesh, India - 209625</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p>Saurabh Shukla</p>
          <p>📞 +91-9336322822</p>
          <p>✉️ interio3@gmail.com</p>
        </div>

        {/* Google Maps Embed */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Find Us</h3>
          <iframe
            title="Shop Location"
            src="https://maps.google.com/maps?q=Farrukhabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-40 rounded"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 text-sm py-4 px-4 text-center">
        © {new Date().getFullYear()} NatureOn · All rights reserved · Made with 🌱 in India
      </div>
    </footer>
  );
};

export default Footer;