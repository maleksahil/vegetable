import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faHeadset, faTruck, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const features = [
  { icon: faBox, title: "Product Packing", description: "Lorem ipsum dolor sit amet, consectetur adipiscing." },
  { icon: faHeadset, title: "24X7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing." },
  { icon: faTruck, title: "Delivery in 5 Days", description: "Lorem ipsum dolor sit amet, consectetur adipiscing." },
  { icon: faDollarSign, title: "Payment Secure", description: "Lorem ipsum dolor sit amet, consectetur adipiscing." },
];

const FeatureCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {features.map((feature, index) => (
        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md w-full sm:w-64 md:w-72 text-center">
          <FontAwesomeIcon icon={feature.icon} className="text-green-500 text-3xl mb-3" />
          <h3 className="font-bold text-lg">{feature.title}</h3>
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
