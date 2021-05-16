import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase';

import SiteNavigation from '../../components/GlobalComponents/SiteNavigation';
import Container from '../../components/GlobalComponents/Container';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../components/SharedTodoComponents/Firebase/firebase';

import SharedTodoComponent from '../../components/SharedTodoComponents/SharedTodoComponent';

export const SharedTodosStyle = styled(Container) `
    * {
      margin: 0;
      box-sizing: border-box;
      padding: 0;
    }
    main {
        padding: 50px;
        box-sizing: border-box;
        font-weight: 600;
        max-width: 600px;
        width: 100%;
        min-height: 500px;
        box-shadow: 0 2px 6px #555;
        margin: 21px auto;
        h1 {
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 800;
        }
        form {
            width: 100%;
            height: 2.5rem;
            margin: 1.25rem 0;
            display: flex;
            input, button {
                flex: 3;
                margin: 0 5px;
            }
            button {
                flex: 1;
                background-color: #555;
                color: white;
                letter-spacing: 2px;
                cursor: pointer;
            }
        }
        ul {
            align-items: center;
        }
        ul li {
            list-style: none;
            border: 1px solid #555;
            margin: 10px 0;
            width: 100%;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-transform: capitalize;
        }
        ul li .active {
            opacity: 0.5;
            text-decoration: line-through;
        }
        ul li input {
            margin-right: 5px;
            transform: translateY(1px);
            cursor: pointer;
        }
        ul li button {
            padding: 5px 15px;
            cursor: pointer;
            background-color: crimson;
            color: white;
        }
    }
    .btnSignOut, .btnSignIn {
      background-color: #555;
      color: white;
      padding: 5px 15px;
      cursor: pointer;
      letter-spacing: 2px;
    }
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }
`

const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

const SignIn = () => {
  return (
    <>
      <div className="wrapper">
          <button className="btnSignIn" onClick={signInWithGoogle}>Logg inn med Google</button>
      </div>
      <main>
        <h1>Logg inn for å se huskelisten</h1>
      </main>
    </>
  );
};



const sharedTodos = () => {

    const [user]= useAuthState(auth);


    return(
    <>
      <header>
        <SiteNavigation />
      </header>
      
      <SharedTodosStyle>

        {user ? <SharedTodoComponent /> : <SignIn /> }
            
      </SharedTodosStyle>     
    </>
    );

};

export default sharedTodos;