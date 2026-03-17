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
  },
  {
    name: "Sarah Connor",
    role: "Strength & Conditioning",
    image: "/trainer-4.png"
  },
  {
    name: "David Miller",
    role: "Crossfit Expert",
    image: "/trainer-5.png"
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className={styles.trainers}>
      <div className="container">
        <h2 className="section-title">
          Meet Our <span>Expert</span> Trainers
        </h2>
        
        <div className={styles.carouselContainer}>
          <div className={styles.track}>
            {[...trainers, ...trainers].map((trainer, index) => (
              <motion.div 
                key={index}
                className={styles.card}
                whileHover={{ y: -20, rotateY: 10, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
      </div>
    </section>
  );
};

export default Trainers;
