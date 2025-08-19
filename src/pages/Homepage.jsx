import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        {/*  <h1>
          You roam the globe.
          <br />
          <span className={styles.title}>My Places</span> logs every adventure.
        </h1>
        <h2>
          A global map that marks every city you visit. Relive your best moments
          and share your travels with friends.
        </h2> */}

        <Link to={"app"} className="cta">
          Start right now
        </Link>
      </section>
    </main>
  );
}
