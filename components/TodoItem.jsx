function TodoItem({todo, deleteTodo}) {
    return (
        <ul>
            <li className="li-del">
            <span>{todo.text}</span>
            <button className="del-btn" onClick={() => deleteTodo(todo.id)}>삭제</button>
            </li>
        </ul>  
    );
}

export default TodoItem;