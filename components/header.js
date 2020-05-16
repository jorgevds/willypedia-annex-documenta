import Head from "next/head";

const Header = () => (
  <main className="container">
    <Head>
      <title>Willypedia: titel te beslissen</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
      <ul>
        <li className="title">Willy Roggeman</li>
      </ul>
    </header>
    <div>
      <p className="description">is de man</p>

      <h3>met een plan?</h3>

      <h2>Nee</h2>

      <h3>Hij is gewoon de man</h3>
    </div>
  </main>
);

export default Header;
