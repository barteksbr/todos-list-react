
import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";





function App() {
  const [hideDoneTasks, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Przejść na React", done: false },
    { id: 2, content: "Pouczyć się", done: true },
  ]);

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

  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
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
          toggleHideDone={toggleHideDone} />}
      />
    </Container>
  );
}

export default App;
