import DatePicker from "react-datepicker";
import styles from "./NewProjectForm.module.css";
import { useState } from "react";
import Button from "./Button";

import "react-datepicker/dist/react-datepicker.css";

export default function NewProjectForm({
  setProjects,
  setCurrentProject,
  setCreateProject,
}) {
  const [title, setTitle] = useState("");
  const [projectDes, setProjectDes] = useState("");
  const [date, setDate] = useState(new Date());

  function handleSave() {
    if (title && projectDes) {
      setProjects((cur) => {
        if (cur.find((obj) => obj.title === title)) return cur;
        else
          return [
            ...cur,
            {
              title,
              description: projectDes,
              date: date.toISOString(),
              tasks: [],
              id: crypto.randomUUID(),
            },
          ];
      });
      setCurrentProject(null);
      setCreateProject(false);
    }
  }

  function handleCancel() {
    setCreateProject(false);
  }

  return (
    <form
      action="#"
      onSubmit={(e) => e.preventDefault()}
      className={styles.form}
    >
      <div className={styles.row}>
        <label htmlFor="project-title">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="project-title"
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="project-desription">Description</label>
        <textarea
          type="text"
          value={projectDes}
          onChange={(e) => setProjectDes(e.target.value)}
          id="project-desription"
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="date-picker">Date</label>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          id="date-picker"
          className={styles.date}
        />
      </div>
      <div className={styles.row}>
        <Button type="secondary" onclick={handleCancel}>
          cancel
        </Button>
        <Button onclick={handleSave} type="primary">
          {" "}
          Save{" "}
        </Button>
      </div>
    </form>
  );
}
