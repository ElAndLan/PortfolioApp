import React from "react";
import styles from "./index.module.scss";

const ProjectPage = () => {
  return (
    <div className={styles.project_container}>
      <div className={styles.body_content}>
        <h1 id={styles.title}> My Projects!</h1>
        <p>
          As of now, this portfolio is the only project I have. I am currently
          working on more, such as a hospital patient management system as well
          as a e-commerce application (both of which will be full-stack, with
          the patient management system using Bootstrap and the e-commerce
          application using .NET 8)
        </p>
        <p>
          I thank you for your patience, and if you have any questions please
          feel free to contact me! I would love to hear from you.
        </p>
      </div>
    </div>
  );
};

export default ProjectPage;
