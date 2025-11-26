import React, { useState, useEffect } from "react";
import { useTheme } from "../Components/Context/ThemeContext";
import { FiUser, FiBell, FiLock, FiSave, FiSun, FiMoon } from "react-icons/fi";
import {motion} from 'framer-motion';
import { useOpen } from "../Components/Context/OpenContext";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const { isOpen } = useOpen();

  const [name, setName] = useState("Sehara Charles");
  const [email, setEmail] = useState("seharacharles@gmail.com");
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState(false);

  const handleSave = () => {
    alert("Settings saved successfully!");
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
        className={`mx-5 mt-5 p-6 rounded-xl shadow-lg ${
          theme === "dark" ? "bg-slate-950" : "bg-white"
        }`}>
        <h2 className="text-2xl font-bold mb-6">Settings</h2>

        {/* Profile Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FiUser /> Profile Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full p-2 rounded-md border ${
                  theme === "dark"
                    ? "bg-slate-800 border-slate-700"
                    : "bg-gray-50 border-gray-300"
                }`}
              />
            </div>
            <div>
              <label className="block mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-2 rounded-md border ${
                  theme === "dark"
                    ? "bg-slate-800 border-slate-700"
                    : "bg-gray-50 border-gray-300"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FiBell /> Preferences
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <span>Private Profile</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={privacy}
                  onChange={() => setPrivacy(!privacy)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <span>Theme</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 cursor-pointer bg-linear-to-r from-blue-900 to-purple-800 text-white px-3 py-2 rounded-md"
              >
                {theme === "dark" ? <FiSun /> : <FiMoon />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FiLock /> Security
          </h3>
          <button
            className="text-blue-600 underline cursor-pointer transition"
            onClick={() => alert("Password reset link sent to email!")}
          >
            Reset Password
          </button>
        </div>

        {/* Save Button */}
        <div className="text-right">
          <button
            onClick={handleSave}
            className="flex items-center cursor-pointer gap-2 bg-linear-to-r from-blue-800 to-purple-700 text-white px-5 py-2 rounded-md transition"
          >
            <FiSave /> Save Changes
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Settings;
