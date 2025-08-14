import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-2">Shop Info</h3>
          <p>NatureOn Store</p>
          <p>Farrukhabad, Uttar Pradesh, India - 209625</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Store Contact Info</h3>
          <p>Saurabh Shukla</p>
          <p>📞 +91-9336322822</p>
          <p>✉️ natureonstore@gmail.com</p>
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