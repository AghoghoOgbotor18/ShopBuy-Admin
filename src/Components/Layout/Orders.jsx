import React from 'react';
import PiChart from './PiChart';
import { useTheme } from '../Context/ThemeContext';

const Orders = () => {
  const { theme } = useTheme();
  
  const orders = [
    { id: "#ORD-001", customer: "John Doe", product: "MacBook Pro", amount: 2899, status: "Completed" },
    { id: "#ORD-002", customer: "Jane Smith", product: "iPhone 15", amount: 1979, status: "Pending" },
    { id: "#ORD-003", customer: "Mike Johnson", product: "iPad Air", amount: 2143, status: "Processing" },
  ];

  return (

    <div className='flex flex-col justify-between md:flex-row gap-4'>
      <div className={`${theme === "dark" ? "bg-slate-950 text-white" : "bg-white text-black"} rounded-lg p-4 md:p-6 shadow-lg w-full`}>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">Recent Orders</h2>
          <p className="text-sm text-gray-500">Latest customer orders</p>
        </div>
        <button className="text-blue-600 text-sm hover:underline">View All</button>
      </div>

      {/* Mobile: Stacked cards */}
      <div className="block lg:hidden space-y-4">
        {orders.map((order, index) => (
          <div key={index} className={`p-4 rounded-lg border ${theme === "dark" ? "border-slate-800 bg-slate-900" : "border-gray-200 bg-gray-50"}`}>
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold text-blue-600">{order.id}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                order.status === "Completed" ? "bg-green-500/20 text-green-500" :
                order.status === "Pending" ? "bg-yellow-500/20 text-yellow-500" :
                "bg-blue-500/20 text-blue-500"
              }`}>{order.status}</span>
            </div>
            <p className="font-medium mb-1">{order.customer}</p>
            <p className="text-sm text-gray-500 mb-2">{order.product}</p>
            <p className="font-semibold">₦{order.amount.toLocaleString()}</p>
          </div>
        ))}
      </div>

      {/* Desktop: Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className={`border-b ${theme === "dark" ? "border-slate-800" : "border-gray-200"}`}>
            <tr>
              <th className="text-left p-3">Order ID</th>
              <th className="text-left p-3">Customer</th>
              <th className="text-left p-3">Product</th>
              <th className="text-left p-3">Amount</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className={`border-b ${theme === "dark" ? "border-slate-800 hover:bg-slate-900" : "border-gray-100 hover:bg-gray-50"}`}>
                <td className="p-3 text-blue-600 font-medium">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.product}</td>
                <td className="p-3 font-semibold">₦{order.amount.toLocaleString()}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === "Completed" ? "bg-green-500/20 text-green-500" :
                    order.status === "Pending" ? "bg-yellow-500/20 text-yellow-500" :
                    "bg-blue-500/20 text-blue-500"
                  }`}>{order.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <PiChart />
    </div>
  );
};

export default Orders;
