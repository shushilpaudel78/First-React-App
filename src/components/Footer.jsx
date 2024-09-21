import React from 'react';
import {Link} from 'react-router-dom'
// You can install react-icons using: npm install react-icons
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F7F7F7] text-customPurple py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 bg-[#fff9fe] py-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="font-poppins text-lg mb-3">Company</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-poppins text-lg mb-3">Support</h4>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Terms of Service</li>
              <li>Shipping Info</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-poppins text-lg mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-customPurple text-white rounded-full">
                <FaFacebookF />
              </Link>
              <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-customPurple text-white rounded-full">
                <FaInstagram />
              </Link>
              <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-customPurple text-white rounded-full">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center mt-8 border-t pt-6">
          <p className="text-sm text-blue-500">
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
