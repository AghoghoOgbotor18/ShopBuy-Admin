import React from 'react';
import { FaClock, FaRegClock } from 'react-icons/fa';
import { FiBell, FiCreditCard, FiSettings, FiShoppingCart, FiUser } from 'react-icons/fi';
import { useTheme } from '../Context/ThemeContext';

const Activity = () => {

    const items = [
        {info:"New user registered", active: "John Smith created an account", time: "2 minutes ago", icon: <FiUser />, color: "blue"},
        {info:"New order received", active: "Order #3847 for ₦4,578", time: "3 minutes ago",  icon: <FiShoppingCart />,color: "green"},
        {info:"Payment processed", active: "Payment of ₦10,340 completed", time: "12 minutes ago", icon: <FiCreditCard />, color: "purple"},
        {info:"System Update", active: "Database backupcompleted", time: "1 hour ago", icon: <FiSettings />, color: "orange"},
        {info:"Low Stock Alert", active: "iphone 15 promax stock is low", time: "2 hours ago", icon: <FiBell />, color: "red"},
    ]

    const {theme} = useTheme();

    return(
        <section className='w-full'>
            <div className={`${theme === "dark" ? "bg-slate-950 text-white" : "bg-white text-black"} p-5 rounded-md w-full`}>
                <div>
                    <div className='flex justify-between'>
                        <div>
                            <p className='font-semibold text-lg'>Activity Feed</p>
                            <p className='text-gray-700 pb-5'>Recent System Activity</p>
                        </div>
                        <p className='text-blue-700 text-xs cursor-pointer'>View All</p>
                    </div>
                    <div className='py-5 px-3 pr-16'>
                        {items.map((item, index) => (
                            <div key={index} className='flex gap-4 items-start py-3'>
                                <div className='p-2 rounded text-white' style={{background: `${item.color}`}}>
                                    {item.icon}
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='font-semibold text-sm'>{item.info}</p>
                                    <p className='text-gray-600'>{item.active}</p>
                                    <p className='text-gray-600 flex items-center gap-1'><FaRegClock /><span>{item.time}</span></p>
                                </div>
                            </div>
                            
                        ))}
                        <p className='text-blue-700 text-xs cursor-pointer text-center pt-5 pl-10'>Load More Activities</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Activity