import { Wrapper, Button } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone, setAllDone }) => {
    if (tasks.lenght === 0) {
        return null
    }
    return (
        <Wrapper>
            <Button onClick={toggleHideDone}>
                {hideDoneTasks ? "Pokaż" : "Ukryj"} Ukończone </Button>
            <Button
                disabled={tasks.every(({ done }) => done)}
                onClick={() => setAllDone()}
            >
                Ukończ Wszystkie
            </Button>
        </Wrapper>
    )
}

export default Buttons;