"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const About = () => {
  const features = [
    "Premium Gym Equipment",
    "Certified Expert Trainers",
    "Flexible Membership Plans",
    "24/7 Facility Access",
    "Nutrition & Diet Counseling",
    "Free Locker & Shower"
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.aboutGrid}`}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.imageWrapper}
        >
          <Image 
            src="/about-img.png" 
            alt="Gym Interior" 
            width={600} 
            height={500} 
            className={styles.imageMain}
          />
          <div className={styles.experience}>
            <h2>10+</h2>
            <p>Years of Excellence</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <h2 className="section-title" style={{ textAlign: "left", marginBottom: "20px" }}>
            Your Journey to <span>Fitness</span> Starts Here
          </h2>
          <p className={styles.description}>
            Founded in 2013, Fitness Gym has been at the forefront of the fitness revolution. 
            We combine cutting-edge equipment with personalized training programs to help 
            you reach your goals, whether it's weight loss, muscle gain, or overall wellness.
          </p>
          
          <div className={styles.features}>
            {features.map((item, index) => (
              <div key={index} className={styles.featureItem}>
                <CheckCircle2 className={styles.checkIcon} size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button className="btn btn-primary" style={{ marginTop: "40px" }}>
            Learn More About Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
