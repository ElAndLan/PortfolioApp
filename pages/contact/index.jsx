import React from "react";
import { useRef, useState } from "react";
import styles from "./index.module.scss";
import emailjs from "@emailjs/browser";
import Modal from "../../components/modal/Modal";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("default");
  const form = useRef();

  const handleModalOpen = (newModalType) => {
    setModalType(newModalType);
    setIsOpen(true);
  };

  const validateForm = () => {
    let count = 0;
    for (let i = 0; i < 4; i++) {
      if (form.current[count].value == "") {
        console.log(form.current[count].value);
        console.log("Form invalid!");
        return false;
      } else {
        console.log(form.current[count].value);
        console.log(count);
        count = count + 1;
      }
    }

    console.log("Form valid!");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(form.current[0].value)
    if (validateForm() == true) {
      emailjs
        .sendForm(
          "service_0yrjzml",
          "template_wifql2f",
          form.current,
          "X5VDOcIcz2MQdX8IP"
        )
        .then(
          (result) => {
            handleModalOpen("message-sent");
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      handleModalOpen("invalid-form");
    }
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
      {isOpen && <Modal setIsOpen={setIsOpen} modalType={modalType} />}
    </div>
  );
};

export default Contact;
