import React from 'react';
import { FiBell, FiCreditCard, FiSettings, FiShoppingCart, FiUser } from 'react-icons/fi';
import { useTheme } from '../Context/ThemeContext';

const Activity = () => {
  const items = [
    {info:"New user registered", active: "John Smith created an account", time: "2 minutes ago", icon: <FiUser />, color: "blue"},
    {info:"New order received", active: "Order #3847 for ₦4,578", time: "3 minutes ago", icon: <FiShoppingCart />, color: "green"},
    {info:"Payment processed", active: "Payment of ₦10,340 completed", time: "12 minutes ago", icon: <FiCreditCard />, color: "purple"},
    {info:"System Update", active: "Database backup completed", time: "1 hour ago", icon: <FiSettings />, color: "orange"},
    {info:"Low Stock Alert", active: "iPhone 15 Pro Max stock is low", time: "2 hours ago", icon: <FiBell />, color: "red"},
  ];

  const {theme} = useTheme();

  const getColorClass = (color) => {
    const colors = {
      blue: "bg-blue-500/20 text-blue-500",
      green: "bg-green-500/20 text-green-500",
      purple: "bg-purple-500/20 text-purple-500",
      orange: "bg-orange-500/20 text-orange-500",
      red: "bg-red-500/20 text-red-500",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className={`${theme === "dark" ? "bg-slate-950 text-white" : "bg-white text-black"} rounded-lg p-4 md:p-6 shadow-lg`}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
        <div>
          <h2 className="text-lg font-semibold">Activity Feed</h2>
          <p className="text-sm text-gray-500">Recent System Activity</p>
        </div>
        <button className="text-blue-600 text-sm hover:underline">View All</button>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex gap-3">
              <div className={`${getColorClass(item.color)} w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0`}>
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm">{item.info}</p>
                <p className="text-sm text-gray-500 break-words">{item.active}</p>
                <p className="text-xs text-gray-400 mt-1">{item.time}</p>
              </div>
            </div>
            {index < items.length - 1 && (
              <hr className={`my-4 ${theme === "dark" ? "border-slate-800" : "border-gray-200"}`} />
            )}
          </div>
        ))}
        <button className="w-full py-2 mt-4 text-sm text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-900 rounded-lg transition">
          Load More Activities
        </button>
      </div>
    </div>
  );
};

export default Activity;