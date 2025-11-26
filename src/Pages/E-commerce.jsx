import React, {useEffect} from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Components/Context/ThemeContext";
import { useOpen } from "../Components/Context/OpenContext";
import { FiShoppingBag, FiDollarSign, FiTag } from "react-icons/fi";
import macbook from "../assets/macbook.jpg";
import iphone from "../assets/iphone.jpg";
import ipad from "../assets/ipad.jpg";
import airpod from "../assets/airpod.jpg";
import watch from "../assets/apple-watch.jpg";

const products = [
  {
    id: 1,
    name: "MacBook Pro 16",
    price: 2899,
    stock: 12,
    category: "Electronics",
    image: macbook,
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 1979,
    stock: 8,
    category: "Electronics",
    image: iphone,
  },
  {
    id: 3,
    name: "iPad Air",
    price: 2143,
    stock: 5,
    category: "Electronics",
    image: ipad,
  },
  {
    id: 4,
    name: "AirPods Pro",
    price: 1457,
    stock: 15,
    category: "Accessories",
    image: airpod,
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 1299,
    stock: 10,
    category: "Wearables",
    image: watch,
  },
];

const Ecommerce = () => {
  const { theme } = useTheme();
  const { isOpen } = useOpen();

  useEffect(() => {
        window.scrollTo({top:0, behavior: 'smooth'});
    }, []);

  return (
    <section
      className={`min-h-screen overflow-hidden pt-[110px] md:pt-[120px] xl:pt-[70px] pb-10 transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-800 text-white"
          : "bg-zinc-200 text-zinc-900"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`mx-5 mt-5 p-6 rounded-xl shadow-lg ${
          theme === "dark" ? "bg-slate-950" : "bg-white"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold">E-commerce Products</h2>
            <p className="text-sm text-gray-400">Manage and monitor products</p>
          </div>
          <button className="px-4 py-2 rounded-lg bg-linear-to-r from-blue-700 to-purple-700 text-white hover:opacity-90 transition">
            + Add Product
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl shadow-md p-4 flex flex-col justify-between ${
                theme === "dark"
                  ? "bg-slate-900 hover:bg-slate-800"
                  : "bg-zinc-50 hover:bg-zinc-100"
              } transition`}
            >
              <div className="flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-contain mb-4"
                />
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-2 flex items-center gap-2">
                  <FiTag /> {product.category}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <p className="flex items-center gap-1 font-semibold text-blue-600">
                    &#8358; {product.price}
                  </p>
                  <p
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      product.stock <= 5
                        ? "bg-red-500/20 text-red-500"
                        : product.stock <= 10
                        ? "bg-yellow-500/20 text-yellow-500"
                        : "bg-green-500/20 text-green-500"
                    }`}
                  >
                    {product.stock <= 5
                      ? "Low Stock"
                      : product.stock <= 10
                      ? "Limited"
                      : "In Stock"}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center border-t border-zinc-700/30 pt-3">
                <button className="flex items-center gap-2 text-sm text-blue-600 cursor-pointer font-medium hover:underline">
                  <FiShoppingBag /> View Details
                </button>
                <button className="text-xs px-3 py-1 rounded-full bg-linear-to-r from-blue-700 to-purple-700 text-white cursor-pointer">
                  Edit
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Ecommerce;
