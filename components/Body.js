import styles from "./body.module.css";

const Body = () => (
  <main className={styles.container}>
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

export default Body;
