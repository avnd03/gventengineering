import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const colors = ['#E53E3E', '#3182CE', '#38A169', '#D69E2E', '#805AD5', '#DD6B20', '#319795'];

export default function PrivacyPage() {
  return (
    <>


      {/* Logo Wall */}
      <section className="py-28 md:py-36 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionTitle
            subtitle=""
            title="Privacy Policy"
            description=""
          />


        </div>
      </section>


    </>
  );
}
