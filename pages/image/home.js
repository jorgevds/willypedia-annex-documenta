import useSWR from "swr";
import Image from "../../components/Image";
import Layout from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

const ImagesHome = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR("/api/images", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout title="Willypedia: foto's">
      {/* {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date} */}
      <h3 className={utilStyles.header}>Foto's</h3>
      <ul className={utilStyles.bulletList}>
        {data.map((p, i) => (
          <Image key={i} image={p} className={utilStyles.listItem} />
        ))}
      </ul>
    </Layout>
  );
};

export default ImagesHome;
