import { portfolioData } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-32 pb-24 flex items-center">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {portfolioData.name}
        </h1>
        <p className="text-2xl text-gray-700 font-medium mb-6">{portfolioData.title}</p>
        <p className="text-lg text-gray-600 max-w-2xl mb-12 leading-relaxed">{portfolioData.bio}</p>
        
        <div className="flex gap-4 flex-wrap">
          <a href="#projects" className="px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 bg-white border border-gray-900 text-gray-900 font-medium hover:bg-gray-50 transition">
            Get In Touch
          </a>
        </div>

        <div className="mt-12 flex gap-6">
          {portfolioData.socialLinks.map((link) => (
            <a key={link.platform} href={link.url} className="text-2xl text-black-1000 hover:text-black-1000 transition opacity-80 hover:opacity-100 underline font-medium">
               {link.platform}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
