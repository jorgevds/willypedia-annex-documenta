import Header from "../components/header";
import Footer from "../components/footer";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Header />
      <section className={utilStyles.essaySection}>
        <h3 className={utilStyles.headingThree}>Essays</h3>
        <ul className={utilStyles.bulletList}>
          {allPostsData.map(({ id, title }) => {
            return (
              <li className={utilStyles.listItem} key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}></small>
              </li>
            );
          })}
        </ul>
      </section>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
