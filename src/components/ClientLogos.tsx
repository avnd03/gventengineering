import { motion } from 'framer-motion';
import { clients } from '../data/siteData';
import SectionTitle from './SectionTitle';

const colors = ['#E53E3E', '#3182CE', '#38A169', '#D69E2E', '#805AD5', '#DD6B20', '#319795'];

function ClientLogo({ name, logo, index }: { name: string; logo: string; index: number }) {
  return (
    <div className="flex-shrink-0 w-52 h-28 mx-8 bg-white rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center px-6 hover:shadow-md hover:border-accent/30 transition-all duration-300 group cursor-pointer">
      <div className="flex flex-col items-center gap-2">
        <img src={logo} />
      </div>
    </div>
  );
}

interface ClientLogosProps {
  showTitle?: boolean;
  light?: boolean;
}

export default function ClientLogos({ showTitle = true, light }: ClientLogosProps) {
  const doubled = [...clients, ...clients];

  return (
    <section className={`py-24 md:py-32 overflow-hidden ${light ? 'bg-primary dark:bg-gray-950' : 'bg-white dark:bg-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {showTitle && (
          <SectionTitle
            subtitle="Our Clients"
            title="Trusted by Industry Leaders"
            description="We are proud to work with some of the most respected companies in the region."
            light={light}
          />
        )}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative mt-4"
      >
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll-left py-4">
          {doubled.map((client, i) => (
            <ClientLogo key={`${client.id}-${i}`} name={client.name} logo={client.logo} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
