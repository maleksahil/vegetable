import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    image: "/images/cardimage1.jpg", // Replace with actual image URL
    category: "Snacks",
    rating: 4.5,
    title: "Best snacks with hazel nut mix pack 200gm",
    price: "$120.25",
    oldPrice: "$123.25",
  },
  {
    image: "/images/cardimage2.jpg",
    category: "Snacks",
    rating: 5.0,
    title: "Sweet snacks crunchy nut mix 250gm pack",
    price: "$100.00",
    oldPrice: "$110.00",
  },
  {
    image: "/images/cardimage3.jpg",
    category: "Snacks",
    rating: 5.0,
    title: "Sweet snacks crunchy nut mix 250gm pack",
    price: "$100.00",
    oldPrice: "$110.00",
  },
];

const ProductCard = ({ product }) => (
  <div className="bg-white p-4 rounded-lg border-gray-300 border-2 w-full sm:w-64 md:w-72 text-center">
    <img
      src={product.image}
      alt={product.title}
      className="w-full border-gray-300 border-2 rounded-lg h-40 object-cover mb-3"
    />
    <div className="relative -top-8 bg-white rounded-full p-2 inline-block shadow-md">
      <FontAwesomeIcon icon={faShoppingBag} className="text-green-500 text-xl" />
    </div>
    <p className="text-gray-500 text-sm">{product.category}</p>
    <div className="text-yellow-500 text-sm">
      ⭐ {product.rating} ({product.rating})
    </div>
    <h3 className="font-bold text-md mt-1">{product.title}</h3>
    <p className="text-green-600 font-bold">
      {product.price}{" "}
      <span className="text-gray-400 line-through">{product.oldPrice}</span>
    </p>
  </div>
);

const ProductSection = () => (
  <div className="flex flex-wrap gap-4 p-6">
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
    <div className="w-full sm:w-[40%] h-auto bg-gray-200 rounded-lg flex flex-col justify-center items-end text-center p-4 relative">
      <img
        src="/images/cardbanner.jpg"
        alt="Organic Vegetables"
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
      <div className="relative z-10 text-black">
        <h2 className="font-bold text-xl">Organic & Healthy Vegetables</h2>
        <p className="text-lg font-bold">25% OFF</p>
        <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded-md">
          Shop Now
        </button>
      </div>
    </div>
  </div>
);

export default ProductSection;
