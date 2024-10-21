import styles from "./Button.module.css";

export default function Button({ children, onclick }) {
  return (
    <button className={styles.btn} onClick={onclick}>
      {children}
    </button>
  );
}
