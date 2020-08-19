import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default ({ image }) => (
  <li className={utilStyles.listItem}>
    <Link href="/image/[id]" as={`/image/${image.id}`}>
      <a>{image.name}</a>
    </Link>
  </li>
);
