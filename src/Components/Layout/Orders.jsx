import React from "react";
import PiChart from "./PiChart";
import { motion } from "framer-motion"; 
import { useTheme } from "../Context/ThemeContext";

const Recent = () => {
  const data = [
    { id: "Order ID", cust: "Customer", product: "Product", amount: "Amount", status: "Status" },
    { id: "#3847", cust: "John", product: "MacBook Pro 16", amount: 2899, status: "completed" },
    { id: "#3848", cust: "Mary", product: "iPhone 15", amount: 1979, status: "pending" },
    { id: "#3849", cust: "James", product: "iPad Air", amount: 2143, status: "completed" },
    { id: "#3850", cust: "Emma", product: "AirPods Pro", amount: 1457, status: "cancelled" },
  ];

  const {theme} = useTheme();

  return (
    <section className="p-4 mt-6 flex flex-row gap-3 w-[97%]">
      {/* PiChart animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <PiChart />
      </motion.div>

      {/* Recent Orders animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`${theme === "dark" ? "bg-slate-950 text-white" : "bg-white"} rounded-lg p-6 shadow w-full`}
      >
        <div className="flex flex-row justify-between">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <p className={`text-xs text-blue-700`}>View All</p>
        </div>

        <div className="grid grid-cols-5 font-semibold border-b border-gray-400 pb-2 mb-2">
          <p>Order ID</p>
          <p>Customer</p>
          <p>Product</p>
          <p>Amount</p>
          <p>Status</p>
        </div>

        {data.slice(1).map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-5 py-2 border-b border-gray-300 last:border-none text-sm"
          >
            <p className="text-blue-700">{item.id}</p>
            <p>{item.cust}</p>
            <p>{item.product}</p>
            <p>&#8358;{item.amount}</p>
            <p
              className={`${
                item.status === "completed"
                  ? "text-green-500"
                  : item.status === "pending"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {item.status}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Recent;
