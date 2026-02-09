import { portfolioData } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-16">Projects</h2>
        
        <div className="space-y-12">
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="pb-12 border-b border-gray-200 last:border-0">
              <div className="flex gap-8 mb-6">
                <div className="hidden sm:flex items-center justify-center flex-shrink-0">
                  {project.isImage ? (
                    <div 
                      className="sprite-animation"
                      style={{marginTop:"-100px", marginRight:"-90px", backgroundImage: `url(${project.image})` }}
                    />
                  ) : (
                    <div className="text-5xl text-gray-300">{project.image}</div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs bg-gray-200 text-gray-700 px-2.5 py-1 font-medium hover:scale-110 transition hover:bg-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 flex-wrap">
                    <a href={project.link} className="text-gray-900 hover:text-gray-600 transition font-medium underline underline-offset-2 hover:no-underline">
                      View Project
                    </a>
                    <a href={project.github} className="text-gray-900 hover:text-gray-600 transition font-medium underline underline-offset-2 hover:no-underline">
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
