import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants";
import styles from "./NavLinks.module.css";

export default function NavLinks() {
  return (
    <div className={styles.container}>
      <Link to={ROUTES.PUBLIC.FEED} className={styles.link}>
        Feed
      </Link>
    </div>
  );
}
