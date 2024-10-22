import styles from "./Button.module.css";

export default function Button({ children, onclick, type }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onclick}>
      {children}
    </button>
  );
}
