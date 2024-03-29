import React from 'react';
import styled from 'styled-components';

import SiteNavigation from '../../components/GlobalComponents/SiteNavigation';
import Container from '../../components/GlobalComponents/Container';

import TodoInputForm from '../../components/LocalTodosComponents/TodoInputForm';
import TodoList from '../../components/LocalTodosComponents/TodoList';
import {DataProvider} from '../../components/LocalTodosComponents/DataProvider';

export const LocalTodosStyle = styled(Container) `
    * {
        margin: 0;
        box-sizing: border-box;
        padding: 0;
    }
    main {
        padding: 3.125rem;
        box-sizing: border-box;
        font-weight: 600;
        max-width: 37.5rem;
        width: 100%;
        min-height: 31.25rem;
        box-shadow: 0 2px 6px #555;
        margin: 3.125rem auto;
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
`

const localTodos = () => {

    return(
        <>
        <header>
            <SiteNavigation />
        </header>
        <DataProvider>
            <LocalTodosStyle>
                <main>
                    <h1>Din huskeliste!</h1>

                    <TodoInputForm />

                    <TodoList />
                </main>
            </LocalTodosStyle>
        </DataProvider>
        
        
        </>
    );
}

export default localTodos;