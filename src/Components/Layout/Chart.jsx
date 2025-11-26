import React from "react";
import { useTheme } from "../Context/ThemeContext";

const Chart = () => {
  const data = [
    { month: "Jan", revenue: 60, expenses: 40 },
    { month: "Feb", revenue: 75, expenses: 55 },
    { month: "Mar", revenue: 90, expenses: 65 },
    { month: "Apr", revenue: 70, expenses: 50 },
    { month: "May", revenue: 85, expenses: 60 },
    { month: "Jun", revenue: 95, expenses: 70 },
    { month: "Jul", revenue: 60, expenses: 40 },
    { month: "Aug", revenue: 75, expenses: 55 },
    { month: "Sep", revenue: 90, expenses: 65 },
    { month: "Oct", revenue: 70, expenses: 50 },
    { month: "Nov", revenue: 85, expenses: 60 },
    { month: "Dec", revenue: 95, expenses: 70 },
  ];

  const { theme } = useTheme();

  return (
    <section className="mt-10 flex flex-row overflow-hidden w-full">
      <div
        className={`${
          theme === "dark" ? "bg-slate-950 text-white" : "bg-white"
        } rounded-md p-5 flex flex-col gap-16 w-full`}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-5 md:gap-2 items-center">
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold">Revenue Overview</h3>
            <p className="text-sm opacity-75">Monthly revenue and expenses</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-linear-to-r from-blue-800 to-purple-800 rounded-full"></div>
              <p>Revenue</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-zinc-600 rounded-full"></div>
              <p>Expenses</p>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="flex justify-center items-end overflow-x-auto pb-5">
          <div className="flex items-end">
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between text-sm pr-3 h-[220px]">
              <p>&#8358;100K</p>
              <p>&#8358;75K</p>
              <p>&#8358;50K</p>
              <p>&#8358;20K</p>
              <p>&#8358;0K</p>
            </div>

            {/* Bars */}
            <div className="flex items-end gap-4">
              {data.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex items-end gap-1">
                    {/* Revenue bar */}
                    <div
                      style={{ height: `${item.revenue * 2}px` }}
                      className="w-6 bg-linear-to-b from-blue-900 to-purple-800 rounded-t-sm"
                    ></div>

                    {/* Expenses bar */}
                    <div
                      style={{ height: `${item.expenses * 2}px` }}
                      className="w-6 bg-zinc-500 rounded-t-sm"
                    ></div>
                  </div>
                  <p className="text-xs mt-2">{item.month}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart;
