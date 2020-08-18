import styles from "./body.module.css";

const Body = () => (
  <main className={styles.container}>
    <h3 className={styles.heading}>de online annex documenta</h3>
    <p className={styles.blurb}>
      Op deze webpagina staan links naar essays en fotomateriaal dat, doch niet
      in publicatie beschikbaar is, doch relevant--en bovendien{" "}
      <i>interessant</i>
      --is voor academische en buiten-academische doeleinden.
    </p>
  </main>
);

export default Body;
