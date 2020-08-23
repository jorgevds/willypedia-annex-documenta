import Body from "../components/Body";
// import Footer from "../components/footer";
import Layout from "../components/layouts/Layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="Willypedia">
      <Body />
    </Layout>
  );
}
