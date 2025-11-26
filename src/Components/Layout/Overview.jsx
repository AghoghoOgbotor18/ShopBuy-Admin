import React from "react";
import { FiArrowDownRight, FiArrowUpRight, FiEye, FiUsers } from 'react-icons/fi';
import { FaMoneyBill, FaShoppingCart } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";

const Overview = () => {
  const { theme } = useTheme();

  return (
    <div className=" overflow-hidden pt-[90px] md:pt-[100px] xl:pt-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">

        {[
          {
            title: "Total Revenue",
            value: "₦124,563",
            icon: (
              <FaMoneyBill
                className="bg-green-200/50 text-green-600 p-2 rounded-full size-8 sm:size-10"
              />
            ),
            progress: "w-3/4",
            trend: "+12.3%",
            trendColor: "text-green-400",
            progressColor: "bg-green-400",
            trendIcon: <FiArrowUpRight size={12} className="text-green-400" />,
          },
          {
            title: "Total Orders",
            value: "2,847",
            icon: (
              <FaShoppingCart
                className="bg-purple-200/50 text-purple-600 p-2 rounded-full size-8 sm:size-10"
              />
            ),
            progress: "w-11/12",
            trend: "+18.8%",
            trendColor: "text-green-400",
            progressColor: "bg-gradient-to-r from-purple-700 to-pink-700",
            trendIcon: <FiArrowUpRight size={12} className="text-green-400" />,
          },
          {
            title: "Page Views",
            value: "45,892",
            icon: (
              <FiEye
                className="bg-orange-200/50 text-orange-600 p-2 rounded-full size-8 sm:size-10"
              />
            ),
            progress: "w-1/2",
            trend: "-5.1%",
            trendColor: "text-red-400",
            progressColor: "bg-gradient-to-r from-orange-700 to-red-600",
            trendIcon: <FiArrowDownRight size={12} className="text-red-400" />,
          },
          {
            title: "Active Users",
            value: "8,549",
            icon: (
              <FiUsers
                className="bg-blue-200/50 text-blue-600 p-2 rounded-full size-8 sm:size-10"
              />
            ),
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
            } w-full min-w-0 rounded-md cursor-pointer p-4 flex flex-col gap-4`}
          >
            <div className="flex items-center justify-between gap-3 min-w-0">
              <div className="min-w-0">
                <p className="truncate">{card.title}</p>
                <h3 className="truncate">{card.value}</h3>
              </div>
              {card.icon}
            </div>

            <div className="flex items-center gap-1 min-w-0">
              {card.trendIcon}
              <p className="truncate">
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
