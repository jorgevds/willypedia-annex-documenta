import Link from "next/link";

class Footer extends React.Component {
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
    const photo = this.state.photoLinks.map((i) => <li>{i}</li>);
    return (
      <div>
        Foto's
        <ul>{photo}</ul>
      </div>
    );
  }
}

export default Footer;
