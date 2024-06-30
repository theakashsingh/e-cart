// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/cartSlice';

// const ProductCard = ({ product }) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <div className="border p-4 rounded-lg shadow-md">
//       <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
//       <h3 className="text-lg font-semibold">{product.name}</h3>
//       <p className="text-gray-600">${product.price.toFixed(2)}</p>
//       <button 
//         onClick={handleAddToCart}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigating to detail page when clicking "Add to Cart"
    dispatch(addToCart(product));
  };

  return (
    <Link to={`/product/${product.id}`} className="block border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <button 
        onClick={handleAddToCart}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Add to Cart
      </button>
    </Link>
  );
};

export default ProductCard;