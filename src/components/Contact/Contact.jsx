import React, { useState } from "react";
import "./Contact.css";
import ContactImage from "../../assets/contact/contact.jpg";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/krishnaofficial27@gmail.com",
        {
          method: "POST",
          body: formData,
        },
      );

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

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

            <form onSubmit={handleSubmit}>
              {/* Required FormSubmit options */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thanks for contacting us! We will get back to you soon."
              />

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
                <button
                  type="submit"
                  className="btn"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>
              </div>

              {/* Inline success / error */}
              {status === "success" && (
                <div className="form_status success">
                  <span className="status_icon">✓</span>
                  <span>Thanks! Your message has been sent.</span>
                </div>
              )}

              {status === "error" && (
                <div className="form_status error">
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              {status === "error" && (
                <p style={{ marginTop: "1rem", color: "red" }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
