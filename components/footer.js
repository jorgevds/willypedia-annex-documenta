import Link from "next/link";
import styles from "./footer.module.css";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoLinks: [
        <Link href="/">
          <a>Back to home</a>
        </Link>,
      ],
    };
  }
  render() {
    const photo = this.state.photoLinks.map((i) => <li key={i.id}>{i}</li>);
    return (
      <div>
        <h3 className={styles.header}>Foto's</h3>
        <ul>{photo}</ul>
      </div>
    );
  }
}
