import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ClientLogos from '../components/ClientLogos';
import { IMAGES, clients, testimonials } from '../data/siteData';

const colors = ['#E53E3E', '#3182CE', '#38A169', '#D69E2E', '#805AD5', '#DD6B20', '#319795'];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        title="Our Clients"
        subtitle="Trusted by leading companies across Singapore and beyond"
        bgImage={IMAGES.heroClients}
        breadcrumb={['Home', 'Clients']}
      />

      {/* Logo Wall */}
      <section className="py-28 md:py-36 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionTitle
            subtitle="Our Partners"
            title="Companies That Trust Us"
            description="We are proud to work with industry-leading organizations across various sectors."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8">
            {clients.map((client, i) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-bg-light dark:bg-gray-800 rounded-2xl p-6 md:p-7 flex flex-col items-center justify-center hover:shadow-lg hover:border-accent/30 border border-transparent transition-all duration-300 group cursor-pointer aspect-square"
              >
                <img src={client.logo} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 md:py-36 bg-bg-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Hear from the companies that have experienced our engineering excellence firsthand."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-9 md:p-10 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow relative"
              >
                <div className="absolute top-8 right-8 text-accent/15">
                  <Quote className="w-14 h-14" />
                </div>
                <div className="flex gap-1.5 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-secondary dark:text-gray-400 leading-[1.8] mb-8 italic text-base">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary dark:text-white text-base">{testimonial.name}</h4>
                    <p className="text-sm text-secondary dark:text-gray-400 mt-0.5">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-28 md:py-36 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionTitle
            subtitle="Case Studies"
            title="Success Stories"
            description="Discover how our engineering solutions have made a difference for our clients."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {[
              {
                title: 'Jewel Changi Airport — ACMV Excellence',
                desc: 'Delivered a world-class ACMV system for the iconic mixed-use development, featuring advanced climate control for the indoor rainforest and retail spaces with over 30% energy savings.',
                image: IMAGES.project1,
                stats: [
                  { label: 'Energy Savings', value: '30%' },
                  { label: 'Completion', value: 'On Time' },
                ],
              },
              {
                title: 'Yishun Community Hospital — Healthcare HVAC',
                desc: 'Engineered healthcare-grade ACMV systems providing precise temperature and humidity control for patient wards, operating theatres, and pharmaceutical areas across 428 beds.',
                image: IMAGES.project5,
                stats: [
                  { label: 'Beds Served', value: '428' },
                  { label: 'Compliance', value: '100%' },
                ],
              },
            ].map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-bg-light dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
                <div className="p-9 md:p-10">
                  <h3 className="text-xl font-bold font-[Poppins] text-primary dark:text-white mb-4">{cs.title}</h3>
                  <p className="text-secondary dark:text-gray-400 leading-[1.8] mb-8">{cs.desc}</p>
                  <div className="flex gap-10">
                    {cs.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-3xl font-bold text-accent">{stat.value}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClientLogos showTitle={false} />
    </>
  );
}
