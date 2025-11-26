import React from 'react';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Activity from './Activity';
import { useTheme } from '../Context/ThemeContext';

const Reviews = () => {
  const items = [
    { product: "MacBook Pro 16", series: "1247 Series", amount: 2899, stock: "+12%", icon: <FiArrowUpRight /> },
    { product: "iPhone 15", series: "2156 Series", amount: 1979, stock: "+8%", icon: <FiArrowUpRight /> },
    { product: "iPad Air", series: "3421 Series", amount: 2143, stock: "-5%", icon: <FiArrowDownRight /> },
    { product: "AirPods Pro", series: "935 Series", amount: 1457, stock: "+15%", icon: <FiArrowUpRight /> },
  ];

  const {theme} = useTheme();

  return (
    <section className="flex flex-col lg:flex-row items-start w-full gap-4">
      {/* Left section - Reviews */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`${theme === "dark" ? "bg-slate-950 text-white" : "bg-white text-black"} w-full lg:flex-1 rounded-lg p-4 md:p-6 shadow-lg`}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <div>
            <p className="font-semibold text-lg">Top Products</p>
            <p className="text-sm text-gray-500">Best Performing Products</p>
          </div>
          <p className="text-blue-600 text-sm cursor-pointer hover:underline">View All</p>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className={`py-3 border-b last:border-b-0 ${theme === "dark" ? "border-slate-800" : "border-gray-200"}`}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item.product}</p>
                  <p className="text-xs text-gray-500">{item.series}</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="font-semibold">₦{item.amount.toLocaleString()}</p>
                  <p
                    className={`${
                      item.stock.includes('-') ? 'text-red-600' : 'text-green-500'
                    } text-xs flex items-center gap-1`}
                  >
                    <span>{item.icon}</span>
                    {item.stock}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right section - Activity */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:flex-1"
      >
        <Activity />
      </motion.div>
    </section>
  );
};

export default Reviews;