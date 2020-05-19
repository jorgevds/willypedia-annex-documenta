import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default ({ image }) => (
  <li>
    <Link href="/image/[id]" as={`/image/${image.id}`}>
      <a className={utilStyles.listItem}>{image.name}</a>
    </Link>
  </li>
);
