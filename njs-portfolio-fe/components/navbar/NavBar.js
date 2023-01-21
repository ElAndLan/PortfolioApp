import { useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import { useRouter } from "next/router";
import Logo from "../../public/assets/logo/logo_a.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faCartShopping,
  faEnvelope,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

const NavBar = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  let hideNav;

  if (
    router.pathname === "/ecommerce-demo" ||
    router.pathname === "/ecommerce-demo/cart"
  ) {
    hideNav = true;
  } else hideNav = false;

  console.log(hideNav);
  return (
    <div>
      {hideNav == false && (
        <>
          <div className={styles.navbar}>
            <Link className={styles.logo} href="/">
              <img src={Logo} alt="logo" />
            </Link>
            <nav className={styles.nav}>
              <Link
                className={
                  styles.home_link +
                  " " +
                  (currentPath == "/" ? styles.active : " ")
                }
                href="/"
              >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
              </Link>

              <Link
                className={
                  styles.about_link +
                  " " +
                  (currentPath == "/about" ? styles.active : " ")
                }
                href="/about"
              >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
              </Link>

              <Link
                className={
                  styles.project_link +
                  " " +
                  (currentPath == "/projects" ? styles.active : " ")
                }
                href="/projects"
              >
                <FontAwesomeIcon icon={faBoxArchive} color="#4d4d4e" />
              </Link>

              <Link
                className={
                  styles.contact_link +
                  " " +
                  (currentPath === "/contact" ? styles.active : " ")
                }
                href="/contact"
              >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
              </Link>

              <Link
                className={
                  styles.commerce_link +
                  " " +
                  (currentPath === "/ecommerce-demo" ? styles.active : " ")
                }
                href="/ecommerce-demo"
              >
                <FontAwesomeIcon icon={faCartShopping} color="#4d4d4e" />
              </Link>
            </nav>
            <ul className={styles.ul}>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/andrew-lanoue-1395a916b/"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/ElAndLan"
                >
                  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://discordapp.com/users/561712589453656097"
                >
                  <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
