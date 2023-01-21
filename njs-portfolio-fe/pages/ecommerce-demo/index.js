import { useEffect, useState } from "react";
import ProductPanel from "../../components/product-panel/ProductPanel";
import styles from "./index.module.scss";
import ECommerceNavbar from "../../components/ecommerce-navbar/ECommerceNavBar";
import fetchProducts from "../../services/FetchProducts";
import Modal from "../../components/modal/Modal";

const ECommerceDemo = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [modalType, setModalType] = useState("commerce-return");
  const [products, setProducts] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  if (products !== undefined) {
    return (
      <div className={styles.commerce_container}>
        <div className={styles.navBar}>
          <ECommerceNavbar cart={cart} />
        </div>
        <div className={styles.body_content}>
          {products.map((product) => {
            return (
              <ProductPanel product={product} cart={cart} setCart={setCart} />
            );
          })}
        </div>
        {isOpen && <Modal setIsOpen={setIsOpen} modalType={modalType} />}
      </div>
    );
  } else {
    return <div>Loading Products</div>;
  }
};

export default ECommerceDemo;
