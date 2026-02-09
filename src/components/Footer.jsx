import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center flex-wrap gap-6">
          <p className="text-gray-600 text-sm">© {currentYear} {portfolioData.name}</p>
          <div className="flex gap-6">
            {portfolioData.socialLinks.map((link) => (
              <a key={link.platform} href={link.url} className="text-xl transition opacity-70 hover:opacity-100 ">
                {link.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
