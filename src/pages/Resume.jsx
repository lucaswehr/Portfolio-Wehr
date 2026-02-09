import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Resume() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-gray-50 text-gray-900">
      <header className="sticky top-0 w-full bg-black/100 backdrop-blur-sm z-50 border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-lg font-semibold text-gray-100">Lucas Wehr</Link>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-sm font-medium">
              <li><Link to="/" className="text-gray-100 hover:text-gray-400 transition">Home</Link></li>
              <li><Link to="/resume" className="text-gray-100 hover:text-gray-400 transition">Resume</Link></li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-100 focus:outline-none hover:text-gray-400 cursor-pointer transition"
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
              <li><Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-100 hover:text-gray-400 transition">Home</Link></li>
              <li><Link to="/resume" onClick={() => setIsOpen(false)} className="block py-2 text-gray-100 hover:text-gray-400 transition">Resume</Link></li>
            </ul>
          )}
        </nav>
      </header>

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Resume</h1>
            <a href="/Portfolio-Wehr/resume.pdf" download className="px-4 py-2 bg-gray-900 text-white font-medium hover:bg-gray-800 transition">
              Download PDF
            </a>
          </div>
          
          {/* PDF Display */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <embed 
              src="/Portfolio-Wehr/resume.pdf" 
              type="application/pdf"
              className="w-full"
              style={{ height: '800px' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
