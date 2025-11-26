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
      className={`min-h-screen overflow-hidden  pt-[120px] xl:pt-[70px] sm:pt-30 md:pt-33 pb-6 sm:pb-8 md:pb-10 pl-6 md:px-0 transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-800 text-white"
          : "bg-zinc-200 text-zinc-900"
      } px-2 sm:px-6 md:px-10`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`mt-3 sm:mt-4 md:mt-5 p-3 sm:p-5 md:p-6 rounded-xl shadow-lg ${
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
          <button className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded-lg bg-linear-to-r from-blue-700 to-purple-700 text-white text-sm cursor-pointer hover:opacity-90 transition">
            + Add User
          </button>
        </div>

        {/* Table Wrapper */}
        
        <div className="overflow-x-auto rounded-lg -mx-3 sm:mx-0 px-3 sm:px-0">
          <table className="min-w-full border-collapse text-xs sm:text-sm md:text-base">
            <thead className="hidden lg:table-header-group">
              <tr
                className={`text-left border-b ${
                  theme === "dark" ? "border-zinc-700" : "border-zinc-300"
                }`}
              >
                <th className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 whitespace-nowrap">User</th>
                <th className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 whitespace-nowrap">Email</th>
                <th className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 whitespace-nowrap">Status</th>
                <th className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 whitespace-nowrap">Phone</th>
                <th className="py-2 sm:py-3 px-2 sm:px-3 md:px-4 whitespace-nowrap">Role</th>
              </tr>
            </thead>

            <tbody className="block md:table-row-group">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className={`block lg:table-row border-b lg:border-b-0 mb-4 lg:mb-0 p-4 lg:p-0 rounded-lg ${
                    theme === "dark"
                      ? "border-zinc-700 hover:bg-slate-900"
                      : "border-zinc-200 hover:bg-zinc-100"
                  } transition`}
                >
                  {/* USER */}
                  <td className="block lg:table-cell py-2 lg:py-2 px-0 lg:px-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <span className="font-medium block">{user.name}</span>
                        <span className="lg:hidden block text-gray-400 text-sm">{user.role}</span>
                      </div>
                    </div>
                  </td>

                  {/* EMAIL */}
                  <td className="block lg:table-cell py-2 lg:py-2 px-0 lg:px-3">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="lg:hidden font-extrabold">Email:</span>
                      <FiMail className="text-blue-500" />
                      <span>{user.email}</span>
                    </div>
                  </td>

                  {/* STATUS */}
                  <td className="block lg:table-cell py-2 lg:py-2 px-0 lg:px-3">
                    <span className="lg:hidden font-extrabold">Status: </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
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
                  <td className="block lg:table-cell py-2 lg:py-2 px-0 lg:px-3">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="lg:hidden font-extrabold">Phone:</span>
                      <FiPhone className="text-green-500" />
                      {user.phone}
                    </div>
                  </td>

                  {/* ROLE */}
                  <td className="hidden lg:block lg:table-cell py-2 lg:py-2 px-0 md:px-3 ">
                    <span className="md:hidden font-extrabold">Role: </span>
                    {user.role}
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

export default Users;