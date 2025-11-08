import Sidebar from './Components/Layout/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Analytics from './Pages/Analytics';
import ECommerce from './Pages/E-commerce';
import Inventory from "./Pages/Inventory";
import Messages from "./Pages/Messages";
import Reports from "./Pages/Reports";
import Settings from "./Pages/Settings";
import Transactions from "./Pages/Transactions";
import Users from "./Pages/Users";
import Chatroom from "./Pages/Chatroom";
import { useTheme } from './Components/Context/ThemeContext';
import { useOpen } from './Components/Context/OpenContext';

function App() {
  const {theme, toggleTheme} = useTheme();
  const {isOpen, toggleOpen} = useOpen();
  return (
    <BrowserRouter>
      <div className={`flex min-h-screen relative ${theme === "dark" ? "bg-slate-800" : "bg-zinc-200"}`}>
        {/* Sidebar stays fixed and visible */}
        <Sidebar />

        {/* Main content area */}
        <main className={`flex-1 transition-all duration-300 ${isOpen ? "ml:30 md:ml-65" : "ml-15 md:ml-25"}`}>
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
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
