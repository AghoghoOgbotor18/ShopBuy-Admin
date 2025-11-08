import React from "react";
import { FiArrowDownRight, FiArrowUpRight, FiEye, FiUsers } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";

const Overview = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full max-w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        
        {/* Card Template */}
        {[
          {
            title: "Total Revenue",
            value: "₦124,563",
            icon: "₦",
            progress: "w-3/4",
            trend: "+12.3%",
            trendColor: "text-green-400",
            progressColor: "bg-green-400",
            trendIcon: <FiArrowUpRight size={12} className="text-green-400" />,
          },
          {
            title: "Total Orders",
            value: "2,847",
            icon: <FaShoppingCart size={40} className="bg-purple-200/50 w-fit text-purple-600 py-3 px-3 rounded-full" />,
            progress: "w-11/12",
            trend: "+18.8%",
            trendColor: "text-green-400",
            progressColor: "bg-gradient-to-r from-purple-700 to-pink-700",
            trendIcon: <FiArrowUpRight size={12} className="text-green-400" />,
          },
          {
            title: "Page Views",
            value: "45,892",
            icon: <FiEye size={40} className="bg-orange-200/50 w-fit text-orange-600 py-3 px-3 rounded-full" />,
            progress: "w-1/2",
            trend: "-5.1%",
            trendColor: "text-red-400",
            progressColor: "bg-gradient-to-r from-orange-700 to-red-600",
            trendIcon: <FiArrowDownRight size={12} className="text-red-400" />,
          },
          {
            title: "Active Users",
            value: "8,549",
            icon: <FiUsers size={40} className="bg-blue-200/50 w-fit text-blue-600 py-3 px-3 rounded-full" />,
            progress: "w-2/3",
            trend: "+12.3%",
            trendColor: "text-green-400",
            progressColor: "bg-gradient-to-r from-blue-800 to-purple-800",
            trendIcon: <FiArrowUpRight size={12} className="text-green-400" />,
          },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * (idx + 1) }}
            className={`${
              theme === "dark" ? "bg-slate-950 text-white" : "bg-white"
            } w-full rounded-md cursor-pointer p-4 flex flex-col gap-4`}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p>{card.title}</p>
                <h3>{card.value}</h3>
              </div>
              {card.icon}
            </div>
            <div className="flex items-center gap-1">
              {card.trendIcon}
              <p>
                <span className={`${card.trendColor}`}>{card.trend}</span> vs last month
              </p>
            </div>
            <div className="bg-zinc-300 h-2 rounded-md">
              <div className={`${card.progressColor} h-2 rounded-md ${card.progress}`}></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
