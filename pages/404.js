import styles from "../styles/Errors.module.scss";

const Custom404 = () => {
  return (
    <div className={styles.ErrorPage404}>
      <div className={styles.ErrorContent}>
        <h1>Error 404 - Page Not Found</h1>
        <h2>
          Either the page you are looking for does not exist, or it is currently
          in development and is not available! Please check back later <br />~
          Andrew
        </h2>
      </div>
    </div>
  );
};

export default Custom404;
