import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-lg font-semibold text-gray-900">Lucas Wehr</Link>
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><a href="#home" className="text-gray-600 hover:text-gray-900 transition">Home</a></li>
          <li><a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a></li>
          <li><a href="#projects" className="text-gray-600 hover:text-gray-900 transition">Projects</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a></li>
          <li><Link to="/resume" className="text-gray-600 hover:text-gray-900 transition">Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
}
