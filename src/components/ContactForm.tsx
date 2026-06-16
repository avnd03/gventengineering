import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2, AlertCircle, RotateCcw } from 'lucide-react';
import { sendContactEmail } from '../services/emailService';

interface ContactFormProps {
  compact?: boolean;
  serviceName?: string;
  pageName?: string;
}

export default function ContactForm({ compact, serviceName, pageName }: ContactFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [responseMessage, setResponseMessage] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email address';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    setResponseMessage('');

    const result = await sendContactEmail({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || undefined,
      subject: form.subject.trim(),
      message: form.message.trim(),
      page: pageName,
      service: serviceName,
    });

    if (result.success) {
      setStatus('sent');
      setResponseMessage(result.message);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } else {
      setStatus('error');
      setResponseMessage(result.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const resetForm = () => {
    setStatus('idle');
    setResponseMessage('');
    setErrors({});
  };

  /* ── Success State ── */
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
        <h3 className="text-2xl font-bold font-[Poppins] text-primary dark:text-white mb-3">
          Message Sent!
        </h3>
        <p className="text-secondary dark:text-gray-400 max-w-sm leading-relaxed mb-8">
          {responseMessage}
        </p>
        <button
          onClick={resetForm}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-primary dark:text-white font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Send Another Message
        </button>
      </motion.div>
    );
  }

  /* ── Error State ── */
  if (status === 'error') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-8">
          <AlertCircle className="w-12 h-12 text-red-500" />
        </div>
        <h3 className="text-2xl font-bold font-[Poppins] text-primary dark:text-white mb-3">
          Sending Failed
        </h3>
        <p className="text-secondary dark:text-gray-400 max-w-sm leading-relaxed mb-8">
          {responseMessage}
        </p>
        <button
          onClick={resetForm}
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-xl hover:bg-accent-dark transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Try Again
        </button>
      </motion.div>
    );
  }

  /* ── Form ── */
  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className={compact ? 'space-y-5' : 'grid grid-cols-1 md:grid-cols-2 gap-6'}>
        <div>
          <label htmlFor="cf-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full px-5 py-3.5 rounded-xl border bg-white dark:bg-gray-800 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 text-base ${
              errors.name ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200 dark:border-gray-700'
            }`}
            placeholder="Your full name"
            autoComplete="name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full px-5 py-3.5 rounded-xl border bg-white dark:bg-gray-800 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 text-base ${
              errors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200 dark:border-gray-700'
            }`}
            placeholder="your@email.com"
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>
      </div>

      {!compact && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="cf-phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone
            </label>
            <input
              id="cf-phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 text-base"
              placeholder="+65 XXXX XXXX"
              autoComplete="tel"
            />
          </div>
          <div>
            <label htmlFor="cf-subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subject <span className="text-red-400">*</span>
            </label>
            <input
              id="cf-subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className={`w-full px-5 py-3.5 rounded-xl border bg-white dark:bg-gray-800 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 text-base ${
                errors.subject ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200 dark:border-gray-700'
              }`}
              placeholder="How can we help?"
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.subject}
              </p>
            )}
          </div>
        </div>
      )}

      {compact && (
        <div>
          <label htmlFor="cf-subject-c" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Subject <span className="text-red-400">*</span>
          </label>
          <input
            id="cf-subject-c"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={`w-full px-5 py-3.5 rounded-xl border bg-white dark:bg-gray-800 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 text-base ${
              errors.subject ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200 dark:border-gray-700'
            }`}
            placeholder="How can we help?"
          />
          {errors.subject && (
            <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.subject}
            </p>
          )}
        </div>
      )}

      <div>
        <label htmlFor="cf-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={compact ? 5 : 6}
          className={`w-full px-5 py-3.5 rounded-xl border bg-white dark:bg-gray-800 dark:text-white resize-none transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 text-base leading-relaxed ${
            errors.message ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200 dark:border-gray-700'
          }`}
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full md:w-auto px-10 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-base"
        >
          {status === 'sending' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending Message...
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
