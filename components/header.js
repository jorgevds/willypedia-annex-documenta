import Head from "next/head";
import styles from "./header.module.css";

const Header = () => (
  <main className={styles.container}>
    <Head>
      <title>Willypedia: titel te beslissen</title>
      <link rel="icon" href="/icon.png" />
    </Head>
    <header>
      <ul className={styles.list}>
        <li className={styles.title}>willy roggeman</li>
      </ul>
    </header>
    <div>
      <h3>hier een ondertitel/hoofding</h3>
      <p>blurb/introductie</p>
    </div>
  </main>
);

export default Header;
