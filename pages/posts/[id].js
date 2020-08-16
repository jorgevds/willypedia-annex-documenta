import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      {/* {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date} */}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <a href="/" className={utilStyles.back}>
        Terug
      </a>
    </Layout>
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
