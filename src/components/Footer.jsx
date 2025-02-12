import React from 'react';
import CarrotLogo from '../assets/carrot_logo.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'; // Correct import
import { faTwitter } from '@fortawesome/free-brands-svg-icons'; // Correct import
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'; // Correct import
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Correct import
// import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import solid icons

const Footer = () => {
  const categories = [
    "Dairy & Bakery",
    "Fruits & Vegetable",
    "Snack & Spice",
    "Juice & Drinks",
    "Chicken & Meat",
    "Fast Food"
  ];

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">

          {/* Carrot Section */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img src={CarrotLogo} alt="Carrot Logo" className="h-8 mr-2" />
              
            </div>
            <p className="text-gray-600 mb-4">Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
            <div className="text-gray-600">
              <p className="mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> 51 Green St. Huntington ohaio beach antario, NY 11746 KY 4783, USA.</p>
              <p className="mb-2"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> example@email.com</p>
              <p className="mb-2"><FontAwesomeIcon icon={faPhone} className="mr-2" /> +91 123 4567890</p>
            </div>
          </div>

          {/* Company Section */}
          <div className="w-full pl-30 md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="text-gray-600">
              <li className="mb-2"><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-500">Delivery Information</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-500">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-500">contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-500">Support Center</a></li>
              {/* Other links... */}
            </ul>
          </div>

          {/* Category Section */}
          <div className="w-full pl-30 md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Category</h3>
            <ul className="text-gray-600">
              {categories.map((category, index) => (
                <li key={index} className="mb-2"><a href="#" className="hover:text-blue-500">{category}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Subscribe Our Newsletter</h3>
            <div className="relative mb-4">
              <input type="text" placeholder="Search here.." className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2"></button> {/* Search button */}
            </div>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-blue-500"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><FontAwesomeIcon icon={faPinterestP} /></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
            <div className="flex">
              {/* ... (Newsletter images) */}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-600 mt-8 pt-4 border-t border-gray-300">
          <p>&copy; 2025 Carrot, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;