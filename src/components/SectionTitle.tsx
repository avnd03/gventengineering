import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionTitle({ subtitle, title, description, light, center = true }: SectionTitleProps) {
  return (
    <div className={`mb-16 md:mb-20 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-block text-sm font-semibold uppercase tracking-[0.2em] mb-4 ${
            light ? 'text-accent-light' : 'text-accent'
          }`}
        >
          — {subtitle} —
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-[Poppins] leading-tight ${
          light ? 'text-white' : 'text-primary dark:text-white'
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mt-5 text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${
            light ? 'text-gray-300' : 'text-secondary dark:text-gray-400'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
