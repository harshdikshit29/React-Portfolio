import React from 'react';
import { motion } from 'motion/react';

export function SectionHeader({
  badge,
  title,
  subtitle,
  description,
  centered = false,
  className = ""
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'} ${className}`}
    >
      {badge && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full text-xs font-mono font-medium tracking-wide uppercase border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 ${centered ? 'mx-auto' : ''}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          {badge}
        </motion.div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
        {title}
        {subtitle && (
          <span className="block text-slate-400 font-normal mt-1.5 text-2xl sm:text-3xl md:text-4xl">
            {subtitle}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeader;
