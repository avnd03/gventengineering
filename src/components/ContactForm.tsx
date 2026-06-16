import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
  compact?: boolean;
}

export default function ContactForm({ compact }: ContactFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('sent');
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-8">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold font-[Poppins] text-primary dark:text-white mb-3">Thank You!</h3>
        <p className="text-secondary dark:text-gray-400 max-w-sm leading-relaxed">Your message has been sent successfully. We'll get back to you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className={compact ? 'space-y-5' : 'grid grid-cols-1 md:grid-cols-2 gap-6'}>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full px-5 py-3.5 rounded-xl border bg-white dark:bg-gray-800 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 text-base ${
              errors.name ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'
            }`}
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full px-5 py-3.5 rounded-xl border bg-white dark:bg-gray-800 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 text-base ${
              errors.email ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
        </div>
      </div>
      {!compact && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 text-base"
              placeholder="+65 XXXX XXXX"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className={`w-full px-5 py-3.5 rounded-xl border bg-white dark:bg-gray-800 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 text-base ${
                errors.subject ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'
              }`}
              placeholder="How can we help?"
            />
            {errors.subject && <p className="text-red-500 text-xs mt-2">{errors.subject}</p>}
          </div>
        </div>
      )}
      {compact && (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={`w-full px-5 py-3.5 rounded-xl border bg-white dark:bg-gray-800 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 text-base ${
              errors.subject ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'
            }`}
            placeholder="How can we help?"
          />
          {errors.subject && <p className="text-red-500 text-xs mt-2">{errors.subject}</p>}
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={compact ? 5 : 6}
          className={`w-full px-5 py-3.5 rounded-xl border bg-white dark:bg-gray-800 dark:text-white resize-none transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 text-base leading-relaxed ${
            errors.message ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'
          }`}
          placeholder="Tell us about your project..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-2">{errors.message}</p>}
      </div>
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full md:w-auto px-10 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 disabled:opacity-70 flex items-center justify-center gap-3 text-base"
        >
          {status === 'sending' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
