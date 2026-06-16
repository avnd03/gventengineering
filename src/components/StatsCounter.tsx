import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCountUp } from '../hooks/useCountUp';
import { stats } from '../data/siteData';
import { Award, CheckCircle, Users, FolderOpen } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Years of Excellence': <Award className="w-8 h-8" />,
  'Project Success': <CheckCircle className="w-8 h-8" />,
  'Employees': <Users className="w-8 h-8" />,
  'Completed Projects': <FolderOpen className="w-8 h-8" />,
};

function StatItem({ label, value, suffix, index }: { label: string; value: number; suffix: string; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const count = useCountUp(value, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="text-center group py-6 md:py-8"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-accent/10 text-accent mb-5 md:mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
        {iconMap[label]}
      </div>
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Poppins] text-primary dark:text-white mb-3">
        {count}{suffix}
      </div>
      <div className="text-base md:text-lg text-secondary dark:text-gray-400 font-medium">{label}</div>
    </motion.div>
  );
}

interface StatsCounterProps {
  light?: boolean;
}

export default function StatsCounter({ light }: StatsCounterProps) {
  return (
    <section className={`py-24 md:py-32 ${light ? 'bg-primary dark:bg-gray-950' : 'bg-bg-light dark:bg-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
