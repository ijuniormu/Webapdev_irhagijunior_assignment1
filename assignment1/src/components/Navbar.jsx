/**
 * File: src/components/Navbar.jsx
 */
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  // Use BASE_URL so the logo path is correct in a subfolder
  const logoSrc = `${import.meta.env.BASE_URL}assets/logo.svg`

  return (
    <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoSrc} alt="Logo" className="h-10 w-10" />
          <span className="font-display text-xl font-semibold tracking-tight">
            Junior Muderhwa
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <NavLink to="/" end className={({ isActive }) => `hover:underline ${isActive ? 'font-semibold' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `hover:underline ${isActive ? 'font-semibold' : ''}`}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `hover:underline ${isActive ? 'font-semibold' : ''}`}>Projects</NavLink>
          <NavLink to="/services" className={({ isActive }) => `hover:underline ${isActive ? 'font-semibold' : ''}`}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `hover:underline ${isActive ? 'font-semibold' : ''}`}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
