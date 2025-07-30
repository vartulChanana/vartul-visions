import React from 'react';
import { motion } from 'framer-motion';
import vartulAvatar from '@/assets/vartul-avatar.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-tech-purple/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15,
              delay: 0.2 
            }}
            className="w-32 h-32 mx-auto mb-8 relative"
          >
            <img
              src={vartulAvatar}
              alt="Vartul"
              className="w-full h-full rounded-full object-cover border-4 border-primary shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-tech-purple/20 animate-glow-pulse" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-4 glow-text"
          >
            Vartul
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-2 mb-8"
          >
            <p className="text-xl md:text-2xl text-muted-foreground">
              Computer Science Student at{' '}
              <span className="text-primary font-semibold">UPES</span>
            </p>
            <p className="text-lg text-muted-foreground/80">
              Full Stack Engineer • MongoDB • Express • Node.js
            </p>
          </motion.div>

          {/* Quirky description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Building robust backend systems and crafting APIs that make developers smile.
              Currently obsessed with microservices and making databases go{' '}
              <span className="text-tech-green font-mono">brrrrr</span> 🚀
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="hoverable px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="hoverable px-8 py-4 border border-border text-foreground rounded-lg font-semibold transition-all duration-300 hover:bg-secondary hover:scale-105"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-tech-green rounded-full opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-6 h-6 bg-tech-blue rounded-full opacity-40"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-3 h-3 bg-primary rounded-full opacity-50"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </section>
  );
};

export default Hero;
