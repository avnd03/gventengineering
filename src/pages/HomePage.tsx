import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ArrowRight, ChevronRight, Award, ShieldCheck, Settings, Wrench, MapPin } from 'lucide-react';
import { services, projects, whyChooseUs, IMAGES, companyInfo } from '../data/siteData';
import ServiceIcon from '../components/ServiceIcon';
import StatsCounter from '../components/StatsCounter';
import ClientLogos from '../components/ClientLogos';
import ContactForm from '../components/ContactForm';
import SectionTitle from '../components/SectionTitle';
import { useState } from 'react';

const whyIcons: Record<string, React.ReactNode> = {
  Award: <Award className="w-7 h-7" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7" />,
  Settings: <Settings className="w-7 h-7" />,
  Wrench: <Wrench className="w-7 h-7" />,
};

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -right-20 w-96 h-96 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-3 h-3 bg-accent/40 rounded-full"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-accent/30 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-40 md:py-44">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2.5 mb-10"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-gray-200 font-medium">Leading M&E Engineering Solutions in Singapore</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[Poppins] text-white leading-[1.1] mb-8"
          >
            Engineering Solutions That{' '}
            <span className="text-accent">Drive Innovation</span> and Build the Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed"
          >
            Trusted ACMV, Fire Protection, Plumbing and Structural Engineering Services for Commercial and Industrial Projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-accent/25 active:scale-95 text-lg"
            >
              Our Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 transition-all text-lg"
            >
              Contact Us
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-3 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-28 md:py-36 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionTitle
          subtitle="What We Do"
          title="Our Core Services"
          description="We provide comprehensive engineering solutions across multiple disciplines, delivering excellence in every project."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.slice(0, 4).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group block h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white shadow-lg">
                    <ServiceIcon name={service.icon} className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold font-[Poppins] text-primary dark:text-white mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-secondary dark:text-gray-400 leading-[1.8] mb-5">
                    {service.shortDesc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <section className="py-28 md:py-36 bg-bg-light dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <SectionTitle
              subtitle="Why Choose Us"
              title="Gvent Always Gets The Job Done"
              description="With over 12 years of engineering excellence, we deliver reliable solutions that exceed expectations across commercial and industrial sectors."
              center={false}
            />
            <div className="space-y-8">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-6 group"
                >
                  <div className="w-16 h-16 shrink-0 bg-accent/10 group-hover:bg-accent rounded-2xl flex items-center justify-center text-accent group-hover:text-white transition-all duration-300">
                    {whyIcons[item.icon]}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold font-[Poppins] text-primary dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-secondary dark:text-gray-400 leading-[1.8]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={IMAGES.about1}
                alt="Engineering excellence"
                className="w-full h-[520px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-accent text-white rounded-2xl p-7 shadow-xl">
              <div className="text-4xl font-bold font-[Poppins]">12+</div>
              <div className="text-sm font-medium opacity-90 mt-1">Years of Excellence</div>
            </div>
            <div className="absolute -top-5 -right-5 w-28 h-28 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'ACMV System', 'Plumbing & Sanitary', 'Structural & Piping'];

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-28 md:py-36 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionTitle
          subtitle="Our Projects"
          title="Featured Projects"
          description="Explore our portfolio of successful engineering projects across Singapore."
        />

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-secondary dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.slice(0, 6).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              layout
            >
              <Link
                to={`/projects/${project.id}`}
                className="group block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-1.5 bg-accent/90 text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold font-[Poppins] text-primary dark:text-white mb-3 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-secondary dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary dark:bg-accent hover:bg-primary-dark dark:hover:bg-accent-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg text-base"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ContactPreview() {
  return (
    <section className="py-28 md:py-36 bg-bg-light dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionTitle
          subtitle="Get In Touch"
          title="Let's Discuss Your Project"
          description="Reach out to us for a free consultation. Our engineering experts are ready to help bring your vision to life."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-bold font-[Poppins] text-primary dark:text-white mb-8">Send Us a Message</h3>
            <ContactForm compact pageName="Home Page" />
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold font-[Poppins] text-primary dark:text-white mb-8">Company Information</h3>
              <div className="space-y-7">
                <div>
                  <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Registered Address</h4>
                  <p className="text-secondary dark:text-gray-400 leading-relaxed">{companyInfo.registeredAddress}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Factory 1</h4>
                  <p className="text-secondary dark:text-gray-400 leading-relaxed">{companyInfo.factory1}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Factory 2</h4>
                  <p className="text-secondary dark:text-gray-400 leading-relaxed">{companyInfo.factory2}</p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-2">
                  <div>
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Phone</h4>
                    <a href={`tel:${companyInfo.phone}`} className="text-secondary dark:text-gray-400 hover:text-accent transition-colors">
                      {companyInfo.phone}
                    </a>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Email</h4>
                    <a href={`mailto:${companyInfo.email}`} className="text-secondary dark:text-gray-400 hover:text-accent transition-colors">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
              <iframe
                src={companyInfo.mapEmbedUrl}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GVENT Engineering Location"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ClientLogos />
      <WhyChooseUsSection />
      <StatsCounter />
      <ProjectsSection />
      <ContactPreview />
    </>
  );
}
