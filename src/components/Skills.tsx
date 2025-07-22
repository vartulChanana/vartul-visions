import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 90, color: "tech-green" },
        { name: "Express.js", level: 85, color: "tech-blue" },
        { name: "MongoDB", level: 80, color: "tech-green" },
        { name: "PostgreSQL", level: 75, color: "tech-blue" },
        { name: "Redis", level: 70, color: "primary" }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90, color: "tech-orange" },
        { name: "TypeScript", level: 85, color: "tech-blue" },
        { name: "Python", level: 80, color: "tech-green" },
        { name: "Java", level: 75, color: "primary" },
        { name: "C++", level: 70, color: "tech-purple" }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Docker", level: 80, color: "tech-blue" },
        { name: "Git", level: 85, color: "primary" },
        { name: "AWS", level: 70, color: "tech-orange" },
        { name: "Linux", level: 75, color: "tech-green" },
        { name: "Postman", level: 90, color: "tech-purple" }
      ]
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-lg">
            Tools and technologies I use to build amazing things
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-${skill.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-6 rounded-xl max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              <span className="text-primary font-mono">[fun_fact]:</span> 
              {" "}I once optimized a database query that was taking 30 seconds to run in under 100ms. 
              The secret? Proper indexing and a cup of really good coffee ☕
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;