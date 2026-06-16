import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import ServiceIcon from '../components/ServiceIcon';
import { services } from '../data/siteData';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center px-6">
          <h1 className="text-4xl font-bold font-[Poppins] text-primary dark:text-white mb-6">Service Not Found</h1>
          <Link to="/services" className="text-accent hover:underline text-lg">Back to Services</Link>
        </div>
      </div>
    );
  }

  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.shortDesc}
        bgImage={service.image}
        breadcrumb={['Home', 'Services', service.title]}
      />

      <section className="py-28 md:py-36 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-dark mb-10 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Services
                </Link>

                {/* Hero Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl mb-12">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <ServiceIcon name={service.icon} className="w-9 h-9" />
                  </div>
                </div>

                {/* Description */}
                <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] text-primary dark:text-white mb-6">
                  About {service.title}
                </h2>
                <p className="text-secondary dark:text-gray-400 leading-[1.8] text-lg mb-8">
                  {service.description}
                </p>
                {service.details.map((detail, i) => (
                  <p key={i} className="text-secondary dark:text-gray-400 leading-[1.8] mb-6">
                    {detail}
                  </p>
                ))}

                {/* Features */}
                <div className="mt-16">
                  <h3 className="text-2xl md:text-3xl font-bold font-[Poppins] text-primary dark:text-white mb-8">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-4 p-5 bg-bg-light dark:bg-gray-800 rounded-xl"
                      >
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mt-16">
                  <h3 className="text-2xl md:text-3xl font-bold font-[Poppins] text-primary dark:text-white mb-8">
                    Benefits
                  </h3>
                  <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-10 md:p-12 text-white">
                    <ul className="space-y-5">
                      {service.benefits.map((benefit, i) => (
                        <motion.li
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <span className="text-gray-100 leading-relaxed">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-16 bg-accent/5 dark:bg-accent/10 border border-accent/20 rounded-2xl p-10 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold font-[Poppins] text-primary dark:text-white mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-secondary dark:text-gray-400 mb-8 leading-relaxed text-base">
                    Contact us today for a free consultation on your {service.title.toLowerCase()} requirements.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Contact Form */}
                <div className="mt-16">
                  <h3 className="text-2xl md:text-3xl font-bold font-[Poppins] text-primary dark:text-white mb-8">
                    Enquire About This Service
                  </h3>
                  <ContactForm pageName="Service Detail" serviceName={service.title} />
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                {/* Other Services */}
                <div className="bg-bg-light dark:bg-gray-800 rounded-2xl p-7 md:p-8">
                  <h4 className="text-lg font-bold font-[Poppins] text-primary dark:text-white mb-6">
                    Other Services
                  </h4>
                  <div className="space-y-3">
                    {otherServices.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-colors group"
                      >
                        <div className="w-11 h-11 bg-accent/10 group-hover:bg-accent rounded-xl flex items-center justify-center text-accent group-hover:text-white transition-all shrink-0">
                          <ServiceIcon name={s.icon} className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-accent transition-colors">
                          {s.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-primary dark:bg-gray-800 rounded-2xl p-7 md:p-8 text-white">
                  <h4 className="text-lg font-bold font-[Poppins] mb-5">Need Help?</h4>
                  <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                    Our engineering experts are ready to assist you with your project requirements.
                  </p>
                  <div className="space-y-5 text-sm">
                    <div>
                      <span className="text-gray-400 block mb-1">Phone:</span>
                      <a href="tel:+6561234567" className="text-accent hover:text-accent-light transition-colors text-base font-medium">
                        +65 6123 4567
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-400 block mb-1">Email:</span>
                      <a href="mailto:info@gvent.com.sg" className="text-accent hover:text-accent-light transition-colors text-base font-medium">
                        info@gvent.com.sg
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
