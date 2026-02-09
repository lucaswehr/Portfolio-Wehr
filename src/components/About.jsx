import { portfolioData } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-16">About</h2>
        
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-12">
            <p className="text-lg text-gray-700 leading-relaxed">{portfolioData.about}</p>
            
            {portfolioData.experience.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-8">Experience</h3>
                <div className="space-y-10">
                  {portfolioData.experience.map((job) => (
                    <div key={job.id}>
                      <p className="font-semibold text-gray-900">{job.position}</p>
                      <p className="text-gray-600 text-sm mt-1">{job.company} • {job.duration}</p>
                      <p className="text-gray-700 mt-3">{job.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {portfolioData.education.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-8">Education</h3>
                <div className="space-y-6">
                  {portfolioData.education.map((edu) => (
                    <div key={edu.id}>
                      <p className="font-semibold text-gray-900">{edu.degree}</p>
                      <p className="text-gray-600 text-sm mt-1">{edu.school} • {edu.year}</p>
                      <p className='text-gray-600 text-sm mt-1'>{edu.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Email</p>
              <a href={`mailto:${portfolioData.email}`} className="text-gray-900 hover:text-gray-600 transition break-all">
                {portfolioData.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Phone</p>
              <a href={`tel:${portfolioData.phone}`} className="text-gray-900 hover:text-gray-600 transition">
                {portfolioData.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Location</p>
              <p className="text-gray-900">{portfolioData.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
