import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Container from '../Container';

export const SiteNavigationBase = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  ul {
    list-style: none;
    margin: 0 0 0 -1.5rem;
    padding: 0;
    li {
      display: inline-block;
      &:not(:last-child) {
        margin-right: 1rem;
      }
      a {
        display: inline-block;
        padding: 0;
        color: black;
        text-decoration: none;
        border-bottom: 2px solid #aaa;
        &:hover {
          border-color: rebeccapurple;
        }
      }
    }
  }
`;

function SiteNavigation() {
  return (
    <SiteNavigationBase as="nav">
      <ul>
        <li>
          <NavLink to="/">Hjem</NavLink>
        </li>
        <li>
          <NavLink to="/localTodos">Din huskeliste</NavLink>
        </li>
        <li>
            <NavLink to="/sharedTodos">Felles huskeliste</NavLink>
        </li>
      </ul>
    </SiteNavigationBase>
  );
}

export default SiteNavigation;