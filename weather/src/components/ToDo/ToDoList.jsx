import { useEffect, useState } from 'react';
import './ToDoList.css';


function TitleSpan(props) {
    if (props.completed) {
        return (
            <span className='completed-task'>{props.title}</span>
        );
    }
    return <span>{props.title}</span>
}

function ToDoList() {
    const [tasks, setTasks] = useState(() => {
        const localValue = localStorage.getItem('TASKLIST')
        if (localValue == null) return []

        return JSON.parse(localValue)
    });
    const [newItem, setNewItem] = useState("");

    useEffect(() => {
        localStorage.setItem("TASKLIST", JSON.stringify(tasks))
    }, [tasks])


    function addTask() {
        if (newItem === '') return;
        const newTask = { id: crypto.randomUUID(), title: newItem, completed: false };
        setTasks(t => [...t, newTask]);
        setNewItem("");
    }
    function deleteTask(i) {
        const update = tasks.filter(({ title, id, completed }) => id !== i)
        setTasks(update);
    }

    function toggleCompleted(toggleId, completedTask, span) {
        const update = tasks.map(({ title, id, completed }) => {
            if (id === toggleId) {
                completed = completedTask;
                return { title, id, completed }
            }
            return { title, id, completed };
        });
        setTasks(update);
        span.classList.toggle('completed-task');
    }

    return (
        <div className="App">

            <h2>Task List</h2>
            <div className='input-box'>
                <input
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type='text'
                    id="item"
                    placeholder='Get stuff done...'
                />
                <button className='add-button' onClick={addTask}>Add Task</button>
            </div>

            <div className="task-list">
                <ul>
                    {tasks.length === 0 && "No Tasks"}
                    {tasks.map(({ id, title, completed }) =>
                        <div key={id}>
                            <li className="list-item" >
                                <input
                                    type="checkbox"
                                    checked={completed}
                                    onChange={e => toggleCompleted(id, !completed, e.target.nextSibling)}

                                />
                                <TitleSpan title={title} completed={completed} />
                                <button className="danger-button" onClick={() => deleteTask(id)}>Delete</button>
                            </li>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default ToDoList;