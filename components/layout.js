import styles from "./layout.module.css";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
}
