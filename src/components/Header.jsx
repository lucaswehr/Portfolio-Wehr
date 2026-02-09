import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 w-full bg-black/100 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-lg font-semibold text-gray-100">Lucas Wehr</Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li><a href="#home" className="text-gray-100 hover:text-gray-400 transition">Home</a></li>
            <li><a href="#about" className="text-gray-100 hover:text-gray-400 transition">About</a></li>
            <li><a href="#projects" className="text-gray-100 hover:text-gray-400 transition">Projects</a></li>
            <li><a href="#contact" className="text-gray-100 hover:text-gray-400 transition">Contact</a></li>
            <li><Link to="/resume" className="text-gray-100 hover:text-gray-400 transition">Resume</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-100 focus:outline-none hover:text-gray-400 transition cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-2 text-sm font-medium">
            <li><a href="#home" onClick={() => setIsOpen(false)} className="block py-2 text-gray-100 hover:text-gray-400 transition">Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-100 hover:text-gray-400 transition">About</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="block py-2 text-gray-100 hover:text-gray-400 transition">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-gray-100 hover:text-gray-400 transition">Contact</a></li>
            <li><Link to="/resume" onClick={() => setIsOpen(false)} className="block py-2 text-gray-100 hover:text-gray-400 transition">Resume</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
}
