import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "./image.module.css";
import Layout from "../../components/Layout";
import Link from "next/link";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Image() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/images/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout title={`Willypedia: foto's: ${data.name}`}>
      <div className={styles.content}>
        <h1 className={styles.dataName}>{data.name}</h1>
        <img className={styles.dataImg} src={data.img} />
      </div>
      <div className={styles.contentText}>
        <h3 className={styles.dataHeader}>{data.header}</h3>
        <Link href="/image/home">
          <a className={styles.backLink}>Terug naar overzicht</a>
        </Link>
      </div>
    </Layout>
  );
}
