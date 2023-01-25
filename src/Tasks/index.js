import "./style.css";


const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li
                className={`task__item${task.done && props.hideDoneTasks ? " tasks__item--hiden" : ""}`}
            >
                <button className="tasks__button tasks__button--done">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`tasks__content${task.done ? " tasks__content--done" : ""}`}>
                    {task.content}</span>
                <button className="tasks__button tasks__button--remove">🗑️</button>
            </li>
        ))}
    </ul>
);



export default Tasks;