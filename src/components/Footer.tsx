"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Facebook, Youtube, ChevronRight } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerAbout}>
          <div className={styles.footerLogo}>
            <Image src="/logo.png" alt="Fitness Gym Logo" width={60} height={60} />
          </div>
          <p>
            The best fitness center in the city, providing top-class gym facilities 
            and expert guidance since 2013. Join us and transform your body.
          </p>
          <div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>
            <a href="#" className="text-muted"><Instagram size={24} /></a>
            <a href="#" className="text-muted"><Twitter size={24} /></a>
            <a href="#" className="text-muted"><Facebook size={24} /></a>
            <a href="#" className="text-muted"><Youtube size={24} /></a>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h4>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#trainers">Expert Trainers</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Our Services</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="#services">Weight Lifting</Link></li>
            <li><Link href="#services">Cardio Training</Link></li>
            <li><Link href="#services">Group Classes</Link></li>
            <li><Link href="#services">Personal Training</Link></li>
            <li><Link href="#services">Nutrition Plans</Link></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Newsletter</h4>
          <div className={styles.newsletter}>
            <p>Subscribe to get the latest updates and health tips.</p>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter Email" 
                className={styles.newsletterInput} 
              />
              <button type="submit" className={styles.newsletterBtn}>
                <ChevronRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className={`container ${styles.copyright}`}>
        <p>&copy; {new Date().getFullYear()} Fitness GYM. All rights reserved. Designed for excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
