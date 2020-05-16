import Link from "next/Link";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      documentLinks: [
        <Link href="/">
          <a>Back to home</a>
        </Link>,
      ],
      photoLinks: [
        <Link href="/">
          <a>Back to home</a>
        </Link>,
      ],
    };
  }
  render() {
    const doc = this.state.documentLinks.map((i) => <li>{i}</li>);
    const photo = this.state.photoLinks.map((i) => <li>{i}</li>);
    return (
      <div>
        <ul>
          {doc}
          {photo}
        </ul>
      </div>
    );
  }
}

export default Footer;
