/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart, Send, Instagram, Phone } from 'lucide-react';
import WhatsAppIcon from '../../assets/icons/WhatsAppIcon';
import ArrowUpIcon from '../../assets/icons/ArrowUpIcon';
import HeartIcon from '../../assets/icons/HeartIcon';
import MenuIcon from '../../assets/icons/MenuIcon';
import MinusIcon from '../../assets/icons/MinusIcon';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeError, setSubscribeError] = useState('');
  const [fabOpen, setFabOpen] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubscribeError('');
    setIsSubmitting(true);

    try {
      // Validate email
      if (!validateEmail(email)) {
        throw new Error('Please enter a valid email address');
      }

      const subscriberName = email.split('@')[0];

      // Send notification to admin (you)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: subscriberName,
          from_email: email,
          message: `New newsletter subscription from ${email}`,
          to_name: 'Prashant Gami'
        }
      );

      // Send welcome email to subscriber
      const welcomeEmailParams = {
        to_name: subscriberName,
        to_email: email,
        greeting: `Hello ${subscriberName}!`,
        message: "Thank you for subscribing to my newsletter! I'm excited to share my latest updates, insights, and projects with you. Stay tuned for valuable content coming your way.",
        primary_color: '#6272a4',
        accent_color: '#4a5a8a',
        current_year: new Date().getFullYear().toString()
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID,
        welcomeEmailParams
      );

      setIsSubscribed(true);
      setEmail('');
      // Reset subscription status after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    } catch (error) {
      console.error('Subscription error:', error);
      setSubscribeError(error.message || 'Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Vision', href: '#vision' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/prashant-gami-41a7a2248',
      color: 'hover:bg-[#0077b5]'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/Prashant-131004',
      color: 'hover:bg-[#333333]'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/prashant_unleashed',
      color: 'hover:bg-[#E1306C]'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:prashantprofessional1310@gmail.com',
      color: 'hover:bg-[#f26c63]'
    },
    {
      name: 'WhatsApp',
      icon: <Phone className="w-5 h-5" />,
      url: 'https://wa.me/919825768978?text=Hello%20%F0%9F%91%8B%20I%20have%20a%20quick%20question%20for%20you.%20Can%20we%20connect%3F',
      color: 'hover:bg-[#25D366]'
    }
  ];

  return (
    <footer className="relative bg-[#333333] text-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #6272a4 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold">Prashant</h3>
            <p className="text-sm sm:text-base text-white/70">
              Building the future through code and creativity.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-1.5 sm:p-2 rounded-full bg-white/10 ${link.color} transition-colors`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3 sm:space-y-4"
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/70 mb-4">
              Subscribe to my newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSubscribeError('');
                  }}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-[#6272a4] focus:outline-none text-white placeholder-white/50"
                  required
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#6272a4] rounded-lg font-medium hover:bg-[#4a5a8a] transition-colors flex items-center justify-center gap-2 min-w-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span className="hidden sm:inline">Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span className="hidden sm:inline">Subscribe</span>
                    </>
                  )}
                </motion.button>
              </div>
              <AnimatePresence>
                {isSubscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-400"
                  >
                    Thanks for subscribing! You'll receive updates soon.
                  </motion.p>
                )}
                {subscribeError && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-[#f26c63]"
                  >
                    {subscribeError}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-white/70">
              © {new Date().getFullYear()} Prashant. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-white/70 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-[#f26c63]" /> by Prashant
            </p>
          </div>
        </motion.div>

        {/* Multi-function Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <motion.button
            onClick={() => setFabOpen((open) => !open)}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 bg-[#6272a4] rounded-full shadow-lg text-white flex items-center justify-center focus:outline-none transition-colors"
            aria-label="Open actions"
          >
            {fabOpen ? (
              <MinusIcon className="w-6 h-6" color="#fff" />
            ) : (
              <MenuIcon className="w-6 h-6" color="#fff" />
            )}
          </motion.button>
          {/* Action Buttons */}
          <AnimatePresence>
            {fabOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute bottom-16 right-0 flex flex-col items-end gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-[#25D366] rounded-full shadow-lg text-white flex items-center justify-center"
                  aria-label="WhatsApp"
                  onClick={() =>
                    window.open(
                      'https://wa.me/919825768978?text=Hello%20%F0%9F%91%8B%20I%20have%20a%20quick%20question%20for%20you.%20Can%20we%20connect%3F',
                      '_blank'
                    )
                  }
                >
                  <WhatsAppIcon className="w-6 h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-[#6272a4] rounded-full shadow-lg text-white flex items-center justify-center"
                  aria-label="Scroll to top"
                  onClick={scrollToTop}
                >
                  <ArrowUpIcon className="w-6 h-6" color="#fff" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-[#f26c63] rounded-full shadow-lg text-white flex items-center justify-center"
                  aria-label="Favorite"
                  onClick={() => window.open('https://www.instagram.com/prashant_unleashed', '_blank')}
                >
                  <HeartIcon className="w-6 h-6" color="#fff" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 