import { TasksLi, Items, Content, Button } from "./styled"

const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone }) => (
    <TasksLi>
        {tasks.map(task => (
            <Items
                hidden={task.done && hideDoneTasks}
            >
                <Button 
                toggleDone
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✓" : ""}
                </Button>
                <Content done={task.done}>
                    {task.content}
                </Content>
                
                <Button 
                remove
                    onClick={() => removeTask(task.id)}
                >🗑️</Button>
            </Items>
        ))}
    </TasksLi>
);



export default Tasks;