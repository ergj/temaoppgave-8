import React, {useState, useContext} from 'react';
import {DataContext} from '../DataProvider';

export default function TodoInputForm () {

    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');

    const addTodo = event => {
        event.preventDefault();
        setTodos([...todos, {name: todoName, complete: false}]);
        setTodoName('');
    }

    return (
        <form autoComplete="off" onSubmit={addTodo}>
            <input type="text" name="locTodoInput" placeholder="Hva skal du huske?" id="locTodos" required value={todoName} onChange={event => setTodoName(event.target.value.toLowerCase())} />
            <button type="submit">Legg til</button>
        </form>
    )
}