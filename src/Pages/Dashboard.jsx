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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section
      className={`min-h-screen transition-all duration-300 
        ${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-zinc-200 text-black'}
        pt-[110px] md:pt-[120px] xl:pt-[70px] pb-10 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12`}
    >
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
    </section>
  );
};

export default Dashboard;
