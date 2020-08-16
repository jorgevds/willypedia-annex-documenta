import styles from "./layout.module.css";
import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, title = `${title}` }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
