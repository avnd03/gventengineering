import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users, Wrench, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import { projects } from '../data/siteData';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center px-6">
          <h1 className="text-4xl font-bold font-[Poppins] text-primary dark:text-white mb-6">Project Not Found</h1>
          <Link to="/projects" className="text-accent hover:underline text-lg">Back to Projects</Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3);

  return (
    <>
      <PageHero
        title={project.name}
        subtitle={project.category}
        bgImage={project.image}
        breadcrumb={['Home', 'Projects', project.name]}
      />

      <section className="py-28 md:py-36 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-dark mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl mb-12">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-[520px] object-cover"
                  />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] text-primary dark:text-white mb-6">
                  {project.name}
                </h2>
                <p className="text-secondary dark:text-gray-400 leading-[1.8] text-lg mb-10">
                  {project.description}
                </p>

                <div className="bg-bg-light dark:bg-gray-800 rounded-2xl p-8 md:p-10 mb-10">
                  <h3 className="text-xl font-bold font-[Poppins] text-primary dark:text-white mb-5">Project Scope</h3>
                  <p className="text-secondary dark:text-gray-400 leading-[1.8]">{project.scope}</p>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold font-[Poppins] text-primary dark:text-white mb-6">Technologies Used</h3>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-5 py-2.5 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-bg-light dark:bg-gray-800 rounded-2xl p-7 md:p-8">
                  <h4 className="text-lg font-bold font-[Poppins] text-primary dark:text-white mb-8">
                    Project Details
                  </h4>
                  <div className="space-y-7">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">Location</span>
                        <p className="text-primary dark:text-white font-medium">{project.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Users className="w-5 h-5 text-accent mt-1 shrink-0" />
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">Client</span>
                        <p className="text-primary dark:text-white font-medium">{project.client}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Wrench className="w-5 h-5 text-accent mt-1 shrink-0" />
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">Category</span>
                        <p className="text-primary dark:text-white font-medium">{project.category}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Calendar className="w-5 h-5 text-accent mt-1 shrink-0" />
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">Completion</span>
                        <p className="text-primary dark:text-white font-medium">{project.completionDate}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary dark:bg-gray-800 rounded-2xl p-7 md:p-8 text-white">
                  <h4 className="text-lg font-bold font-[Poppins] mb-4">Interested in a similar project?</h4>
                  <p className="text-gray-300 text-sm mb-8 leading-relaxed">Let us help you build your next project with our engineering expertise.</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 px-7 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all w-full justify-center"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="mt-28">
              <h3 className="text-2xl md:text-3xl font-bold font-[Poppins] text-primary dark:text-white mb-10">Related Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {relatedProjects.map((rp, i) => (
                  <motion.div
                    key={rp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={`/projects/${rp.id}`}
                      className="group block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all"
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img src={rp.image} alt={rp.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                      </div>
                      <div className="p-7">
                        <h4 className="font-bold font-[Poppins] text-primary dark:text-white group-hover:text-accent transition-colors mb-2">{rp.name}</h4>
                        <p className="text-sm text-secondary dark:text-gray-400">{rp.location}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
