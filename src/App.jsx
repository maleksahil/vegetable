import { Routes, Route } from "react-router-dom"; // Correct imports
import { CartProvider } from './components/CartContext'; // Import CartProvider
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer"; // Import Footer
import Home from "./pages/Home"; // Import Home page
import Shop from "./pages/Shop"; // Import Shop page
import Cart from "./pages/Cart"; // Import Cart page

function App() {
  return (
    <CartProvider>  {/* Wrap the app with CartProvider */}
      <Navbar />  {/* Navbar should always render */}
      
      <Routes>  {/* Define Routes and corresponding components */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
 
    </CartProvider>
  );
}

export default App;
