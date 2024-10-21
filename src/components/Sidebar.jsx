import styles from "./Sidebar.module.css";

export default function Sidebar({
  children,
  setCreateProject,
  setCurrentProject,
}) {
  function handleClick() {
    setCreateProject(true);
    setCurrentProject(null);
  }
  return (
    <section className={styles.sidebar}>
      <h2>your projects</h2>
      <button onClick={handleClick}>+ Add Project</button>
      {children}
    </section>
  );
}
