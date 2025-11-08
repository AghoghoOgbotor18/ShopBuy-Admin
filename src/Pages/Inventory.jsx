import React, { useState, useEffect } from "react";
import { useTheme } from "../Components/Context/ThemeContext";
import { FiSearch } from "react-icons/fi";
import {motion} from "framer-motion";
import { useOpen } from "../Components/Context/OpenContext";

// import product images from assets
import laptop from "../assets/macbook.jpg";
import shoes from "../assets/ipad.jpg";
import book from "../assets/apple-watch.jpg";
import phone from "../assets/iphone.jpg";


const Inventory = () => {
  const { theme } = useTheme();
  const { isOpen } = useOpen();
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "MacBook Pro 16”",
      category: "Electronics",
      stock: 25,
      price: 1150000,
      image: laptop,
    },
    {
      id: 2,
      name: "Nike Air Sneakers",
      category: "Fashion",
      stock: 8,
      price: 85000,
      image: shoes,
    },
    {
      id: 3,
      name: "iPhone 15 Pro",
      category: "Electronics",
      stock: 3,
      price: 1200000,
      image: phone,
    },
    {
      id: 4,
      name: "Atomic Habits",
      category: "Books",
      stock: 40,
      price: 5500,
      image: book,
    },
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (stock) => {
    if (stock === 0) return "bg-red-100 text-red-700";
    if (stock <= 5) return "bg-yellow-100 text-yellow-700";
    return "bg-green-100 text-green-700";
  };

  useEffect(() => {
        window.scrollTo({top:0, behavior: 'smooth'});
    }, []);

  return (
    <section className={`min-h-screen pt-[110px] md:pt-[120px] xl:pt-[70px] pb-10 transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-800 text-white"
          : "bg-zinc-200 text-zinc-900"
      }`}>
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`mx-5 mt-5 p-6 rounded-xl shadow-lg ${
          theme === "dark" ? "bg-slate-950" : "bg-white"
        }`}
      >
        <h1 className="text-3xl font-semibold mb-4">Inventory</h1>
        <p className="text-gray-500 mb-6 text-sm">
            Manage and track your product inventory
        </p>

        {/* Search Bar */}
        <div
            className={`flex items-center gap-2 mb-6 px-4 py-2 rounded-full shadow-sm w-full sm:w-96 ${
            theme === "dark" ? "bg-slate-900" : "bg-white"
            }`}
        >
            <FiSearch className="text-gray-400" />
            <input
            type="text"
            placeholder="Search product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`outline-none bg-transparent w-full text-sm ${
                theme === "dark" ? "placeholder-gray-500" : "placeholder-gray-400"
            }`}
            />
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
            <div
                key={product.id}
                className={`rounded-xl overflow-hidden shadow-md border transition-all hover:scale-105 duration-300 ${
                theme === "dark"
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-gray-200"
                }`}
            >
                <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
                />
                <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500 mb-2">
                    {product.category}
                </p>

                <div className="flex justify-between items-center">
                    <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${getStatusColor(
                        product.stock
                    )}`}
                    >
                    {product.stock === 0
                        ? "Out of Stock"
                        : product.stock <= 5
                        ? "Low Stock"
                        : "In Stock"}
                    </span>

                    <p className="font-semibold">
                    ₦{product.price.toLocaleString()}
                    </p>
                </div>
                </div>
            </div>
            ))}
        </div>

        {filteredProducts.length === 0 && (
            <p className="text-center mt-10 text-gray-500">
            No product found.
            </p>
        )}
        </motion.div>
    </section>
    
  );
};

export default Inventory;
