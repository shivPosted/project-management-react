import { useState } from "react";
import styles from "./Sidebar.module.css";
import ProjectList from "./ProjectList";

export default function Sidebar() {
  const [projects, setProjects] = useState([]);

  return (
    <section className={styles.sidebar}>
      <h2>your projects</h2>
      <button>+ Add Project</button>
      <ProjectList />
    </section>
  );
}
