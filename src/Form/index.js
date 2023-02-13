import { useState } from "react";
import { StyledForm, Input, Button } from "./styled";


const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >
            <Input
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <Button className="form__button">Dodaj zadanie</Button>
        </StyledForm>
    )
};

export default Form;