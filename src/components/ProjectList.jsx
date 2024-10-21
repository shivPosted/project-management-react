import styles from "./Projectlist.module.css";
export default function ProjectList() {
  return (
    <ul className={styles.projectList}>
      {Array.from({ length: 5 }, (_, i) => (
        <li key={i + 1}>Project {i + 1}</li>
      ))}
    </ul>
  );
}
