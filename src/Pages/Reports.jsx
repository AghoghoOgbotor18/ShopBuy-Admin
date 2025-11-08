import React, { useState, useEffect } from "react";
import { FiDownload, FiFilter, FiFileText } from "react-icons/fi";
import { useTheme } from "../Components/Context/ThemeContext";
import {motion} from "framer-motion";
import { useOpen } from "../Components/Context/OpenContext";

const Reports = () => {
  const { theme } = useTheme();
  const { isOpen } = useOpen();

  const [filter, setFilter] = useState("All");

  const reportData = [
    { id: "#RPT-001", type: "Sales", date: "2025-10-15", total: 120000, status: "Completed" },
    { id: "#RPT-002", type: "Expenses", date: "2025-10-18", total: 45000, status: "Pending" },
    { id: "#RPT-003", type: "Inventory", date: "2025-10-20", total: 68000, status: "Completed" },
    { id: "#RPT-004", type: "Revenue", date: "2025-10-22", total: 150000, status: "Completed" },
    { id: "#RPT-005", type: "Expenses", date: "2025-10-25", total: 30000, status: "Cancelled" },
    { id: "#RPT-006", type: "Sales", date: "2025-10-28", total: 90000, status: "Completed" },
  ];

  useEffect(() => {
        window.scrollTo({top:0, behavior: 'smooth'});
  }, []);

  const filteredReports =
    filter === "All"
      ? reportData
      : reportData.filter((r) => r.type === filter);

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
        }`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Reports</h1>
          <p className="text-gray-500 text-sm">Overview of system and financial reports</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            className={`flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md text-sm ${
              theme === "dark"
                ? "bg-slate-800 hover:bg-slate-700"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            <FiFilter /> Filter
          </button>
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm text-blue-600 border border-blue-500 hover:bg-linear-to-r hover:from-blue-900 hover:to-purple-800 hover:text-white cursor-pointer transition`}
          >
            <FiDownload /> Export
          </button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["All", "Sales", "Expenses", "Inventory", "Revenue"].map((btn) => (
          <button
            key={btn}
            onClick={() => setFilter(btn)}
            className={`px-4 py-2 rounded-md text-sm transition ${
              filter === btn
                ? "bg-linear-to-r from-blue-900 to-purple-800 text-white"
                : theme === "dark"
                ? "bg-slate-800 hover:bg-slate-700"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { title: "Total Sales", value: "₦420,000", icon: <FiFileText className="text-blue-500" /> },
          { title: "Total Expenses", value: "₦120,000", icon: <FiFileText className="text-purple-500" /> },
          { title: "Net Profit", value: "₦300,000", icon: <FiFileText className="text-green-500" /> },
          { title: "Pending Reports", value: "3", icon: <FiFileText className="text-yellow-500" /> },
        ].map((card, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-4 rounded-lg shadow ${
              theme === "dark" ? "bg-slate-900" : "bg-white"
            }`}
          >
            <div>
              <h3 className="text-sm text-gray-400">{card.title}</h3>
              <p className="text-xl font-semibold">{card.value}</p>
            </div>
            {card.icon}
          </div>
        ))}
      </div>

      {/* Table */}
      <div
        className={`rounded-lg overflow-hidden shadow ${
          theme === "dark" ? "bg-slate-900" : "bg-white"
        }`}
      >
        <table className="w-full text-sm">
          <thead
            className={`${
              theme === "dark"
                ? "bg-slate-800 text-gray-300"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <tr>
              <th className="text-left px-4 py-3">Report ID</th>
              <th className="text-left px-4 py-3">Type</th>
              <th className="text-left px-4 py-3">Date</th>
              <th className="text-left px-4 py-3">Total (₦)</th>
              <th className="text-left px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr
                key={report.id}
                className={`border-t ${
                  theme === "dark"
                    ? "border-slate-800 hover:bg-slate-800"
                    : "border-gray-100 hover:bg-gray-50"
                }`}
              >
                <td className="px-4 py-3 text-blue-500">{report.id}</td>
                <td className="px-4 py-3">{report.type}</td>
                <td className="px-4 py-3">{report.date}</td>
                <td className="px-4 py-3">₦{report.total.toLocaleString()}</td>
                <td
                  className={`px-4 py-3 font-medium ${
                    report.status === "Completed"
                      ? "text-green-500"
                      : report.status === "Pending"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {report.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </motion.div>
    </section>
  );
};

export default Reports;
