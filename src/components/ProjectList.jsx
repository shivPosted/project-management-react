import styles from "./Projectlist.module.css";
export default function ProjectList({ projects, setCurrentProject }) {
  function handleClick(id) {
    const curProject = projects.find((project) => project.id === id);
    setCurrentProject(curProject);
  }

  return (
    <ul className={styles.projectList}>
      {projects.map((project) => (
        <li key={project.id} onClick={() => handleClick(project.id)}>
          {project.title}
        </li>
      ))}
    </ul>
  );
}
