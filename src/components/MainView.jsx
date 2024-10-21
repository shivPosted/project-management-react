import styles from "./MainView.module.css";
import notask from "../assets/no-projects.png";
import Button from "./Button";

export default function MainView({ currentProject }) {
  return (
    <div className={styles.main}>
      <div className={styles["project-greetings"]}>
        <img src={notask} alt="notask-image" />
        <h2>No Projects Selected</h2>
        <p>Select a Project or Get Started with New One</p>
        <Button>Create New Project</Button>
      </div>
    </div>
  );
}
