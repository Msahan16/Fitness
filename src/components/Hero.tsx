"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.badge}>Est. 2023 - Premium Fitness</span>
          <h1 className={styles.title}>
            Transform Your <span>Body</span><br />
            Transform Your <span>Life</span>
          </h1>
          <p className={styles.subtitle}>
            Join the ultimate fitness experience with state-of-the-art equipment, 
            expert trainers, and a supportive community dedicated to your success.
          </p>

          <div className={styles.actions}>
            <button className={`${styles.getStartedBtn} btn btn-primary`}>
              Get Started <ArrowRight size={20} />
            </button>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3>500+</h3>
              <p>Active Members</p>
            </div>
            <div className={styles.statItem}>
              <h3>50+</h3>
              <p>Expert Trainers</p>
            </div>
            <div className={styles.statItem}>
              <h3>24/7</h3>
              <p>GYM Access</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative element */}
      <div className={styles.scrollIndicator}>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className={styles.mouse}
        />
      </div>
    </section>
  );
};

export default Hero;
