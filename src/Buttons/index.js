import "./style.css";

const Buttons = ({tasks, hideDoneTask}) => {
    if(tasks.lenght === 0) {
        return null
    }
    
    return (

        <div className="buttons">
            <button className="button__button ">
    {hideDoneTask ? "Pokaż" : "Ukryj"} Ukończone </button>
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