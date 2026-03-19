"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.contactGrid}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.contactInfo}
          >
            <h2 className="section-title" style={{ textAlign: "left" }}>
              Get in <span>Touch</span>
            </h2>
            <p>
              Have questions about our membership or programs? Reach out to us, 
              and our team will get back to you within 24 hours.
            </p>

            <div className={styles.infoCards}>
              {[
                { icon: <MapPin size={24} />, title: "Visit Us", content: "123 Fitness Street, New York, NY 10001" },
                { icon: <Phone size={24} />, title: "Call Us", content: "+1 (555) 000-1111" },
                { icon: <Mail size={24} />, title: "Email Us", content: "info@fitnessgym.com" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={styles.infoCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.iconWrapper}>{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.formWrapper}
          >
            {submitted && (
              <div className={styles.successMessage}>
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input 
                  {...register("name")}
                  className={styles.input}
                  placeholder="Your Name"
                />
                {errors.name && <span className={styles.error}>{errors.name.message}</span>}
              </div>

              <div className={styles.formGroup}>
                <label>Email Address</label>
                <input 
                  {...register("email")}
                  className={styles.input}
                  placeholder="your@email.com"
                />
                {errors.email && <span className={styles.error}>{errors.email.message}</span>}
              </div>

              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea 
                  {...register("message")}
                  className={styles.textarea}
                  placeholder="Tell us about your fitness goals..."
                />
                {errors.message && <span className={styles.error}>{errors.message.message}</span>}
              </div>

              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                className={`${styles.submitBtn} btn btn-primary`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : (
                  <>Send Message <Send size={18} /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
