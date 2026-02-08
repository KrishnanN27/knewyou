import React from "react";
import "./Contact.css";
import ContactImage from "../../assets/contact/contact.jpg";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact_wrapper">
          <div className="contact_col">
            <div className="contact_image">
              <img src={ContactImage} alt="Contact" />
            </div>
          </div>

          <div className="contact_col">
            <h2>Contact Us</h2>

            <form
              action="https://formsubmit.co/krishnaofficial27@gmail.com"
              method="POST"
            >
              {/* Disable captcha (optional) */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Redirect back to your site after submit */}
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/#contact"
              />

              {/* Email subject */}
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission"
              />

              {/* Auto-reply to the sender */}
              <input
                type="hidden"
                name="_autoresponse"
                value="Thanks for contacting us! We received your message and will get back to you soon."
              />

              {/* Honeypot for spam */}
              <input type="text" name="_honey" style={{ display: "none" }} />

              {/* ===== FORM FIELDS ===== */}

              <div className="input_wrapper">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="input_wrapper">
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Your Phone"
                />
              </div>

              <div className="input_wrapper">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="input_wrapper">
                <textarea
                  name="message"
                  placeholder="Write a Message..."
                  required
                ></textarea>
              </div>

              <div className="btn_wrapper">
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
