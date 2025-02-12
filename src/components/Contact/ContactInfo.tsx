import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'tapas.code247@gmail.com',
    href: 'mailto:tapas.code247@gmail.com'
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '+91 70086 33390',
    href: 'tel:+917008633390'
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Location',
    value: 'Bangalore, IN',
    href: 'https://maps.google.com'
  }
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactInfo.map((info, index) => (
        <motion.a
          key={info.label}
          href={info.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-4 p-4 rounded-lg bg-gray-200/50 hover:bg-gray-200
                   dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-700
                   dark:hover:bg-white/10 transition-all duration-200 "
        >
          <div className="p-2 rounded-full bg-blue-500/10 text-blue-500">
            {info.icon}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {info.label}
            </p>
            <p className="font-medium">{info.value}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}