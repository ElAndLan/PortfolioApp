import styles from "./index.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.body_content}>
        <h1 id={styles.title}> About me!</h1>
        <p>
          First, I want to start off by saying thank you for taking the time to
          visit my works!{" "}
        </p>
        <p>
          Chef turned Caregiver now turned Software Developer,I finally found
          the courage and the drive to embrace a passion I've had since
          high-school: Technology and Programming on a professional level where
          I can bring peoples passions to life.
        </p>
        <p>
          If you're looking for somebody with a keen eye for detail to help
          bring your ideas to life, look no further! Experienced in both
          Front-End languages and frameworks (HTML, CSS, Javascript, React,
          Typescript) as well as Back-End languages (C#, Java, Python,
          Bootstrap), I'm confident that I can make your dreams a reality.
        </p>
        <p>
          Be it a professional portfolio website for artists, or an e-commerce
          website for a growing business, I can help create anything to fit your
          needs. My projects are listed on this site, and if you feel I would be
          a good match for your ideas please contact me! We can work out a deal
          and figure out the details from there.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
