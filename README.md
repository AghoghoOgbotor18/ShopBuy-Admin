# ShopBuy Admin Dashboard 🛒

The **ShopBuy Admin Dashboard** is a responsive and performance-optimized admin interface built with **React + Vite**. It features dashboards, analytics, e-commerce management, inventory pages, and a modern UI built with TailwindCSS.
This project also helped me understand **React.lazy**, **ContextAPI**, and real-world app structure while solving performance and state management challenges.

---

## Live Demo
check out my dashboard: https://shop-buy-admin.vercel.app

---

## 🚀 Tech Stack

- React  
- Vite  
- React Router  
- React.lazy + Suspense  
- ContextAPI (ThemeContext)  
- TailwindCSS  
- Framer-Motion  

---

## 📌 Features

- Lazy-loaded dashboard pages  
- Global theme switching using ContextAPI  
- Responsive layout with sidebar navigation  
- Reusable UI components  
- Clean routing structure  
- Smooth animations  

---


## What I Learned(Challenges and Solution)

### **1. Code Splitting with React.lazy**
The initial load was slow because all pages were bundled together.  
I solved this by implementing `React.lazy`:

```jsx
const Dashboard = React.lazy(() => import("./Pages/Dashboard"));
const Analytics = React.lazy(() => import("./Pages/Analytics"));
const Inventory = React.lazy(() => import("./Pages/Inventory"));

```
### **2. Code Splitting with React.lazy**
Understanding ContextAPI Through ThemeContext and OpenContext
I fully learned how ContextAPI works by building a global ThemeContext and an OpenCOntext for sidebar open and close:

```jsx
const ThemeContext = createContext();
const OpenContext = createContext();
```
wrapping my app with:

```jsx
<ThemeProvider>
  <OpenProvider>
    <App />
  </OpenProvider>
</ThemeProvider>
```
helped me manage dark/light mode without prop drilling and understand global state management better.

--- 


### Why this project matters

This dashboard helped me:
-Master code-splitting with React.lazy
-Understand ContextAPI and global state deeply
-Debug real-world deployment problems
-Build a scalable folder structure
-Improve routing, component reusability, and UI architecture

It represents one of the biggest jumps in my frontend development growth.

---

### Project Structure
```jsx
ShopBuy-Admin/
│── src/
│   ├── Components/
│   ├── Context/
│   │   └── ThemeContext.jsx
│   │   └── OpenContext.jsx

│   ├── Pages/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

---

### Installation
```jsx
git clone https://github.com/AghoghoOgbotor18/ShopBuy-admin.git
cd ShopBuy-Admin
npm install
npm run dev
```
