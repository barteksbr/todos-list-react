import "./style.css";


const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                className={`task__item${task.done && hideDoneTasks ? " tasks__item--hiden" : ""}`}
            >
                <button className="tasks__button tasks__button--done"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✓" : ""}
                </button>
                <span className={`tasks__content${task.done ? " tasks__content--done" : ""}`}>
                    {task.content}</span>
                <button className="tasks__button tasks__button--remove"
                    onClick={() => removeTask(task.id)}
                >🗑️</button>
            </li>
        ))}
    </ul>
);



export default Tasks;