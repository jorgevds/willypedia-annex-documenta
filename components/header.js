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
      <h3 className={styles.heading}>de online annex documenta</h3>
      <p className={styles.blurb}>
        Hieronder volgen links naar essays en fotomateriaal dat, doch niet in
        publicatie beschikbaar is, doch relevant--en bovendien{" "}
        <i>interessant</i>--is voor academische en buiten-academische
        doeleinden.
      </p>
    </div>
  </main>
);

export default Header;
