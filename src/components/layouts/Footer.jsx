const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 sm:px-10 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-3 flex items-center gap-2">
            🟠 UNITED DEAL
          </h2>
          <p>Customer Supports:</p>
          <p>(629) 555-0129</p>
          <p>457 Washington Ave.</p>
          <p>Manchester, Kentucky 39495</p>
          <p className="mt-2">info@kinbo.com</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">TOP CATEGORY</h3>
          <ul className="space-y-1 text-sm">
            <li>Computer & Laptop</li>
            <li>SmartPhone</li>
            <li>Headphone</li>
            <li className="text-orange-400">Accessories</li>
            <li>Camera & Photo</li>
            <li>TV & Homes</li>
            <li className="text-orange-400 cursor-pointer hover:underline">
              Browse All Product →
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">QUICK LINKS</h3>
          <ul className="space-y-1 text-sm">
            <li>Shop Product</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
            <li>Compare</li>
            <li>Track Order</li>
            <li>Customer Help</li>
            <li>About Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">POPULAR TAG</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Game",
              "iPhone",
              "TV",
              "Asus Laptops",
              "Macbook",
              "SSD",
              "Graphics Card",
              "Power Bank",
              "Smart TV",
              "Speaker",
              "Tablet",
              "Microwave",
              "Samsung",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-gray-800 text-gray-300 px-2 py-1 text-xs rounded cursor-pointer hover:bg-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-5">
        <div className="max-w-7xl mx-auto flex  justify-center items-center gap-4 sm:gap-8 text-sm text-gray-400">
          <a href="/terms1" className="hover:text-orange-400 transition-colors">
            Terms of Service
          </a>
          <a href="/terms2" className="hover:text-orange-400 transition-colors">
            Privacy Policy
          </a>
          <a href="/terms3" className="hover:text-orange-400 transition-colors">
            Shipping Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
