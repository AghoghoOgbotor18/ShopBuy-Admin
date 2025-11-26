import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useTheme } from "../Components/Context/ThemeContext";
import {motion} from "framer-motion";
import {Link} from 'react-router-dom';

// local user images
import user1 from "../assets/first-avatar.jpg";
import user2 from "../assets/second-avatar.jpg";
import user3 from "../assets/third-avatar.jpg";
import user4 from "../assets/fourth-avatar.jpg";
import user5 from "../assets/fifth-avatar.jpg";
import user6 from "../assets/second-avatar.jpg";
import user7 from "../assets/fourth-avatar.jpg";
import user8 from "../assets/first-avatar.jpg";
import user9 from "../assets/third-avatar.jpg";
import user10 from "../assets/fifth-avatar.jpg";
import user11 from "../assets/second-avatar.jpg";
import user12 from "../assets/fourth-avatar.jpg";
import { useOpen } from "../Components/Context/OpenContext";

const Messages = () => {
  const { theme } = useTheme();
  const { isOpen } = useOpen();
  const [search, setSearch] = useState("");
 
  const messages = [
    {
      id: 1,
      name: "Sylvia Abel",
      text: "Hi, I wanted to confirm my order status.",
      time: "2 mins ago",
      image: user1,
    },
    {
      id: 2,
      name: "Michael Smith",
      text: "Thanks for the quick delivery!",
      time: "5 mins ago",
      image: user2,
    },
    {
      id: 3,
      name: "Tracy Johnson",
      text: "Can I get a refund for my last purchase?",
      time: "10 mins ago",
      image: user3,
    },
    {
      id: 4,
      name: "Christian John",
      text: "The color I ordered was different. Please help.",
      time: "15 mins ago",
      image: user4,
    },
    {
      id: 5,
      name: "Sonia Brown",
      text: "Hey, is the item still available?",
      time: "20 mins ago",
      image: user5,
    },
    {
      id: 6,
      name: "Obi Eze",
      text: "I've just made payment, please confirm.",
      time: "30 mins ago",
      image: user6,
    },
    {
      id: 7,
      name: "Emma Wilson",
      text: "Loved the product! I'll order again.",
      time: "40 mins ago",
      image: user7,
    },
    {
      id: 8,
      name: "Jenny Carter",
      text: "Can I change my delivery address?",
      time: "1 hr ago",
      image: user8,
    },
    {
      id: 9,
      name: "Grace Okafor",
      text: "I've not received my tracking ID yet.",
      time: "2 hrs ago",
      image: user9,
    },
    {
      id: 10,
      name: "Olivia Thomas",
      text: "Do you have size 42 available?",
      time: "3 hrs ago",
      image: user10,
    },
    {
      id: 11,
      name: "Daniel James",
      text: "Can I pay on delivery?",
      time: "5 hrs ago",
      image: user11,
    },
    {
      id: 12,
      name: "Jerry White",
      text: "Thank you for the amazing service!",
      time: "1 day ago",
      image: user12,
    },
  ];

  const filtered = messages.filter((msg) =>
    msg.name.toLowerCase().includes(search.toLowerCase())
  );

  

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
            <h1 className="text-2xl font-semibold mb-4">Messages</h1>
            <p className="text-gray-500 mb-6">View and manage customer messages</p>

            {/* Search Bar */}
            <div
                className={`flex items-center gap-2 mb-6 px-4 py-2 rounded-full shadow-sm w-full sm:w-96 ${
                theme === "dark" ? "bg-slate-900" : "bg-white"
                }`}
            >
                <FiSearch className="text-gray-400" />
                <input
                type="text"
                placeholder="Search messages..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`outline-none bg-transparent w-full text-sm ${
                    theme === "dark" ? "placeholder-gray-500" : "placeholder-gray-400"
                }`}
                />
            </div>

            {/* Messages List */}
            <div
                className={`rounded-xl shadow-md border overflow-hidden ${
                theme === "dark"
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-gray-200"
                }`}>
              
                {filtered.map((msg) => (
                <Link key={msg.id} to={`/messages/${msg.id}`}> 
                  <div
                      className={`flex items-center justify-between px-4 py-3 border-b cursor-pointer transition ${
                      theme === "dark"
                          ? "border-slate-800 hover:bg-slate-800"
                          : "border-gray-100 hover:bg-gray-50"
                      }`}
                  >
                    
                      <div className="flex items-center gap-3">
                        <img
                            src={msg.image}
                            alt={msg.name}
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="font-medium text-sm">{msg.name}</h2>
                            <p className="md:text-sm text-gray-500 truncate w-[80px] sm:w-[300px]">
                            {msg.text}
                            </p>
                        </div>
                      </div>
                    
                    <p className="text-xs text-gray-400">{msg.time}</p>
                  </div>
                </Link>
                ))}
              
                {filtered.length === 0 && (
                <p className="text-center py-10 text-gray-500">No messages found</p>
                )}
            </div>
        </motion.div>
    </section>
  );
};

export default Messages;
