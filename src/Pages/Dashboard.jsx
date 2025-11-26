import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../Components/Context/ThemeContext';
import Chart from '../Components/Layout/Chart';
import Orders from '../Components/Layout/Orders';
import Reviews from '../Components/Layout/Reviews';
import Overview from '../Components/Layout/Overview';
import { useOpen } from '../Components/Context/OpenContext';

const Dashboard = () => {
  const { theme } = useTheme();
  const {isOpen} = useOpen();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section
      className={`p-10 overflow-hidden w-screen lg:w-full pr-22 lg:pr-0 lg:-ml-5 
        ${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-zinc-200 text-black'}
        `}
    >
      <div className=''>
        {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-6 sm:mb-8"
      >
        <Overview />
      </motion.div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-6 sm:mb-8"
      >
        <Chart />
      </motion.div>

      {/* Orders */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-6 sm:mb-8"
      >
        <Orders />
      </motion.div>

      {/* Reviews */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Reviews />
      </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
