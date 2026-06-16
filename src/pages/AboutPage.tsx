import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import StatsCounter from '../components/StatsCounter';
import ClientLogos from '../components/ClientLogos';
import { IMAGES } from '../data/siteData';

function ProgressBar({ label, value }: { label: string; value: number }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div ref={ref} className="mb-8">
      <div className="flex justify-between mb-3">
        <span className="text-sm font-semibold text-primary dark:text-white">{label}</span>
        <span className="text-sm font-bold text-accent">{value}%</span>
      </div>
      <div className="h-3.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
        />
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Discover who we are and what drives our engineering excellence"
        bgImage={IMAGES.heroAbout}
        breadcrumb={['Home', 'About Us']}
      />

      {/* Company Introduction */}
      <section className="py-28 md:py-36 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                subtitle="Who We Are"
                title="Engineering Excellence Since 2012"
                center={false}
              />
              <div className="space-y-5 text-secondary dark:text-gray-400 leading-[1.8]">
                <p>
                  GVENT Engineering is a leading integrated M&E (Mechanical & Electrical) solutions provider based in Singapore. 
                  With over 12 years of experience, we deliver comprehensive engineering services from design and installation 
                  to testing, commissioning, and ongoing maintenance.
                </p>
                <p>
                  Our expertise spans across commercial and industrial sectors, providing end-to-end engineering solutions 
                  that meet the highest standards of quality, safety, and sustainability. We are committed to innovation 
                  and excellence in every project we undertake.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-10">
                {['12+ Years Experience', 'Commercial Projects', 'Industrial Projects', 'End-to-End Solutions'].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 py-2"
                  >
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm font-medium text-primary dark:text-white">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

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
                  alt="GVENT Engineering team"
                  className="w-full h-[520px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-7 -right-7 w-36 h-36 bg-accent/10 rounded-2xl -z-10" />
              <div className="absolute -top-7 -left-7 w-28 h-28 bg-primary/10 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-28 md:py-36 bg-bg-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-10 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8">
                <Target className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold font-[Poppins] text-primary dark:text-white mb-5">Our Mission</h3>
              <p className="text-secondary dark:text-gray-400 leading-[1.8]">
                Provide innovative engineering solutions while maintaining the highest standards of quality and safety. 
                We strive to exceed client expectations through continuous improvement, technical excellence, and 
                unwavering commitment to project delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-10 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary dark:text-accent mb-8">
                <Eye className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold font-[Poppins] text-primary dark:text-white mb-5">Our Vision</h3>
              <p className="text-secondary dark:text-gray-400 leading-[1.8]">
                Become a leading integrated engineering solutions provider in Singapore and beyond. We envision a future 
                where our engineering innovations contribute to building smarter, safer, and more sustainable 
                infrastructure for communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Progress Indicators */}
      <section className="py-28 md:py-36 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <SectionTitle
                subtitle="Our Performance"
                title="Delivering Results That Matter"
                center={false}
              />
              <div className="mt-10">
                <ProgressBar label="Construction" value={98} />
                <ProgressBar label="Production" value={92} />
                <ProgressBar label="Project Delivery" value={95} />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={IMAGES.about2}
                alt="Engineering projects"
                className="w-full h-[440px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <StatsCounter />
      <ClientLogos />
    </>
  );
}
