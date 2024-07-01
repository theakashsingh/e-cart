import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">E-Commerce Store</Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li>
              <Link to="/cart" className="flex items-center">
                Cart
                {cartItemCount > 0 && (
                  <span className="ml-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;