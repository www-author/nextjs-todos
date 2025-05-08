import { useState } from "react";

const TodoInput = ({setTodos, todos }) => {
    const [newTodo, setNewTodo] = useState("");

    const addTask = () => {
        if (!newTodo.trim()) return;

        const newTask = {
            id: Date.now(),
            text: newTodo,
        };
        setTodos([...todos, newTask]);
        setNewTodo('');
    };

    const handleInputKeyPress = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    };

    return (
        <div className="form-area">
            <input type="text" placeholder="Enter a task" 
            value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyDown={handleInputKeyPress}/>
            <button className="add-btn" type="submit" onClick={addTask} >Add Task</button>
        </div>
    );
}

export default TodoInput;