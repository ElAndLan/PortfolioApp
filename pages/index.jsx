import Head from "next/head";
import { useState, React } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Modal from "../components/modal/Modal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("default");

  //Placeholder function that will handle multiple modal-types based on different needs. Currently only one type is used, but this is how you would update it to different types.
  const handleModalOpen = (newModalType) => {
    setModalType(newModalType);
    setIsOpen(true);
  };
  return (
    <div className={styles.home_container}>
      <div id={styles.body_container}></div>
      <Head>
        <title>Next-JS Portfolio Project</title>
      </Head>
      <div className={styles.body_content}>
        <h1 className={styles.content}>Hello! I am Andrew LaNoue</h1>
        <br />
        <h2 className={styles.content}>
          Fullstack developer, Innovator, Leader
        </h2>
        <Link href="/about" className={styles.flat_button}>
          My Story
        </Link>
        <Link href="/contact" className={styles.flat_button}>
          Contact
        </Link>
        {isOpen && <Modal setIsOpen={setIsOpen} modalType={modalType} />}
      </div>
    </div>
  );
};

export default Home;
