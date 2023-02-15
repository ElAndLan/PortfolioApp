import React from "react";
import styles from "./ECommerceNavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faUser,
  faGlobe,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Badge } from "@mui/material";

const ECommerceNavbar = (cart) => {
  const cartSize = cart.cart.length;
  console.log(cart);
  return (
    <div className={styles.navContainer}>
      <div className={styles.navContent}>
        <div className={styles.homeButton}>
          <Link href="/ecommerce-demo">
            <FontAwesomeIcon icon={faHome} color="#000000" />
          </Link>
        </div>
        \
        <div className={styles.portfolioHome}>
          <Link href="/">
            <FontAwesomeIcon icon={faGlobe} color="#000000" />
          </Link>
        </div>
        <div className={styles.shoppingCart}>
          <Badge badgeContent={cartSize} color="secondary">
            <Link href="ecommerce-demo/cart" >
              <FontAwesomeIcon icon={faCartArrowDown} color="#000000" />
            </Link>
          </Badge>
        </div>
        <div className={styles.userProfile}>
          <FontAwesomeIcon icon={faUser} color="#000000" />
        </div>
      </div>
    </div>
  );
};

export default ECommerceNavbar;
