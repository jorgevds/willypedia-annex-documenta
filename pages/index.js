import Body from "../components/Body";
// import Footer from "../components/footer";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Body />
    </Layout>
  );
}
