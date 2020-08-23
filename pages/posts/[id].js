import Footerless from "../../components/layouts/Footerless";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import styles from "./post.module.css";

export default function Post({ postData }) {
  return (
    <Footerless title={`Willypedia: essays: ${postData.title}`}>
      {/* {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date} */}
      <div
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        className={styles.container}
      />
      <a href="/posts" className={utilStyles.backLink}>
        Terug naar overzicht
      </a>
    </Footerless>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
