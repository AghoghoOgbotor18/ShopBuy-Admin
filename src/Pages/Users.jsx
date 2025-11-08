import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Components/Context/ThemeContext";
import { FiMail, FiPhone } from "react-icons/fi";
import firstAvatar from "../assets/first-avatar.jpg";
import secondAvatar from "../assets/second-avatar.jpg";
import thirdAvatar from "../assets/third-avatar.jpg";
import fourthAvatar from "../assets/fourth-avatar.jpg";
import fifthAvatar from "../assets/fifth-avatar.jpg";
import { useOpen } from "../Components/Context/OpenContext";

const users = [
  {
    id: 1,
    name: "Sylvia Donald",
    email: "Sylviadonald@gmail.com",
    phone: "+234 812 345 6789",
    role: "Admin",
    status: "Active",
    avatar: firstAvatar,
  },
  {
    id: 2,
    name: "Michael Smith",
    email: "mike.smith@gmail.com",
    phone: "+234 706 789 1234",
    role: "User",
    status: "Pending",
    avatar: secondAvatar,
  },
  {
    id: 3,
    name: "Amina Yusuf",
    email: "amina.yusuf@yahoo.com",
    phone: "+234 802 456 9870",
    role: "Moderator",
    status: "Active",
    avatar: thirdAvatar,
  },
  {
    id: 4,
    name: "David Johnson",
    email: "david.j@yahoo.com",
    phone: "+234 905 789 2233",
    role: "User",
    status: "Inactive",
    avatar: fourthAvatar,
  },
  {
    id: 5,
    name: "Tessa Abel",
    email: "tessaAbel@gmail.com",
    phone: "+234 812 456 3672",
    role: "User",
    status: "Pending",
    avatar: fifthAvatar,
  },
];

const Users = () => {
  const { theme } = useTheme();
  const { isOpen } = useOpen();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section
      className={`min-h-screen w-fit container mx-auto pt-[110px] md:pt-[120px] xl:pt-[70px] sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-10 px-10 md:px-0 pr-16 transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-800 text-white"
          : "bg-zinc-200 text-zinc-900"
      } px-2 sm:px-6 md:px-10`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`mt-3 w-auto sm:mt-4 md:mt-5 p-3 sm:p-5 md:p-6 rounded-xl shadow-lg ${
          theme === "dark" ? "bg-slate-950" : "bg-white"
        }`}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-5 md:mb-6 gap-3">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              User Management
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Manage all registered users
            </p>
          </div>
          <button className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-blue-700 to-purple-700 text-white text-sm cursor-pointer hover:opacity-90 transition">
            + Add User
          </button>
        </div>

        {/* Table Wrapper */}
        <div className="overflow-x-auto rounded-lg -mx-3 sm:mx-0 px-3 sm:px-0">
          <table className="min-w-full border-collapse text-xs sm:text-sm md:text-base">
            <thead>
              <tr
                className={`text-left border-b ${
                  theme === "dark"
                    ? "border-zinc-700"
                    : "border-zinc-300"
                }`}
              >
                <th className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 whitespace-nowrap">User</th>
                <th className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 whitespace-nowrap">Email</th>
                <th className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 whitespace-nowrap">Status</th>
                <th className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 whitespace-nowrap">Phone</th>
                <th className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 whitespace-nowrap">Role</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className={`border-b ${
                    theme === "dark"
                      ? "border-zinc-700 hover:bg-slate-900"
                      : "border-zinc-200 hover:bg-zinc-100"
                  } transition`}
                >
                  {/* USER */}
                  <td className="py-2 sm:py-3 px-2 sm:px-3 md:px-4">
                    <div className="flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full"
                      />
                      <span className="font-medium text-xs sm:text-sm md:text-base">
                        {user.name}
                      </span>
                    </div>
                  </td>

                  {/* EMAIL */}
                  <td className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <FiMail className="text-blue-500" />
                      <span className="truncate max-w-[100px] sm:max-w-[150px] md:max-w-none">
                        {user.email}
                      </span>
                    </div>
                  </td>

                  {/* STATUS */}
                  <td className="py-2 sm:py-3 px-2 sm:px-3 md:px-4">
                    <span
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-500/20 text-green-500"
                          : user.status === "Pending"
                          ? "bg-yellow-500/20 text-yellow-500"
                          : "bg-red-500/20 text-red-500"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  {/* PHONE */}
                  <td className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 text-xs sm:text-sm whitespace-nowrap">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <FiPhone className="text-green-500" /> {user.phone}
                    </div>
                  </td>

                  {/* ROLE */}
                  <td className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 whitespace-nowrap text-xs sm:text-sm md:text-base">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
};

export default Users;