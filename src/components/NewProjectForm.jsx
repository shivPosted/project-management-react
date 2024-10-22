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
    <form action="#" onSubmit={(e) => e.preventDefault()}>
      <div className={styles.row}>
        <label htmlFor="project-title">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="project-desription">Description</label>
        <textarea
          type="text"
          value={projectDes}
          onChange={(e) => setProjectDes(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
      </div>
      <div className={styles.row}>
        <button onClick={handleCancel}>cancel</button>
        <Button onclick={handleSave}> Save </Button>
      </div>
    </form>
  );
}
