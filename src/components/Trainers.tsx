"use client";

import Image from "next/image";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Trainers.module.css";

const trainers = [
  {
    name: "John Doe",
    role: "Body Building Expert",
    image: "/trainer-1.png"
  },
  {
    name: "Jane Smith",
    role: "Yoga & Cardio Specialist",
    image: "/trainer-2.png"
  },
  {
    name: "Mike Tyson",
    role: "Boxing & HIIT Trainer",
    image: "/trainer-3.png"
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className={styles.trainers}>
      <div className="container">
        <h2 className="section-title">
          Meet Our <span>Expert</span> Trainers
        </h2>
        
        <div className={styles.grid}>
          {trainers.map((trainer, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.card}
            >
              <Image 
                src={trainer.image} 
                alt={trainer.name} 
                fill 
                className={styles.image}
              />
              <div className={styles.info}>
                <h3>{trainer.name}</h3>
                <p>{trainer.role}</p>
                <div className={styles.socials}>
                  <a href="#" className={styles.socialIcon}><Instagram size={18} /></a>
                  <a href="#" className={styles.socialIcon}><Twitter size={18} /></a>
                  <a href="#" className={styles.socialIcon}><Facebook size={18} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
