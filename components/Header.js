import Link from "next/link";
import styles from "./header.module.css";

const Header = () => (
  <header>
    <nav>
      <ul className={styles.list}>
        <li className={styles.title}>
          <Link href="/">
            <a className={styles.headerLink}>willy roggeman</a>
          </Link>
        </li>

        <li className={styles.title}>
          <Link href="/posts">
            <a className={styles.headerLink}>essays</a>
          </Link>
        </li>

        <li className={styles.title}>
          <Link href="/image">
            <a className={styles.headerLink}>foto's</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
