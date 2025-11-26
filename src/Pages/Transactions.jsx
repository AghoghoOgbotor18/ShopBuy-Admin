import React, { useState, useEffect } from "react";
import { useTheme } from "../Components/Context/ThemeContext";
import { FiSearch } from "react-icons/fi";
import {motion} from "framer-motion";
import { useOpen } from "../Components/Context/OpenContext";

// local images
import user1 from "../assets/first-avatar.jpg";
import user2 from "../assets/second-avatar.jpg";
import user3 from "../assets/third-avatar.jpg";
import user4 from "../assets/fourth-avatar.jpg";

const Transactions = () => {
  const { theme } = useTheme();
  const {isOpen} = useOpen();
  const [searchTerm, setSearchTerm] = useState("");

  const transactions = [
    {
      id: "#TXN001",
      name: "Phyna James",
      email: "phyna.james@gmail.com",
      amount: 85000,
      date: "2025-11-02",
      status: "Successful",
      image: user1,
    },
    {
      id: "#TXN002",
      name: "Sarah Smith",
      email: "sarahsmith@gmail.com",
      amount: 42000,
      date: "2025-09-06",
      status: "Pending",
      image: user2,
    },
    {
      id: "#TXN003",
      name: "Michael Johnson",
      email: "michael.J@yahoo.com",
      amount: 120000,
      date: "2025-10-30",
      status: "Failed",
      image: user3,
    },
    {
      id: "#TXN004",
      name: "Adaobi Nwachukwu",
      email: "adaobiNwa@yahoo.com",
      amount: 63000,
      date: "2025-10-28",
      status: "Successful",
      image: user4,
    },
  ];

  const filtered = transactions.filter((t) =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Successful":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  useEffect(() => {
        window.scrollTo({top:0, behavior: 'smooth'});
  }, []);

  return (
    <section className={`min-h-screen overflow-hidden pt-[110px] md:pt-[120px] xl:pt-[70px] pb-10 transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-800 text-white"
          : "bg-zinc-200 text-zinc-900"
      }`}>
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`mx-5 mt-5 p-6 rounded-xl shadow-lg  ${
          theme === "dark" ? "bg-slate-950" : "bg-white"
        }`}>
            <h1 className="text-2xl font-semibold mb-4">Transactions</h1>
            <p className="text-gray-500 mb-6">
                View all customer payment transactions
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
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`outline-none bg-transparent w-full text-sm ${
                    theme === "dark" ? "placeholder-gray-500" : "placeholder-gray-400"
                }`}
                />
            </div>

            {/* Table */}
            <div
                className={`overflow-x-auto rounded-lg shadow-md border ${
                theme === "dark"
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-gray-200"
                }`}
            >
                <table className="min-w-full text-sm">
                <thead
                    className={`hidden lg:table-header-group text-left border-b ${
                    theme === "dark" ? "border-slate-800" : "border-gray-200"
                    }`}
                >
                    <tr>
                    <th className="p-4">Customer</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Date</th>
                    <th className="p-4 text-center">Status</th>
                    </tr>
                </thead>
                <tbody className="block lg:table-row-group">
                    {filtered.map((txn) => (
                    <tr
                        key={txn.id}
                        className={`block lg:table-row border-b lg:border-b mb-4 lg:mb-0 p-4 lg:p-0 rounded-lg lg:rounded-none hover:bg-opacity-80 transition ${
                        theme === "dark"
                            ? "border-slate-800 hover:bg-slate-800"
                            : "border-gray-100 hover:bg-gray-50"
                        }`}
                    >
                        <td className="block lg:table-cell p-0 lg:p-4 mb-3 lg:mb-0">
                        <div className="flex items-center gap-3">
                            <img
                                src={txn.image}
                                alt={txn.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-medium">{txn.name}</p>
                                <p className="text-xs text-gray-500">{txn.id}</p>
                            </div>
                        </div>
                        </td>
                        <td className="block lg:table-cell p-0 lg:p-4 mb-2 lg:mb-0">
                            <span className="lg:hidden font-extrabold">Email: </span>
                            {txn.email}
                        </td>
                        <td className="block lg:table-cell p-0 lg:p-4 mb-2 lg:mb-0 font-semibold">
                            <span className="lg:hidden font-extrabold">Amount: </span>
                            ₦{txn.amount.toLocaleString()}
                        </td>
                        <td className="block lg:table-cell p-0 lg:p-4 mb-2 lg:mb-0">
                            <span className="lg:hidden font-extrabold">Date: </span>
                            {txn.date}
                        </td>
                        <td className="block lg:table-cell p-0 lg:p-4 lg:text-center">
                            <span className="lg:hidden font-extrabold">Status: </span>
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                txn.status
                                )}`}
                            >
                                {txn.status}
                            </span>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>

                {filtered.length === 0 && (
                <p className="text-center p-6 text-gray-500">No transactions found</p>
                )}
            </div>
        </motion.div>
    </section>    
  );
};

export default Transactions;