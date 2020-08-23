import Link from "next/link";
import styles from "./header.module.css";

const Header = () => (
  <header>
    <nav>
      <ul className={styles.unorderedList}>
        <li className={[styles.title, styles.listItem].join(" ")}>
          <Link href="/">
            <a className={styles.headerLink}>willypedia</a>
          </Link>
        </li>

        <li className={styles.listItem}>
          <Link href="/posts">
            <a className={styles.headerLink}>essays</a>
          </Link>
        </li>

        <li className={styles.listItem}>
          <Link href="/image">
            <a className={styles.headerLink}>foto's</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/biografie">
            <a className={styles.headerLink}>bio</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
