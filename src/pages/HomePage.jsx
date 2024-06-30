
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our E-Commerce Store</h1>
      <p className="text-xl mb-4">Find the best products at great prices!</p>
      <Link 
        to="/products" 
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default HomePage;