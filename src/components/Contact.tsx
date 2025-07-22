import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Coffee } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:vartulchanana@gmail.com",
      description: "Drop me a line",
      color: "tech-orange"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/vartulChanana",
      description: "Check out my code",
      color: "primary"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/vartul-chanana-77a283221/",
      description: "Let's connect professionally",
      color: "tech-blue"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Let's Build Something
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Always excited to collaborate on interesting projects or discuss new opportunities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="hoverable glass-card p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-${link.color} flex items-center justify-center group-hover:shadow-lg group-hover:shadow-${link.color}/50 transition-all duration-300`}>
                  {link.icon}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {link.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {link.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Location & availability */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 rounded-xl text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-primary mr-2" />
              <span className="text-muted-foreground">
                Currently based in Dehradun, India
              </span>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <Coffee className="w-5 h-5 text-tech-orange mr-2" />
              <span className="text-muted-foreground">
                Available for internships and freelance projects
              </span>
            </div>

            <div className="border-t border-border/20 pt-6">
              <p className="text-muted-foreground mb-4">
                I'm always interested in hearing about new opportunities, especially in:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Backend Development", "API Design", "Microservices", "Database Optimization", "DevOps","AI|ML","DSA"].map((interest, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Fun quote */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <blockquote className="text-lg text-muted-foreground italic">
              "Code is like humor. When you have to explain it, it's bad."
              <footer className="text-sm mt-2 text-primary">
                - Cory House (and probably every backend developer ever)
              </footer>
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
