import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faUser,
  faUsers,
  faHandsHolding,
  faChild,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="title_headling">
          <h3>Our Services</h3>
          <p>
            Thoughtfully designed offerings that support beauty, identity,
            family, and restoration — inside and out.
          </p>
        </div>

        <div className="service_wrapper">
          {/* 01 */}
          <div className="service_box">
            <div className="service_icon green_icon">
              <FontAwesomeIcon icon={faLeaf} />
            </div>
            <h4 className="number">01</h4>
            <div className="service_content">
              <h5>Holistic Beauty Services</h5>
              <p>
                Beauty rooted in care, presence, and intention. Our services go
                beyond appearance to support confidence, wellness, and
                self-expression in a calm, restorative environment.
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="service_box">
            <div className="service_icon blue_icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <h4 className="number">02</h4>
            <div className="service_content">
              <h5>Image & Identity Consulting</h5>
              <p>
                Personalized guidance to help you align how you look, feel, and
                live. This service supports clarity, confidence, and authentic
                self-expression at every stage of life.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="service_box">
            <div className="service_icon">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h4 className="number">03</h4>
            <div className="service_content">
              <h5>Family-Centered Care</h5>
              <p>
                Designed with families in mind. From shared experiences to
                thoughtful accommodations, we make it easier for parents and
                caregivers to receive care without disconnecting from their
                children.
              </p>
            </div>
          </div>

          {/* 04 */}
          <div className="service_box">
            <div className="service_icon green_icon">
              <FontAwesomeIcon icon={faHandsHolding} />
            </div>
            <h4 className="number">04</h4>
            <div className="service_content">
              <h5>Restoration & Renewal Experiences</h5>
              <p>
                Gentle spaces for reflection, prayerful support, and emotional
                renewal. These offerings are designed to help individuals slow
                down, reconnect, and restore what life has worn thin.
              </p>
            </div>
          </div>

          {/* 05 */}
          <div className="service_box">
            <div className="service_icon">
              <FontAwesomeIcon icon={faChild} />
            </div>
            <h4 className="number">05</h4>
            <div className="service_content">
              <h5>Children’s Drop-In Care</h5>
              <p>
                A safe, nurturing space for children while parents receive
                services or attend gatherings. Staffed with care, values, and
                attention to each child’s well-being.
              </p>
            </div>
          </div>

          {/* 06 */}
          <div className="service_box">
            <div className="service_icon blue_icon">
              <FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <h4 className="number">06</h4>
            <div className="service_content">
              <h5>Workshops & Community Gatherings</h5>
              <p>
                Classes, events, and shared experiences focused on beauty,
                faith-inspired living, family rhythms, and personal growth —
                creating meaningful connection within the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
