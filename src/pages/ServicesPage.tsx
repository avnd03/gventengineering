import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ServiceIcon from '../components/ServiceIcon';
import { services, IMAGES } from '../data/siteData';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive engineering solutions for commercial and industrial projects"
        bgImage={IMAGES.heroServices}
        breadcrumb={['Home', 'Services']}
      />

      {/* Intro */}
      <section className="py-28 md:py-36 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionTitle
            subtitle="Engineering Excellence"
            title="Integrated M&E Solutions"
            description="From design and installation to testing, commissioning, and maintenance — we provide end-to-end engineering services that drive performance and reliability."
          />

          <div className="space-y-32 mt-20">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <ServiceIcon name={service.icon} className="w-7 h-7" />
                    </div>
                  </div>
                </div>

                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
                    Service {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold font-[Poppins] text-primary dark:text-white mb-5">
                    {service.title}
                  </h3>
                  <p className="text-secondary dark:text-gray-400 leading-[1.8] mb-8 text-base">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-center gap-3 py-1">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-3 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Poppins] text-white mb-6">
              Need Engineering Solutions?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact us today for a free consultation. Our team of experts is ready to help you with your next project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-accent/25 text-lg"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
