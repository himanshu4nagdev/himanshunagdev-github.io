import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import iotImage from "@/assets/iot-projects.jpg";
import glideImage from "@/assets/glide-projects.jpg";
import bubbleImage from "@/assets/bubble-projects.jpg";
import softrImage from "@/assets/softr-projects.jpg";
import loveableImage from "@/assets/loveable-projects.jpg";
import cursorImage from "@/assets/cursor-projects.jpg";
import vlsiImage from "@/assets/vlsi-projects.jpg";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "IoT Projects",
      image: iotImage,
      description: "Smart connected devices and sensor networks"
    },
    {
      title: "Glide Projects",
      image: glideImage,
      description: "No-code mobile app development"
    },
    {
      title: "Bubble Projects",
      image: bubbleImage,
      description: "Full-stack web applications without code"
    },
    {
      title: "Softr Projects",
      image: softrImage,
      description: "Client portals and internal tools"
    },
    {
      title: "Loveable.dev Projects",
      image: loveableImage,
      description: "AI-powered development solutions"
    },
    {
      title: "Cursor + MCP Projects",
      image: cursorImage,
      description: "Next-gen AI coding assistance"
    },
    {
      title: "VLSI Projects",
      image: vlsiImage,
      description: "Chip design and semiconductor solutions"
    }
  ];

  return (
    <section id="projects" className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-gradient">
            Projects
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group gradient-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:glow-primary"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-display mb-2 text-primary group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Events Section */}
          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-display text-center mb-4 text-gradient">
              Events
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 rounded-full" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Past Events */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="gradient-card rounded-xl p-8 border border-border"
              >
                <h4 className="text-2xl font-display mb-6 text-primary">
                  Past Events
                </h4>
                <a
                  href="https://aiss.iiitd.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-background/50 border border-border hover:border-primary transition-all duration-300 hover:glow-primary"
                >
                  <h5 className="text-lg font-display mb-2 text-accent">
                    Learning LLM from Scratch
                  </h5>
                  <p className="text-foreground mb-2">
                    31st July - 2nd Aug 2025
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    Taught basics of transformer encoder part, referring to the GitHub repo by{" "}
                    <a 
                      href="https://github.com/rasbt/LLMs-from-scratch"
                      className="text-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      rasbt/LLMs-from-scratch
                    </a>
                  </p>
                  <p className="text-muted-foreground text-sm italic">
                    Blog for this session is under progress
                  </p>
                </a>
              </motion.div>

              {/* Upcoming Events */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="gradient-card rounded-xl p-8 border border-border"
              >
                <h4 className="text-2xl font-display mb-6 text-primary">
                  Upcoming Events
                </h4>
                <div className="space-y-6">
                  <a
                    href="https://www.ripsscon2025.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg bg-background/50 border border-border hover:border-primary transition-all duration-300 hover:glow-primary"
                  >
                    <h5 className="text-lg font-display mb-2 text-accent">
                      Vibecoding Session
                    </h5>
                    <p className="text-foreground mb-1">
                      Dec 5, 2025
                    </p>
                    <p className="text-muted-foreground text-sm">
                      AIIMS (Ripsscon AI Workshop)
                    </p>
                  </a>

                  <div className="p-4 rounded-lg bg-background/50 border border-border">
                    <h5 className="text-lg font-display mb-2 text-accent">
                      Vibecoding using Cursor + MCP
                    </h5>
                    <p className="text-foreground mb-1">
                      January, 2026
                    </p>
                    <p className="text-muted-foreground text-sm">
                      IIITD
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
