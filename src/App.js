
import { useEffect, useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";



function App() {
  const [hideDoneTasks, setHideDone] = useState(false);

  const tasksFromLocalStorage = localStorage.getItem("tasks");

  const [tasks, setTasks] = useState(
    tasksFromLocalStorage
      ? JSON.parse(tasksFromLocalStorage)
      : []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  }

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  }

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      }
    ])
  }

  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks
          tasks={tasks}
          hideDoneTasks={hideDoneTasks}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone} />
        }
        extraHeaderContent={<Buttons tasks={tasks}
          hideDoneTasks={hideDoneTasks}
          toggleHideDone={toggleHideDone}
          setAllDone={setAllDone} />}
      />
    </Container>
  );
}

export default App;
