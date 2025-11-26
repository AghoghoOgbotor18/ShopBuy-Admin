import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useTheme } from "../Context/ThemeContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const PiChart = () => {
  const { theme } = useTheme();

  const data = {
    labels: ["Electronics", "Clothing", "Books", "Other"],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: [
          "#3B82F6", // blue
          "#8B5CF6", // purple
          "#22C55E", // green
          "#F59E0B", // yellow
        ],
        borderWidth: 0,
        cutout: "70%", // donut thickness
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    maintainAspectRatio: false,
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-950 text-white" : "bg-white"
      } p-5 rounded-xl shadow-lg w-full`}
    >
      <h2 className="text-lg font-semibold mb-1">Sales by Category</h2>
      <p className="text-gray-400 text-sm mb-4">Product distribution</p>

      {/* Chart Container */}
      <div className="flex justify-center mb-4 overflow-hidden">
        <div className="w-48 h-48">
          <Doughnut data={data} options={options} />
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-between text-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#3B82F6]"></span>
            <span>Electronics</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#8B5CF6]"></span>
            <span>Clothing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#22C55E]"></span>
            <span>Books</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]"></span>
            <span>Other</span>
          </div>
        </div>

        <div className="text-right space-y-2">
          <p>45%</p>
          <p>30%</p>
          <p>15%</p>
          <p>10%</p>
        </div>
      </div>
    </div>
  );
};

export default PiChart;
