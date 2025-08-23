import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <Link to={"login"} className="cta">
          Start right now
        </Link>
      </section>
    </main>
  );
}
