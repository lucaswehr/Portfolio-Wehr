import { Link } from 'react-router-dom'

export default function Resume() {
  return (
    <div className="bg-white text-gray-900">
      <header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-lg font-semibold text-gray-900">Lucas Wehr</Link>
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li><Link to="/" className="text-gray-600 hover:text-gray-900 transition">Home</Link></li>
            <li><Link to="/resume" className="text-gray-600 hover:text-gray-900 transition">Resume</Link></li>
          </ul>
        </nav>
      </header>

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Resume</h1>
            <a href="/resume.pdf" download className="px-4 py-2 bg-gray-900 text-white font-medium hover:bg-gray-800 transition">
              Download PDF
            </a>
          </div>
          
          {/* PDF Display */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <embed 
              src="/resume.pdf" 
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
