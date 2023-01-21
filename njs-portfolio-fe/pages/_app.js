import "../styles/globals.css";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div className="mainContainer">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
