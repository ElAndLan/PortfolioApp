import axios from "axios";

const fetchProducts = async (setProducts) => {
  await axios
    .get("http://localhost:5184/Products", { headers: {} })
    .then((response) => {
      setProducts(response.data);
    })
    .catch((err) => console.log(err));
};

export default fetchProducts;
