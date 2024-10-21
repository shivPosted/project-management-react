import { useEffect, useRef, useState } from "react";

export default function Project({ project, setProjects }) {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState(project.tasks);
  const ref = useRef("");

  useEffect(() => {
    setTasks(project.tasks);
  }, [project.tasks]);

  function handleAddTask() {
    const refTask = ref.current.value;

    if (!refTask) return;

    setTasks((cur) => [...cur, refTask]);

    setProjects((cur) => {
      return cur.map((obj) => {
        if (obj.id === project.id)
          return { ...obj, tasks: [...obj.tasks, refTask] };
        else return obj;
      });
    });
    setInputTask("");
  }
  return (
    <div>
      <h2>{project.title}</h2>
      <p>
        {new Date(project.date).toLocaleString(navigator.language, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
      <p>{project.description}</p>
      <div>
        <h2>Tasks</h2>
        <input
          value={inputTask}
          type="text"
          onChange={(e) => setInputTask(e.target.value)}
          ref={ref}
        />
        <button onClick={handleAddTask}>Add task</button>
        <ul>
          {tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
