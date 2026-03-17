"use client";

import { motion } from "framer-motion";
import { 
  Dumbbell, 
  HeartPulse, 
  Users, 
  Timer, 
  Utensils, 
  Zap 
} from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    title: "Weight Lifting",
    description: "Build muscle and strength with our comprehensive weight training programs and top-tier equipment.",
    icon: <Dumbbell size={32} />
  },
  {
    title: "Cardio Training",
    description: "Improve your cardiovascular health with our extensive range of treadmills, ellipticals, and more.",
    icon: <HeartPulse size={32} />
  },
  {
    title: "Group Classes",
    description: "Join energetic group fitness classes including Yoga, HIIT, Zumba, and Crossfit sessions.",
    icon: <Users size={32} />
  },
  {
    title: "Personal Training",
    description: "Get one-on-one guidance from certified trainers who create personalized workout plans for you.",
    icon: <Timer size={32} />
  },
  {
    title: "Nutrition Plans",
    description: "Complement your workouts with expert nutrition advice and custom meal planning services.",
    icon: <Utensils size={32} />
  },
  {
    title: "Body Building",
    description: "Advanced programs for competitive bodybuilding and high-performance muscle development.",
    icon: <Zap size={32} />
  }
];

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <h2 className="section-title">
          Our Best <span>Services</span>
        </h2>
        
        <div className={styles.cards}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.card}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
