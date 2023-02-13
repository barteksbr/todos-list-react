import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import { useTasks } from "./useTasks";



function App() {
  const [hideDoneTasks, setHideDone] = useState(false);


  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };


  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

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
