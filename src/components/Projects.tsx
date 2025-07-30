import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, BarChart3, Package } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Personal Finance Assistant",
      description: "A comprehensive financial management system built with the MERN stack. Features expense tracking, budget planning, and financial insights with beautiful data visualizations.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Chart.js"],
      features: [
        "Real-time expense tracking",
        "Budget planning & alerts",
        "Financial goal setting",
        "Automated categorization",
        "Data visualization dashboard"
      ],
      github: "https://github.com/vartulChanana/sleek-fin-dash",
      live: "https://finance-app-ten-inky.vercel.app/",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-tech-green to-tech-blue"
    },
    {
      title: "🗳️ Voting Bank Analysis using Sentiment Analysis",
      description: "NLP-powered system that analyzes textual feedback to determine sentiment and dominant emotions from user inputs. Designed to interpret public opinion from voter statements with bulk Excel processing capabilities.",
      tech: ["Python", "NLTK", "VADER", "Pandas", "Excel", "NLP"],
      features: [
        "Overall sentiment analysis (Positive/Neutral/Negative)",
        "Dominant emotion detection (Happy, Sad, Angry, etc.)",
        "Bulk Excel file processing",
        "Custom keyword & phrase detection",
        "Handles intensifiers and negations"
      ],
      github: "https://github.com/vartulChanana/voting-bank-sentiment-analysis",
      icon: <BarChart3 className="w-6 h-6" />,
      gradient: "from-tech-blue to-tech-purple"
    },
    {
      title: "Smart Inventory Management System",
      description: "Comprehensive inventory management solution built with the MERN stack. Features real-time tracking, automated alerts, and intelligent forecasting for efficient warehouse operations.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Chart.js"],
      features: [
        "Real-time inventory tracking",
        "Automated low-stock alerts",
        "Demand forecasting",
        "Multi-location support",
        "Analytics dashboard"
      ],
      github: "https://github.com/vartulChanana/smart-inventory",
      live: "https://smart-inventory-demo.com",
      icon: <Package className="w-6 h-6" />,
      gradient: "from-tech-purple to-primary"
    },
    {
      title: "🧘 Calm Pulse Companion",
      description: "A calming web app to help users manage stress with guided breathing and session timers.",
      tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      features: [
        "Breathing",
        "Timers",
        "Minimal UI",
        "Responsive",
        "Animations"
      ],
      github: "https://github.com/vartulChanana/calm-pulse-companion",
      live: "https://calm-pulse-companion.vercel.app/",
      icon: <Package className="w-6 h-6" />,
      gradient: "from-sky-400 to-indigo-500"
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Backend Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building scalable, robust backend systems that power modern applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} shadow-lg`}>
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      className="hoverable p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="hoverable p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {project.features && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
