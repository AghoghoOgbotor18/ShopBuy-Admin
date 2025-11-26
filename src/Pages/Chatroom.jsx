import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../Components/Context/ThemeContext";
import { FaChevronLeft, FaPaperPlane, FaPlus } from "react-icons/fa";
import {useOpen} from "../Components/Context/OpenContext";

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
import admin from "../assets/passpt.jpg";

const Chatroom = () => {
  const { theme } = useTheme();
  const {isOpen} = useOpen();
  const { id } = useParams();
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]); // new messages you send

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const msg = messages.find((message) => message.id === Number(id));

  // Handle sending your message
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg = {
      id: Date.now(),
      text: input,
      time: "Just now",
      photo: admin,
    };

    setChat((prev) => [...prev, newMsg]);
    setInput("");

    //Reset textarea height
    const textarea = document.querySelector("#chatInput");
    if (textarea) textarea.style.height = "3rem";
  };

  return (
    <section
      className={`min-h-screen overflow-hidden pt-[110px] md:pt-[120px] xl:pt-[70px] pb-10 transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-800 text-white"
          : "bg-zinc-200 text-zinc-900"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`mx-5 mt-5 p-6 rounded-xl relative shadow-lg ${
          theme === "dark" ? "bg-slate-950" : "bg-white"
        }`}
      >
        <div className="container mx-auto relative">
          <div className="flex flex-col justify-between gap-10">
            {/* Header */}
            <div className={`py-3 px-2 absolute top-0 w-full shadow-lg flex justify-between items-center gap-2 ${
          theme === "dark" ? "bg-slate-950/20" : "bg-zinc-100/50"
        }`}>
              <Link to="/messages">
                <div className="flex gap-2 items-center cursor-pointer hover:text-zinc-400">
                  <FaChevronLeft size={17} />
                  <p>Back to messages</p>
                </div>
              </Link>
              <div className="flex gap-2 items-center">
                <img
                  src={msg.image}
                  alt={msg.name}
                  className="w-12 h-12 rounded-full"
                />
                <p className="font-semibold">{msg.name}</p>
              </div>
            </div>

            {/* Chat messages area */}
            <div className=" mb-[8rem] space-y-4">
              <div className="flex justify-end items-end gap-2 my-[10rem]">
                {/* Message bubble */}
                <div
                  className={`shadow-md relative py-1 px-3 rounded-md rounded-br-none w-fit max-w-[70%] 
                    ${theme === "dark" ? "bg-slate-800 text-white" : "bg-zinc-100 text-black"}`}
                >
                  <div className="flex flex-col p-3 py-6 break-words whitespace-pre-wrap">
                    <p>{msg.text}</p>
                    <p className="text-[10px] text-zinc-600 self-end absolute bottom-0 right-0 p-1">{msg.time}</p>
                  </div>
                </div>

                {/* User image (outside bubble on right) */}
                <img
                  src={msg.image}
                  alt={msg.name}
                  className="w-5 h-5 rounded-full shadow-md"
                />
              </div>


              {/* Your messages (left side) */}
              {chat.map((m) => (
                <div key={m.id} className="flex items-end justify-start gap-2">
                  <div>
                    <img src={m.photo} alt={m.name} className='w-5 h-5 rounded-full'/>
                  </div>
                  <div
                    className={`shadow-md relative py-3 px-3 rounded-md rounded-bl-none w-fit max-w-[70%] ${
                      theme === "dark"
                        ? "bg-slate-700 text-white/80"
                        : "bg-zinc-300 text-black"
                    }`}
                  >

                    <div className="flex flex-col p-3 break-words whitespace-pre-wrap">
                      <p>{m.text}</p>
                      <p className="absolute bottom-0 right-0 text-[10px] p-1">
                      {m.time}
                    </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input section */}
            <div className="rounded-2xl shadow-2xl py-3 px-4 absolute bottom-0 left-0 w-full flex flex-wrap justify-center items-center">
              <div className="flex justify-between items-center min-w-full px-10">
                
                <form onSubmit={handleSubmit} className="flex items-center justify-center gap-3 w-full" >
                  <button>
                    <FaPlus
                    size={7}
                    className={`w-8 h-8 p-2 shadow-lg rounded-full cursor-pointer ${
                      theme === "dark"
                        ? "bg-slate-800 text-white hover:bg-slate-700"
                        : "bg-zinc-100 text-black"
                    }`}
                  />
                  </button>
                  <textarea
                    id="chatInput"
                    placeholder="your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className={`border-2 border-zinc-600 outline-0 p-3 rounded-2xl min-w-full h-[3rem] max-h-[8rem]
                      resize-y overflow-y-hidden
                      break-words whitespace-pre-wrap
                      ${
                        theme === "dark"
                          ? "bg-slate-800 text-white"
                          : "bg-zinc-100 text-black"
                      }`}
                    onInput={(e) => {
                      e.target.style.height = "3rem"; // reset
                      e.target.style.height = e.target.scrollHeight + "px"; // grow as needed
                    }}
                  />
                  <button type="submit">
                    <FaPaperPlane
                      size={7}
                      className={`w-8 h-8 p-2 shadow-lg rounded-full cursor-pointer ${
                        theme === "dark"
                          ? "bg-slate-800 text-white hover:bg-slate-700"
                          : "bg-zinc-100 text-black"
                      }`}
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Chatroom;
