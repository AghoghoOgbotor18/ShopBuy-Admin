import React, { useState, useEffect } from "react";
import { FaBars, FaBolt, FaSearch, FaPlus, FaRegSun, FaRegMoon, FaRegBell, FaThLarge, FaChartBar, FaUsers, FaShoppingCart, FaBoxes, FaExchangeAlt, FaCommentDots, FaCalendarAlt, FaCog } from "react-icons/fa";
import { FiSettings, FiSun } from "react-icons/fi";
import photo from '../../assets/passpt.jpg'
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import { useOpen } from "../Context/OpenContext";

const Sidebar = () => {

    const {isOpen, toggleOpen} = useOpen();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const [isVisible, setIsVisible] = useState(false);
    const {theme, toggleTheme} = useTheme();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener("resize", handleResize);
        return () => removeEventListener("resize", handleResize);
    }, []);

    //handle intital sidebar based on screen size
    useEffect(() => {
        if(isMobile && isOpen) toggleOpen();
        if(!isMobile && !isOpen) toggleOpen();
    }, [isMobile]);

    return(
        <div className={`flex fixed w-screen shadow-lg z-10 ${theme === "dark" ? "bg-slate-950 text-white" : "bg-white text-black"}`}>
            <div className="md:mx-auto md:py-3">

                {/* Desktop Navbar */}
                <div className="xl:flex hidden jusitify-between items-center gap-25 px-5">
                        <div className="flex items-center gap-2">
                            <div className="bg-linear-to-r from-blue-900 to-purple-800 w-fit py-2 px-3 rounded flex justify-center items-center">
                                <FaBolt size={20} className="text-white" />
                            </div>
                            <div className="flex flex-col text-xs">
                                <h2 className="font-bold text-sm">ShopBuy</h2>
                                <p className="text-zinc-500">Admin Page</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="cursor-pointer">
                                <FaBars size={20} onClick={toggleOpen} />
                            </div>
                            <div className="flex flex-col text-xs">
                                <h2 className="font-bold text-lg">Dashboard</h2>
                                <p className="text-zinc-500">Welcome back, Sarah! Here's what's happening today.</p>
                            </div>
                        </div>

                        <div>
                            <form className="relative flex items-center">
                                <input type="text" placeholder="search anything..."
                                value={search} onChange={handleSearch} className={`border py-2  rounded-lg px-6 focus:outline-none ${
                                    theme === "dark" ? "bg-slate-900/80 border-slate-800" : "bg-zinc-100/70 border-zinc-300"
                                }`} />
                                <FaSearch size={17} className="text-zinc-400 absolute top-3 right-2 cursor-pointer"/>
                            </form>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex bg-linear-to-r from-blue-900 to-purple-800 w-fit py-2 px-3 items-center text-sm text-white gap-1 cursor-pointer rounded-lg">
                                <FaPlus size={10} />
                                <p>New</p>
                            </div>
                            <button onClick={toggleTheme} className="cursor-pointer">
                                {theme === "dark" ? <FiSun size={17} className="text-orange-400" /> : <FaRegMoon size={17} className="text-slate-950" />}
                            </button>
                            <div className="relative w-fit cursor-pointer">
                                <FaRegBell size={17}  />
                                <div className="bg-red-500 text-white w-fit px-1 rounded-full text-[8px] absolute -top-1 left-3">
                                    <p>3</p>
                                </div>
                            </div>
                            <div className="cursor-pointer">
                                <NavLink to="/settings" className={({isActive}) => `${theme === "dark" ? "bg-white" : "bg-black"} ${isActive && "text-slate-500"}`}>
                                    <FiSettings size={17} />
                                </NavLink>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={photo} alt="girl" className="w-7 h-7 rounded-full" />
                                <div className="flex flex-col text-xs cursor-pointer" onClick={() => setIsVisible(!isVisible)}>
                                    <h2 className="font-bold text-sm">Sarah Charles</h2>
                                    <p className="text-zinc-500">Aministrator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    { isVisible && (
                    <div className={`py-3 px-6 absolute top-16 right-4 rounded shadow cursor-pointer z-20 hover:scale-102 ${theme === "dark"? "bg-slate-950 text-white" : "text-black bg-white"}`}>
                        <p>Log Out</p>
                    </div> )}
                </div>

                {/* Mobile Navbar */}
                <div className="xl:hidden w-full">
                    <div className={`${theme === "dark" ? "border-b-slate-900" : "border-b-zinc-100"} shadow-xs py-3 px-7 border-b `}>
                        <div className="flex justify-between items-center ">
                            <div className="flex items-center gap-2">
                                <div className="bg-linear-to-r from-blue-900 to-purple-800 w-fit py-2 px-3 rounded flex justify-center items-center">
                                    <FaBolt size={20} className="text-white" />
                                </div>
                                <div className="flex flex-col text-xs">
                                    <h2 className="font-bold text-sm">ShopBuy</h2>
                                    <p className="text-zinc-500">Admin Page</p>
                                </div>
                            </div>
                            <div>
                                <form className="relative hidden md:flex items-center">
                                    <input type="text" placeholder="search anything..."
                                    value={search} onChange={handleSearch} className={`border py-2  rounded-lg px-6 focus:outline-none ${
                                        theme === "dark" ? "bg-slate-900/80 border-slate-800" : "bg-zinc-100/70 border-zinc-300"
                                    }`} />
                                    <FaSearch size={17} className="text-zinc-400 absolute top-3 right-2 cursor-pointer"/>
                                </form>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={photo} alt="girl" className="w-7 h-7 rounded-full" />
                                <div className="flex flex-col text-xs cursor-pointer" onClick={() => setIsVisible(!isVisible)}>
                                    <h2 className="font-bold text-sm">Sarah Charles</h2>
                                    <p className="text-zinc-500">Aministrator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-1 px-5">
                        <div className="flex justify-between items-center py-3 px-4">
                        <div className="flex items-center gap-3">
                            <div className="flex justify-center items-center gap-2 cursor-pointer">
                                <FaBars size={20} onClick={toggleOpen} />
                                <h2 className="font-bold text-md">Dashboard</h2>
                            </div>
                        </div>
                        <div className="flex items-center gap-7">
                            <div className="hidden md:flex bg-linear-to-r from-blue-900 to-purple-800 w-fit py-2 px-3 items-center text-sm text-white gap-1 cursor-pointer rounded-lg">
                                <FaPlus size={10} />
                                <p>New</p>
                            </div>
                            <button onClick={toggleTheme} className="cursor-pointer">
                                {theme === "dark" ? <FiSun size={17} className="text-orange-400" /> : <FaRegMoon size={17} className="text-slate-950" />}
                            </button>
                            <div className="relative w-fit cursor-pointer">
                                <FaRegBell size={17}  />
                                <div className="bg-red-500 text-white w-fit px-1 rounded-full text-[8px] absolute -top-1 left-3">
                                    <p>3</p>
                                </div>
                            </div>
                            <div className="cursor-pointer">
                                <NavLink to="/settings" className={({isActive}) => `${theme === "dark" ? "bg-white" : "bg-black"} ${isActive && "text-slate-500"}`}>
                                    <FiSettings size={17} />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>


                {/*  slide in and slide out side bar */}
                <div className={`min-h-screen absolute shadow-2xl top-30 md:top-35 lg:top-[150px] xl:top-[90px] left-0 text-black/80 z-5 rounded text-sm w-1/5 transition-all duration-300
                     ${theme === "dark" ? "bg-slate-950 text-white" : "bg-white"}
                      ${isOpen ? "w-full lg:w-60" : "w-18 overflow-x-hidden"}`}>
                    <ul className="container mx-auto p-5 flex flex-col justify-start gap-4">
                        {[
                            { to: "/", label: "Dashboard", icon: <FaThLarge size={20} /> },
                            { to: "/analytics", label: "Analytics", icon: <FaChartBar size={20} /> },
                            { to: "/users", label: "Users", icon: <FaUsers size={20} />, badge: "2.4x" },
                            { to: "/ecommerce", label: "E-Commerce", icon: <FaShoppingCart size={20} /> },
                            { to: "/inventory", label: "Inventory", icon: <FaBoxes size={20} />, badge: "847" },
                            { to: "/transactions", label: "Transactions", icon: <FaExchangeAlt size={20} /> },
                            { to: "/messages", label: "Messages", icon: <FaCommentDots size={20} />, badgeRed: "12" },
                            { to: "/reports", label: "Reports", icon: <FaChartBar size={20} /> },
                            { to: "/settings", label: "Settings", icon: <FaCog size={20} /> },
                        ].map((item, i) => (
                            <li key={i}>
                            <NavLink
                                to={item.to}
                                onClick={() => {
                                    if(isMobile && isOpen) toggleOpen()
                                }}
                                className={({ isActive }) =>
                                `${theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-100"} ${
                                    isActive
                                    ? "bg-linear-to-r from-blue-900 to-purple-800 text-white"
                                    : ""
                                } flex items-center py-2 px-4 rounded transition-all duration-300 ${
                                    isOpen ? "md:justify-start gap-4" : "justify-center"
                                }`
                                }
                            >
                                <span>{item.icon}</span>
                                {isOpen && (
                                <>
                                    <span>{item.label}</span>
                                    {item.badge && (
                                    <span className="bg-slate-200 rounded-full text-[10px] p-1 text-black">
                                        {item.badge}
                                    </span>
                                    )}
                                    {item.badgeRed && (
                                    <span className="bg-red-500 text-white rounded-full text-[10px] px-1">
                                        {item.badgeRed}
                                    </span>
                                    )}
                                </>
                                )}
                            </NavLink>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
    )
}

export default Sidebar