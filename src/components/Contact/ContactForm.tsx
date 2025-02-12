import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useFormValidation } from '../../hooks/useFormValidation';

export function ContactForm() {
  const { errors, validateField, isValid } = useFormValidation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      setSubmitted(true);
      // Handle form submission logic here
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-md"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => validateField('name', e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm
                   border border-gray-200 dark:border-gray-700
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   transition-all duration-200"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="email"
          id="email"
          name="email"
          required
          onChange={(e) => validateField('email', e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm
                   border border-gray-200 dark:border-gray-700
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   transition-all duration-200"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          id="message"
          name="message"
          rows={4}
          required
          onChange={(e) => validateField('message', e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm
                   border border-gray-200 dark:border-gray-700
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   transition-all duration-200 resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={!isValid || submitted}
        className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500
                 text-white font-medium flex items-center justify-center gap-2
                 disabled:opacity-50 disabled:cursor-not-allowed
                 transition-all duration-200"
      >
        {submitted ? 'Message Sent!' : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </motion.button>
    </motion.form>
  );
}