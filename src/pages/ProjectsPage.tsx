import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, ArrowRight, Filter } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import { projects, IMAGES } from '../data/siteData';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  const categories = ['All', 'ACMV System', 'Plumbing & Sanitary', 'Structural & Piping'];

  const filtered = projects
    .filter((p) => filter === 'All' || p.category === filter)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase()));

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Explore our portfolio of successful engineering projects"
        bgImage={IMAGES.heroProjects}
        breadcrumb={['Home', 'Projects']}
      />

      <section className="py-28 md:py-36 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionTitle
            subtitle="Portfolio"
            title="Projects We've Delivered"
            description="Browse through our completed projects across various engineering disciplines."
          />

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-5 mb-14">
            <div className="relative flex-1">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                placeholder="Search projects..."
                className="w-full pl-14 pr-6 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-base"
              />
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-gray-400 hidden md:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setFilter(cat); setCurrentPage(1); }}
                  className={`px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                    filter === cat
                      ? 'bg-accent text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-800 text-secondary dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {paginated.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-xl text-secondary dark:text-gray-400">No projects found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {paginated.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  layout
                >
                  <Link
                    to={`/projects/${project.id}`}
                    className="group block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-5 left-5">
                        <span className="px-4 py-2 bg-accent/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary shadow-lg">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="text-xl font-bold font-[Poppins] text-primary dark:text-white mb-3 group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5 text-sm text-secondary dark:text-gray-400">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </div>
                        <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">{project.completionDate}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-16">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => { setCurrentPage(page); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
                  className={`w-12 h-12 rounded-xl text-sm font-medium transition-all ${
                    currentPage === page
                      ? 'bg-accent text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-800 text-secondary hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
