import React, { useState } from 'react';
import { Mail, Copy, Check, Send, FileText, ArrowUpRight, MessageSquare, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import SectionHeader from '../ui/SectionHeader';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { useClipboard } from '../../hooks/useClipboard';
import { motion, AnimatePresence } from 'motion/react';

export function Contact() {
  const { copied, copy } = useClipboard();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-slate-900 bg-[#06070c]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Get in Touch"
          title="Have a project in mind?"
          subtitle="Let's build something exceptional together."
          description="Whether you have an engineering role to fill, a full-stack system to architect, or a technical inquiry, I'm always open to discussing opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Channels */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Email Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Direct Email</span>
              </div>

              <div className="mt-2 flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-mono text-xs sm:text-sm text-white truncate select-all">
                  {socialLinks.email}
                </span>
                <motion.button
                  whileTap={{ scale: 0.92 }}
                  type="button"
                  onClick={() => copy(socialLinks.email)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 transition-colors shrink-0 flex items-center gap-1 text-xs font-mono"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[10px]">Copy</span>
                    </>
                  )}
                </motion.button>
              </div>

              <div className="mt-3 text-xs text-slate-500">
                Response time typically within 24 hours.
              </div>
            </div>

            {/* Social Channels List */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Professional Networks
              </span>

              <motion.a
                whileHover={{ x: 4 }}
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                  <span className="text-xs font-mono">GitHub Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </motion.a>

              <motion.a
                whileHover={{ x: 4 }}
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                  <span className="text-xs font-mono">LinkedIn Network</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </motion.a>

              <motion.a
                whileHover={{ x: 4 }}
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono">Curriculum Vitae (PDF)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
            </div>

            {/* Current Status Box */}
            <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/80 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 status-pulse shrink-0"></div>
              <p className="text-xs text-slate-400">
                <strong className="text-slate-200">Open to inquiries:</strong> Ready for full-stack, backend, and technical software engineering opportunities.
              </p>
            </div>

          </motion.div>

          {/* Right Column: Contact Form with Motion */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090b14]/90 border border-slate-800 backdrop-blur-xl shadow-2xl">
              
              <div className="flex items-center gap-2 pb-4 mb-6 border-b border-slate-800">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <h3 className="text-base font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-10 text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Message Received!</h4>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                      Thank you for reaching out. I have received your message and will reply via email shortly.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-cyan-300 transition-colors mt-2"
                    >
                      <span>Send Another Message</span>
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-4" 
                    noValidate
                  >
                    
                    {/* Name Field */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Connor"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors ${
                          errors.name ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500/80'
                        }`}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@domain.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500/80'
                        }`}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Subject / Project Scope <span className="text-slate-500">(optional)</span>
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Full-Stack Engineering / Architecture Consultation"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500/80 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Message <span className="text-rose-400">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your team, application requirements, or timeline..."
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors resize-none ${
                          errors.message ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500/80'
                        }`}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20"
                      >
                        {status === 'submitting' ? (
                          <>
                            <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                            <span>Dispatching Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </motion.button>
                    </div>

                    <p className="text-[11px] text-slate-500 pt-1">
                      * Ready for integration with Formspree, EmailJS, or private backend mail handlers.
                    </p>

                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
