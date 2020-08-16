import { useRouter } from "next/router";
import useSWR from "swr";
import utilStyles from "../../styles/utils.module.css";
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
    <table className={utilStyles.table}>
      <tbody className={utilStyles.dataBody}>
        <tr className={utilStyles.heading}>
          <td className={utilStyles.dataName}>{data.name}</td>
          <img className={utilStyles.dataImg} src={data.img} />
          <div className={utilStyles.content}>
            <td className={utilStyles.dataHeader}>{data.header}</td>
            <Link href="/image/home">
              <a className={utilStyles.backLink}>Terug</a>
            </Link>
          </div>
        </tr>
      </tbody>
    </table>
  );
}
