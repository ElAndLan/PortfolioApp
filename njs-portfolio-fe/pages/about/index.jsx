import styles from "./index.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.body_content}>
        <h1 id={styles.title}> About me!</h1>
        <p>
          Hello, and welcome to my Portfolio! My name is Andrew Alan LaNoue, and
          this page is mostly going to be about my history, what pushes me
          forward, and what you can expect from me as a person!
        </p>
        <p>
          I cooked professionally for about 5 years out of high-school, working
          in places like Big Sky Ski Resort and Yellowstone National Park as a
          traveling chef.
        </p>
        <p>
          After those 5 years, my mother had health problems that made her
          living alone incredibly difficult, so I took that time to step aside
          from culinary arts and take care of her for a living for nearly 5-6
          years. After that time, I felt like I needed to take my life back and
          focus on myself and my career, and I always had a passion for
          programming and development since taking high-school Java classes.
        </p>
        <p>
          I was researching development education opportunities, from bootcamps
          and self-education to actual formal education in the form of college
          and degrees. During my searches, I found a company called Catalyte
          that trains people in software development that normally wouldn't have
          had the opportunity to learn this skillset, and decided to apply on a
          whim after hearing nothing but good things about the company.
        </p>
        <p>
          To my surprise, I ended up being accepted and joining their rigorous 6
          month bootcamp in full-stack software development that covered
          multiple different stacks such as: HTML, CSS, Javascript, React, Java,
          Springboot as well as non-stack essentials such as GIT, Agile/Scrum
          methodology, Jira, Product Management, and SDET testing using
          Selenium.
        </p>
        <p>
          {" "}
          At the end of the 6 months, I graduated from the cycle and was hired
          full-time as a Full-Stack software developer, and did that happily for
          a year spending that time working as a Content Management System
          specialist for a company called Modere, responsible for transitioning
          from their old system to their new ContentStack CMS.
        </p>
        <p>
          {" "}
          Unfortunately, due to the recession and the market I was laid off, but
          instead of seeing it as a negative I saw it as a start to a brand-new
          journey where I can continue to learn, grow, and show my skills off
          while having fun and loving life along the way!
        </p>
        <p>
          Thank you so much for taking the time to learn more about me as a
          person and as a developer, if I can help you in ANY way possible, be
          it answering questions or helping to develop the website of your
          dreams, please do not hesitate to contact me! Either through the
          "Contact" button on my NavBar to the left, or through the "Contact"
          button on my main page!{" "}
        </p>
        <p>
          Sincerely, <br />
          Andrew
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
