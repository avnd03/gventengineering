import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage: string;
  breadcrumb?: string[];
}

export default function PageHero({ title, subtitle, bgImage, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative h-[55vh] min-h-[440px] md:min-h-[480px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80" />
      <div className="relative z-10 text-center text-white px-6 sm:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Poppins] mb-5 md:mb-6 leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-3 mt-8 text-sm text-gray-300"
          >
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-3">
                {i > 0 && <span className="text-accent">/</span>}
                <span className={i === breadcrumb.length - 1 ? 'text-accent font-medium' : ''}>{item}</span>
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
