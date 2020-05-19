import { useRouter } from "next/router";
import useSWR from "swr";
import utilStyles from "../../styles/utils.module.css";

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
    <table className={utilStyles.headingThree}>
      <tbody className={utilStyles.headingThree}>
        <tr className={utilStyles.headingThree}>
          <td className={utilStyles.headingThree}>{data.name}</td>
          <img src={data.img} />
          <td>{data.header}</td>
        </tr>
      </tbody>
    </table>
  );
}
