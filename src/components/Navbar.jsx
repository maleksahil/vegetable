import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Animated Logo */}
        <motion.div
          className="text-2xl font-bold text-green-600"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">vegetables</Link>
        </motion.div>

        {/* Animated Navigation Links */}
        <ul className="flex space-x-4">
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link
              to="/"
              className="text-gray-700 hover:text-green-600 transition duration-200 ease-in-out"
            >
        <FontAwesomeIcon icon={faHome} className="text-2xl" />
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Link
              to="/shop"
              className="text-gray-700 hover:text-green-600 transition duration-200 ease-in-out"
            >
             <FontAwesomeIcon icon={faShoppingBag}  className="text-2xl" />
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Link
              to="/cart"
              className="text-gray-700 hover:text-green-600 transition duration-200 ease-in-out"
            >
              <FontAwesomeIcon icon={faShoppingCart} size="lg" className="text-2xl" />
     
            </Link>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
