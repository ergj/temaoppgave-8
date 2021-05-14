import React, {useContext} from 'react';
import TodoItem from '../TodoItem';
import {DataContext} from '../DataProvider';

export default function TodoList () {
    const [todos, setTodos] = useContext(DataContext);

    const switchComplete = id => {
        const newTodos = [...todos];
        newTodos.forEach((todo, index) => {
            if(index === id) {
                todo.complete = !todo.complete
            }
        })
        setTodos(newTodos)
    };


    return(
        <ul>
            {
                todos.map((todo, index) => (
                    <TodoItem todo={todo} key={index} id={index} checkComplete={switchComplete} />
                ))
            }
        </ul>
    )
}