import React, { useEffect, useRef } from "react";
import { FiTrendingUp, FiUsers, FiShoppingCart, FiBarChart2 } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "../Components/Context/ThemeContext";
import { useOpen } from "../Components/Context/OpenContext";

const Analytics = () => {

    const {theme} = useTheme();
    const {isOpen} = useOpen();
    const sectionRef = useRef(null);
    const controls = useAnimation();

    // Animate on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) controls.start({ opacity: 1, y: 0 });
            });
        },
        { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [controls]);

    const cards = [
        { icon: <FiTrendingUp />, title: "Revenue Growth", value: "₦450K", change: "+12%" },
        { icon: <FiUsers />, title: "Active Users", value: "2,874", change: "+8%" },
        { icon: <FiShoppingCart />, title: "Total Sales", value: "1,249", change: "+5%" },
        { icon: <FiBarChart2 />, title: "Conversion Rate", value: "4.3%", change: "-2%" },
    ];

    const handleDownload = () => {
        alert ("Report Downloaded")
    }

    useEffect(() => {
        window.scrollTo({top:0, behavior: 'smooth'});
    }, []);

    return (
        <section
        ref={sectionRef}
        className={`min-h-screen pt-[110px] md:pt-[120px] xl:pt-[70px] pb-10 px-4 md:px-5 pr-2 transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-800 text-white"
          : "bg-zinc-200 text-zinc-900"
      }`}
        >
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.7 }}
            className={`mx-1 mt-5 p-6 rounded-xl shadow-lg ${
            theme === "dark" ? "bg-slate-950" : "bg-white"
        }`}>
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div>
                <h2 className="text-2xl font-bold">Analytics Overview</h2>
                <p className="text-sm opacity-80">
                Insights into your platform's performance and trends
                </p>
            </div>
            <button
                className="mt-3 md:mt-0 px-5 py-2 cursor-pointer bg-linear-to-r from-blue-900 to-purple-800 text-white rounded-lg text-sm shadow-md hover:scale-105 transition-transform"
                onClick = {handleDownload}
            >
                Download Report
            </button>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cards.map((card, i) => (
                <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={controls}
                transition={{ delay: i * 0.1 + 0.4 }}
                className={`rounded-lg p-5 flex flex-col gap-3 shadow-2xl ${
                    theme === "dark" ? "bg-slate-900" : "bg-white"
                }`}
                >
                <div className="flex justify-between items-center">
                    <div className="text-3xl text-blue-700">{card.icon}</div>
                    <p
                    className={`text-sm ${
                        card.change.includes("-") ? "text-red-500" : "text-green-500"
                    }`}
                    >
                    {card.change}
                    </p>
                </div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-2xl font-bold">{card.value}</p>
                </motion.div>
            ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Revenue Chart (Mock) */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ delay: 0.6 }}
                className={`rounded-lg p-6 shadow-2xl ${
                theme === "dark" ? "bg-slate-900" : "bg-white"
                }`}
            >
                <h3 className="font-semibold mb-4">Revenue Growth</h3>
                <div className="h-64 flex items-end gap-3">
                {[50, 70, 85, 65, 95, 80, 100].map((value, i) => (
                    <div
                    key={i}
                    className="flex-1 bg-linear-to-b from-blue-900 to-purple-800 rounded-t-md transition-all duration-500"
                    style={{ height: `${value}%` }}
                    ></div>
                ))}
                </div>
                <p className="text-center mt-3 text-xs text-zinc-400">Last 7 months</p>
            </motion.div>

            {/* Traffic Sources */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ delay: 0.8 }}
                className={`rounded-lg p-6 shadow-2xl ${
                theme === "dark" ? "bg-slate-900" : "bg-white"
                }`}
            >
                <h3 className="font-semibold mb-4">Traffic Sources</h3>
                <div className="flex justify-center items-center h-64">
                <div className="relative w-48 h-48">
                    <div className="absolute inset-0 rounded-full border-8 border-blue-800"></div>
                    <div className="absolute inset-4 rounded-full border-8 border-purple-600"></div>
                    <div className="absolute inset-8 rounded-full border-8 border-zinc-400"></div>
                </div>
                </div>
                <div className="flex justify-around mt-5 text-sm">
                <p><span className="text-blue-700 font-bold">•</span> Direct</p>
                <p><span className="text-purple-700 font-bold">•</span> Social</p>
                <p><span className="text-gray-500 font-bold">•</span> Referral</p>
                </div>
            </motion.div>
            </div>
        </motion.div>
        </section>
    );
};

export default Analytics;
