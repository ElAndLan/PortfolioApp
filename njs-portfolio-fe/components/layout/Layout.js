import NavBar from "../navbar/NavBar";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
