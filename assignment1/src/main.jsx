/**
 * File: src/main.jsx
 * Purpose: App entry point with Hash Router for deployment in subfolders
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

// App shell and styles
import App from './App.jsx'
import './styles/index.css'

// Pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

// Define routes (HashRouter avoids needing .htaccess rewrites)
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
      { path: 'services', element: <Services /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

// Render the app
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
