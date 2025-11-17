// src/components/Products.jsx
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { products } from "../websiteData.json";
import { productImageMap } from '../utils/Imageimports';

const Products = () => {
  return (
    <section id="products" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-lightBg">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header - Responsive */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            Our Products
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-heading font-bold text-darkBlue mb-3 sm:mb-4 px-4">
            Premium Solar Equipment
          </h2>
          <p className="text-textGray text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            High-quality solar products for your energy needs
          </p>
        </div>

        {/* Products Grid - Fully Responsive */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Product Image Container */}
              <div className="relative h-48 sm:h-52 md:h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                {productImageMap[product.image] ? (
                  <img 
                    src={productImageMap[product.image]} 
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-textGray text-sm">Product Image</p>
                  </div>
                )}

                {/* Badges */}
                {/* {product.inStock && (
                  <span className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    In Stock
                  </span>
                )} */}

                {/* {product.originalPrice && (
                  // <span className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  //   Sale
                  // </span>
                )} */}
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5">
                {/* Category */}
                <span className="text-xs text-secondary font-semibold uppercase tracking-wide">
                  {product.category}
                </span>

                {/* Product Name */}
                <h4 className="text-base sm:text-lg font-heading font-bold text-darkBlue mb-2 mt-1 line-clamp-1">
                  {product.name}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-textGray mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Price & Rating Row */}
                <div className="flex justify-between items-center mb-4">
                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs sm:text-sm text-textGray line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                 
                </div>

                {/* Add to Cart Button */}
                <button className="w-full px-4 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm">
                 
                Know more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
