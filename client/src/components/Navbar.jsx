import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  return (
    <nav className="bg-green-600 p-4 text-white">
      <ul className="flex justify-between items-center">
        {/* Navigation Links */}
        <div className="flex gap-4">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/contact">Contact</a></li>
          {isAuthenticated && <li><a href="/dashboard">Dashboard</a></li>}
        </div>

        {/* Search and Auth Links */}
        <div className="flex items-center gap-4">
          {/* Search Icon and Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border-2 border-gray-300 p-2 rounded focus:outline-none"
            />
            <button className="top-1/2 right-2 absolute transform -translate-y-1/2">
              <i className="text-gray-600 fa-search fas"></i> {/* FontAwesome Search Icon */}
            </button>
          </div>

          {/* Authentication Links */}
          {isAuthenticated ? (
            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
              Logout
            </button>
          ) : (
            <>
              <a href="/login" className="mr-4">Login</a>
              <a href="/register">Register</a>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
