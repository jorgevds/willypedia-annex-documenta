import Header from "../components/header";
// import Footer from "../components/footer";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import useSWR from "swr";
import Image from "../components/Image";

export default function Home({ allPostsData }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR("/api/images", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <Layout home>
      <Header />
      <section className={utilStyles.essaySection}>
        <h3 className={utilStyles.heading}>Essays</h3>
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
      <h3 className={utilStyles.heading}>Foto's</h3>
      <ul className={utilStyles.bulletList}>
        {data.map((p, i) => (
          <Image key={i} image={p} className={utilStyles.listItem} />
        ))}
      </ul>
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
