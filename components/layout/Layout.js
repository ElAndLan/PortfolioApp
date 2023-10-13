import NavBar from "../navbar/NavBar";
import styles from "./Layout.module.scss";
import { useState } from "react";

const Layout = ({ children }) => {
  const [hidden, setHidden] = useState(false);

  return (
    <div className={styles.layoutContainer}>
      <NavBar hidden={hidden} setHidden={setHidden} />
      {children}
    </div>
  );
};

export default Layout;
