import "./style.css";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone }) => {
    if (tasks.lenght === 0) {
        return null
    }
    return (
        <div className="buttons">
            <button onClick={toggleHideDone} className="button__button ">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} Ukończone </button>
            <button
                className="button__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ Wszystkie
            </button>
        </div>
    )
}

export default Buttons;