import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main footer content */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary font-mono">vartul.dev</span>
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Backend developer crafting robust systems and APIs that make the digital world go round.
            </p>
          </div>

          {/* Quirky separator */}
          <div className="flex items-center justify-center gap-4 mb-8 text-muted-foreground">
            <div className="h-px bg-border/20 flex-1 max-w-20" />
            <div className="flex items-center gap-2 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary animate-pulse" />
              <span>and lots of</span>
              <Coffee className="w-4 h-4 text-tech-orange" />
            </div>
            <div className="h-px bg-border/20 flex-1 max-w-20" />
          </div>

          {/* Copyright and tech stack */}
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Code className="w-4 h-4" />
              <span>Built with React, Tailwind CSS, and Framer Motion</span>
            </div>
            <p>
              © {new Date().getFullYear()} Vartul. All rights reserved.
              <span className="ml-2 font-mono text-xs text-primary">
                [status: online]
              </span>
            </p>
            <p className="text-xs">
              "First, solve the problem. Then, write the code." - John Johnson
            </p>
          </div>

          {/* Fun ASCII art */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="mt-8 font-mono text-xs text-muted-foreground/50"
          >
            <pre className="inline-block">
{`    ╭─────────────────╮
    │   Thanks for    │
    │   visiting!     │
    ╰─────────────────╯
           │
           ▼
        ( ͡° ͜ʖ ͡°)`}
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;