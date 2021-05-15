import React, {useState} from 'react';
import { auth, firestore } from '../Firebase/firebase';
import firebase from 'firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const SharedTodoComponent = () => {
    const [sharedTodoItem, setSharedTodoItem] = useState("");
    const sharedTodosRef = firestore.collection(`users/${auth.currentUser.uid}/sharedTodoItems`);
    const [sharedTodoItems] = useCollectionData(sharedTodosRef, {idField: "id"});

    const signOut = () => auth.signOut();

    const onSubmitSharedTodo = (event) => {
        event.preventDefault();

        setSharedTodoItem("");
        sharedTodosRef.add({
            text: sharedTodoItem,
            complete: false,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
    };

    return (
        <>
                <div className="wrapper">
                    <button className="btnSignOut" onClick={signOut}>Logg ut</button>
                </div>
            <main>
                

                <h1>Felles huskeliste</h1>

                <form onSubmit={onSubmitSharedTodo}>
                    <input required value={sharedTodoItem} onChange={(event) => setSharedTodoItem(event.target.value)} placeholder="Hva vil du huske?" />
                    <button type="submit">Legg til</button>
                </form>
                <ul>
                    {sharedTodoItems && sharedTodoItems.map((sharedTodoItem) => <SharedTodoItem {...sharedTodoItem} />)}
                </ul>               
            </main>
        </>
    )
};

const SharedTodoItem = ({ id, complete, text }) => {
    const sharedTodosRef = firestore.collection(`users/${auth.currentUser.uid}/sharedTodoItems`);
    const onCompleteSharedTodo = (id, complete) => sharedTodosRef.doc(id).set({complete: !complete}, {merge: true});

    const onDeleteSharedTodo = (id) => sharedTodosRef.doc(id).delete();

    return (
            <li key={id}>
                <label htmlFor={id} className={`sharedTodoItem ${complete ? "active" : ""}`}>
                    <input type="checkbox" onChange={() => onCompleteSharedTodo(id, complete)} checked={sharedTodosRef.complete}/>
                    {text}
                </label>
                <button onClick={() => onDeleteSharedTodo(id)}>Fjern</button>
            </li>
    )
}


export default SharedTodoComponent;