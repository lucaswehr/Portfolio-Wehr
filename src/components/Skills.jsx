import { portfolioData } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-16">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {portfolioData.skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
