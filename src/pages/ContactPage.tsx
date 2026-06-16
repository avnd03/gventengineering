import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import { IMAGES, companyInfo } from '../data/siteData';

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Let's Build Something Extraordinary Together"
        bgImage={IMAGES.heroContact}
        breadcrumb={['Home', 'Contact']}
      />

      <section className="py-28 md:py-36 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-bg-light dark:bg-gray-800 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-[Poppins] text-primary dark:text-white mb-3">
                Send Us a Message
              </h2>
              <p className="text-secondary dark:text-gray-400 mb-10 leading-relaxed text-base">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-7"
            >
              {/* Quick Contact Cards */}
              {[
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: 'Phone',
                  info: companyInfo.phone,
                  link: `tel:${companyInfo.phone}`,
                  color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600',
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: 'Email',
                  info: companyInfo.email,
                  link: `mailto:${companyInfo.email}`,
                  color: 'bg-green-50 dark:bg-green-900/20 text-green-600',
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: 'Working Hours',
                  info: 'Mon - Fri: 8:00 AM - 6:00 PM',
                  color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-bg-light dark:bg-gray-800 rounded-2xl p-7 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-primary dark:text-white font-medium hover:text-accent transition-colors text-base">
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-primary dark:text-white font-medium text-base">{item.info}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Addresses */}
              <div className="bg-primary dark:bg-gray-800 rounded-2xl p-7 md:p-8 text-white">
                <h4 className="text-lg font-bold font-[Poppins] mb-7 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  Our Locations
                </h4>
                <div className="space-y-7">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2">Registered Office</span>
                    <p className="text-gray-300 text-sm leading-relaxed">{companyInfo.registeredAddress}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2">Factory 1</span>
                    <p className="text-gray-300 text-sm leading-relaxed">{companyInfo.factory1}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2">Factory 2</span>
                    <p className="text-gray-300 text-sm leading-relaxed">{companyInfo.factory2}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-bg-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <iframe
              src={companyInfo.mapEmbedUrl}
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GVENT Engineering Location"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
