import Head from "next/head";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => (
  <header>
    <Head>
      <title>Willypedia: titel te beslissen</title>
      <link rel="icon" href="/icon copy.png" />
    </Head>
    <nav>
      <ul className={styles.list}>
        <li className={styles.title}>
          <Link href="/">
            <a className={styles.headerLink}>willy roggeman</a>
          </Link>
        </li>

        <li className={styles.title}>
          <Link href="/posts/home">
            <a className={styles.headerLink}>essays</a>
          </Link>
        </li>

        <li className={styles.title}>
          <Link href="/image/home">
            <a className={styles.headerLink}>foto's</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
