import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.homeLink}>willypedia</a>
      </Link>
    </div>
  );
};

export default Footer;
