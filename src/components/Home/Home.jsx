import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Img2 from "../../assets/homepage/h2.PNG";
import Img3 from "../../assets/homepage/h3.PNG";
import Img4 from "../../assets/homepage/h4.PNG";

import HeroImg from "../../assets/homepage/h1.jpg";
import Logo from "../../assets/logo/logo.png";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="home-hero">
        <motion.div
          className="home-hero-bg"
          style={{ backgroundImage: `url(${HeroImg})` }}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />

        <div className="container">
          <div className="home-hero-content">
            <motion.img
              src={Logo}
              alt="Knew You Logo"
              className="home-logo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Youth & Teen Center
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A place for identity, belonging & faith-based personal growth
            </motion.p>

            <motion.span
              className="age-badge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Ages 8–20
            </motion.span>
          </div>
        </div>
      </section>

      {/* ================= FEATURES (POSTER TEXT) ================= */}
      {/* ================= FEATURES ================= */}
      <section className="home-features">
        <div className="container">
          {/* TEXT ROW */}
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Creative Expression</h3>
              <p>
                Explore journaling, art, music, and movement as a way to connect
                and express your faith
              </p>
            </div>

            <div className="feature-card">
              <h3>Safe Community</h3>
              <p>
                Build friendships, share openly, and deepen your faith in a
                safe, affirming space
              </p>
            </div>

            <div className="feature-card">
              <h3>Mentorship & Leadership</h3>
              <p>
                Develop leadership skills and grow in confidence to shine your
                unique light
              </p>
            </div>
          </div>

          {/* IMAGE ROW */}
          <div className="feature-images">
            <img src={Img2} alt="Creative Expression" />
            <img src={Img3} alt="Safe Community" />
            <img src={Img4} alt="Mentorship & Leadership" />
          </div>
        </div>
      </section>

      {/* ================= STATEMENT ================= */}
      <section className="home-statement">
        <div className="container">
          <p>
            Discover who you were created to be, find belonging, and deepen your
            faith.
          </p>
        </div>
      </section>
    </>
  );
}
