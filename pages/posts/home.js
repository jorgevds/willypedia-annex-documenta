import Layout from "../../components/Layout";
import { getSortedPostsData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

const EssaysHome = ({ allPostsData }) => {
  return (
    <Layout title="Willypedia: essays">
      {/* {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date} */}
      <h3 className={utilStyles.header}>essays</h3>
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
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default EssaysHome;
