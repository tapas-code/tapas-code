import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { SocialLinks } from './SocialLinks';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out through
            any of the channels below or fill out the contact form.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <ContactInfo />
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                Connect with me on social media
              </p>
              <SocialLinks />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-start"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}