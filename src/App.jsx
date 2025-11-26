import React, { Suspense } from 'react';
import Sidebar from './Components/Layout/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chatroom from "./Pages/Chatroom";
import { useTheme } from './Components/Context/ThemeContext';
import { useOpen } from './Components/Context/OpenContext';

// Lazy-loaded pages
const Dashboard = React.lazy(() => import("./Pages/Dashboard"));
const Analytics = React.lazy(() => import("./Pages/Analytics"));
const ECommerce = React.lazy(() => import("./Pages/E-commerce"));
const Inventory = React.lazy(() => import("./Pages/Inventory"));
const Messages = React.lazy(() => import("./Pages/Messages"));
const Reports = React.lazy(() => import("./Pages/Reports"));
const Settings = React.lazy(() => import("./Pages/Settings"));
const Transactions = React.lazy(() => import("./Pages/Transactions"));
const Users = React.lazy(() => import("./Pages/Users"));

function App() {
  const {theme} = useTheme();
  const {isOpen} = useOpen();

  return (
    <BrowserRouter>
      <div className={`flex min-h-screen relative ${theme === "dark" ? "bg-slate-800" : "bg-zinc-200"}`}>
        <Sidebar />

        <main className={`flex-1 transition-all duration-300 w-full ${isOpen ? "ml-30 md:ml-65" : "ml-15 md:ml-15"}`}>
          {/* Wrap Routes in Suspense */}
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/users" element={<Users />} />
              <Route path="/ecommerce" element={<ECommerce />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/messages/:id" element={<Chatroom />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;
