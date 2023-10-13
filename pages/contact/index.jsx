import React from "react";
import { useRef } from "react";
import styles from "./index.module.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0yrjzml",
        "template_wifql2f",
        form.current,
        "X5VDOcIcz2MQdX8IP"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className={styles.contact_container}>
      <div className={styles.column_one}>
        {" "}
        <div className={styles.content}>
          {" "}
          <h1>Let's have a talk! </h1>
          <hr />
          <p>
            Have a project idea? Want to get a quote? I'd be happy to sit down
            and have a talk with you! Let's work together to make your dreams a
            reality!
          </p>
          <p>
            You can contact me through E-Mail, Discord or send me a message
            through the form to the right!
          </p>
          <p>
            I'm looking forward to hearing from you! <br />
          </p>
          <hr />
          <p id={styles.email}>Mail: xandrewlanoue@gmail.com</p>
          <p>Phone: (484)-848-4148</p>
          <p>Discord: Roo.oor</p>
        </div>
      </div>
      <div className={styles.column_two}>
        <div className={styles.form_content}>
          <h1>Contact Me</h1>
          <hr />
          <form ref={form} onSubmit={handleSubmit}>
            <p>
              <label for="name" className={styles.form_item}>
                Name:
              </label>
              <input type="text" name="name" />
            </p>
            <p>
              <label for="email" className={styles.form_item}>
                E-Mail:
              </label>
              <input type="text" name="email" />
            </p>
            <p>
              <label for="phone" className={styles.form_item}>
                Phone:
              </label>
              <input type="number" name="phone" />
            </p>
            <p>
              <label for="message" className={styles.form_item}>
                Message:
              </label>
              <textarea type="text" name="message" />
            </p>
            <p>
              <label for="submit" className={styles.form_item}>
                <button type="submit" id={styles.submitBtn}>
                  {" "}
                  Submit{" "}
                </button>
              </label>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
