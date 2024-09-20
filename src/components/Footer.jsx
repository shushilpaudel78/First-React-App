import React from "react";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (


    // Copy from chatgpt    (raw data  for testing purpose)


    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-gray-200">About Us</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-gray-200">Careers</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-gray-200">Press</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-gray-200">Blog</Link></li>
            </ul>
          </div>

          {/* Column 2: Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-gray-200">Help Center</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-gray-200">Contact Us</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-gray-200">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-gray-200">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="https://facebook.com" className="text-gray-400 hover:text-gray-200">
                {/* Facebook Icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.81v-9.293H9.692v-3.622h3.118V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.59l-.468 3.622h-3.122V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </Link>
              <Link to="https://twitter.com" className="text-gray-400 hover:text-gray-200">
                {/* Twitter Icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.936 9.936 0 0 1-2.828.775A4.933 4.933 0 0 0 23.337 3.3a9.865 9.865 0 0 1-3.127 1.195 4.924 4.924 0 0 0-8.39 4.49A13.977 13.977 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.524 6.573A4.904 4.904 0 0 1 .96 9.17v.062a4.922 4.922 0 0 0 3.946 4.827 4.897 4.897 0 0 1-2.212.084 4.925 4.925 0 0 0 4.604 3.42A9.873 9.873 0 0 1 0 21.542 13.94 13.94 0 0 0 7.548 24c9.056 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.015-.636A10.012 10.012 0 0 0 24 4.557z" />
                </svg>
              </Link>
              <Link to="https://instagram.com" className="text-gray-400 hover:text-gray-200">
                {/* Instagram Icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.332 3.608 1.308.976.975 1.246 2.243 1.308 3.608.058 1.265.07 1.645.07 4.849 0 3.204-.012 3.584-.07 4.849-.062 1.366-.332 2.633-1.308 3.608-.975.976-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07-3.204 0-3.584-.012-4.849-.07-1.366-.062-2.633-.332-3.608-1.308-.976-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12c0-3.204.012-3.584.07-4.849.062-1.366.332-2.633 1.308-3.608C4.516 2.495 5.783 2.225 7.149 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.756 0 8.333.02 7.052.075 5.725.13 4.582.386 3.682 1.286 2.782 2.185 2.525 3.328 2.07 4.648.98 8.333.98 15.667 2.07 19.352c.455 1.32.712 2.463 1.612 3.362.9.9 2.043 1.157 3.362 1.612C8.333 23.98 8.756 24 12 24s3.667-.02 4.948-.075c1.32-.455 2.463-.712 3.362-1.612.9-.9 1.157-2.043 1.612-3.362C23.02 15.667 23.02 8.333 21.93 4.648c-.455-1.32-.712-2.463-1.612-3.362-.9-.9-2.043-1.157-3.362-1.612C15.667.02 15.244 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4.001 4.001 0 1 1 0-8.002 4.001 4.001 0 0 1 0 8.002zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
