
import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";



const task = [
  { id: 1, content: "Przejść na React", done: false },
  { id: 2, content: "Pouczyć się", done: true },
];


function App() {
  const [hideDoneTasks, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={task} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={task} 
        hideDoneTasks={hideDoneTasks} 
        toggleHideDone={toggleHideDone} />}
      />
    </Container>
  );
}

export default App;
