import React, {useContext, useState} from 'react';
import { DataContext } from '../DataProvider';

export default function TodoItem({todo, id, checkComplete}) {

    const [todos, setTodos] = useContext(DataContext);

    const deleteTodo = () => {
        const newTodos = todos.filter(todo => {
            return todo.complete === false
        })
        setTodos(newTodos)
    };


    return(
        <li>
            <label htmlFor={id} className={todo.complete ? "active" : ""}>
                <input type="checkbox" id={id} checked={todo.complete} onChange={() => checkComplete(id)} />
                {todo.name}
            </label>
            <button onClick={deleteTodo}>Fjern</button>                    
        </li>
    )
}