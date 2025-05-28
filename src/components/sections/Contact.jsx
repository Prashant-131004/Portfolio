/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Github, Linkedin, Mail, Send, CheckCircle2, XCircle } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitCount, setSubmitCount] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  // Rate limiting check
  const checkRateLimit = () => {
    const now = Date.now();
    const timeDiff = now - lastSubmitTime;
    const maxSubmitsPerHour = 5;
    const hourInMs = 3600000;

    if (submitCount >= maxSubmitsPerHour && timeDiff < hourInMs) {
      throw new Error('Rate limit exceeded. Please try again later.');
    }

    if (timeDiff > hourInMs) {
      setSubmitCount(0);
    }
  };

  const sanitizeInput = (input) => {
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .trim();
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const onSubmit = async (data) => {
    try {
      checkRateLimit();
      setIsSubmitting(true);
      setSubmitStatus(null);

      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        message: sanitizeInput(data.message)
      };

      // Validate email
      if (!validateEmail(sanitizedData.email)) {
        throw new Error('Invalid email format');
      }

      // Validate message length
      if (sanitizedData.message.length < 10) {
        throw new Error('Message must be at least 10 characters long');
      }

      if (sanitizedData.message.length > 1000) {
        throw new Error('Message must not exceed 1000 characters');
      }

      const templateParams = {
        from_name: sanitizedData.name,
        from_email: sanitizedData.email,
        message: sanitizedData.message,
        to_name: 'Prashant Gami',
        timestamp: new Date().toISOString(),
        ip_address: 'N/A'
      };

      console.log('Sending email with params:', {
        serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      });

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('EmailJS Response:', response);

      if (response.status === 200) {
        setSubmitCount(prev => prev + 1);
        setLastSubmitTime(Date.now());
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus(error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/prashant-gami-41a7a2248',
      color: 'hover:bg-[#0077b5]'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/Prashant-131004',
      color: 'hover:bg-[#333333]'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 min-h-screen relative overflow-hidden w-full">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-[#f7f7fa] via-[#f4f4f2] to-[#e0e7ff] opacity-90" />
      
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#333333] mb-3 sm:mb-4">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-lg text-[#333333]/80 max-w-2xl mx-auto px-4">
              Let's connect and discuss how we can work together to bring your ideas to life.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <div className="glass p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e5e7eb] bg-white/80 backdrop-blur-md transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-[#a5b4fc] h-full">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base text-[#333333] font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-white/50 border border-[#b6babd]/20 focus:border-[#6272a4] focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-[#f26c63] text-sm">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#333333] font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-[#b6babd]/20 focus:border-[#6272a4] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-[#f26c63] text-sm">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#333333] font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters long'
                      },
                      maxLength: {
                        value: 1000,
                        message: 'Message must not exceed 1000 characters'
                      }
                    })}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-[#b6babd]/20 focus:border-[#6272a4] focus:outline-none transition-colors resize-none"
                    placeholder="Your message"
                  />
                  {errors.message && (
                    <p className="mt-1 text-[#f26c63] text-sm">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#6272a4] text-white text-sm font-medium transition-all duration-300 shadow-md border-none hover:bg-[#4a5a8a] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Message sent successfully!
                  </motion.div>
                )}

                {submitStatus && submitStatus !== 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-[#f26c63] bg-red-50 p-4 rounded-xl"
                  >
                    <XCircle className="w-5 h-5" />
                    {submitStatus}
                  </motion.div>
                )}
              </form>
            </div>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection delay={0.4}>
            <div className="glass p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e5e7eb] bg-white/80 backdrop-blur-md transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-[#a5b4fc] h-full">
              <h3 className="text-2xl font-semibold text-[#333333] mb-8">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl transition-colors duration-500 group
                      ${link.name === 'LinkedIn'
                        ? 'bg-white hover:bg-[#6272a4] text-black hover:text-white'
                        : link.name === 'GitHub'
                          ? 'bg-white hover:bg-black text-black hover:text-white'
                          : 'bg-white/50 ' + link.color}
                    `}
                  >
                    <div className={`p-2 rounded-full transition-colors duration-500
                      ${link.name === 'LinkedIn'
                        ? 'bg-[#6272a4]/10 text-[#5b8cff]'
                        : link.name === 'GitHub'
                          ? 'bg-black/10 text-[#333333] group-hover:text-white'
                          : 'bg-[#6272a4]/10 text-[#6272a4]'}
                    `}>
                      {link.icon}
                    </div>
                    <span className={`font-medium transition-colors duration-500
                      ${link.name === 'LinkedIn'
                        ? 'text-black group-hover:text-white'
                        : link.name === 'GitHub'
                          ? 'text-black group-hover:text-white'
                          : 'text-[#333333]'}
                    `}>{link.name}</span>
                  </a>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-xl bg-[#6272a4]/5">
                <h4 className="text-lg font-semibold text-[#333333] mb-4">
                  Let's Work Together
                </h4>
                <p className="text-[#333333]/80">
                  Whether you have a project in mind or just want to chat about technology and innovation,
                  I'm always open to new opportunities and collaborations.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact; 