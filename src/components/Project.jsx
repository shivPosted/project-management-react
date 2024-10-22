import { useEffect, useRef, useState } from "react";

export default function Project({ project, setProjects, setCurrentProject }) {
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

  function handleDelelte() {
    setProjects((cur) => cur.filter((obj) => obj.id !== project.id));
    setCurrentProject(null);
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
            <Task
              style={{ fontSize: "1.6rem" }}
              key={i}
              id={i}
              project={project}
              task={task}
              setProjects={setProjects}
              setTasks={setTasks}
            />
          ))}
        </ul>
      </div>
      <div>
        <button onClick={handleDelelte}>Delete</button>
      </div>
    </div>
  );
}

function Task({ task, id, setProjects, project, setTasks }) {
  function handleClick() {
    setProjects((cur) => {
      const newArr = cur.map((obj) => {
        console.log(obj);
        if (obj.id === project.id)
          return { ...obj, tasks: obj.tasks.filter((_, i) => id !== i) };
        else return obj;
      });
      return newArr;
    });
    setTasks((cur) => cur.filter((_, i) => id !== i));
  }
  return (
    <li>
      {task}
      <button onClick={handleClick}>&times;</button>
    </li>
  );
}
