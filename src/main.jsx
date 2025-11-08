import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './Components/Context/ThemeContext.jsx'
import { OpenProvider } from './Components/Context/OpenContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <OpenProvider>
        <App />
      </OpenProvider>
    </ThemeProvider>
  </StrictMode>,
)
