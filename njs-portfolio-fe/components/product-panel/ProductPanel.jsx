import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ProductPanel.module.scss";

const ProductPanel = ({ product, cart, setCart }) => {
  const handleAddToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div className={styles.body_content} key={product.id}>
      <div className={styles.product_image}>
        <img src={product.url} />
      </div>
      <div className={styles.product_name}>
        <h3>{product.name}</h3>
      </div>
      <div className={styles.product_description}>{product.description}</div>
      <div className={styles.product_price}>Price: ${product.price}</div>
      <div className={styles.cart_add}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className={styles.add_to_cart}>
        <button onClick={handleAddToCart}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
      <div className={styles.cart_minus}>
        <FontAwesomeIcon icon={faMinus} />
      </div>
    </div>
  );
};

export default ProductPanel;
