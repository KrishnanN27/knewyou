import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

import HeroImg from "../../assets/homepage/h1.jpg";
import Img2 from "../../assets/homepage/h2.PNG";
import Img3 from "../../assets/homepage/h3.PNG";
import Img4 from "../../assets/homepage/h4.PNG";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section id="home" className="home-hero">
        <motion.div
          className="home-hero-bg"
          style={{ backgroundImage: `url(${HeroImg})` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        <div className="container">
          <div className="home-hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Knew You
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              A place for identity, belonging, and faith-based personal growth —
              where young hearts are seen, known, and supported.
            </motion.p>

            <motion.div
              className="scroll-cue"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ↓
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= IMAGES ================= */}
      <motion.section
        className="home-images"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <motion.p
            className="image-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            This is what growth can look like.
          </motion.p>

          <div className="image-grid">
            {[
              { src: Img2, label: "Expression" },
              { src: Img3, label: "Mentorship" },
              { src: Img4, label: "Belonging" },
            ].map((img, i) => (
              <motion.div
                key={i}
                className="image-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
              >
                <img src={img.src} alt={img.label} />
                <span>{img.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= STATEMENT ================= */}
      <motion.section
        className="home-statement"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <p>
            Discover who you were created to be, find belonging, and grow into
            the fullness of who God made you to be.
          </p>
        </div>
      </motion.section>
    </>
  );
}
