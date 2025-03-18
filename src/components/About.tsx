import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About: React.FC = () => {
  const features = [
    {
      title: "Design",
      description: "Clean lines and minimalist aesthetics",
    },
    {
      title: "Quality",
      description: "Premium materials and craftsmanship",
    },
    {
      title: "Sustainability",
      description: "Eco-friendly practices and materials",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="about-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            We are a Scandinavian design studio focused on creating timeless
            pieces that blend form and function. Our philosophy is rooted in
            simplicity, sustainability, and innovation.
          </motion.p>
          <div className="about-features">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.2, duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
