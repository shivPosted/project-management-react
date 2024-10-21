import styles from "./Projectlist.module.css";
export default function ProjectList({ projects }) {
  return (
    <ul className={styles.projectList}>
      {projects.map((project) => (
        <li key={project.id}>{project.title}</li>
      ))}
    </ul>
  );
}
