import React from 'react';
import styled from 'styled-components';

import SiteNavigation from '../../components/GlobalComponents/SiteNavigation';
import Container from '../../components/GlobalComponents/Container';

const sharedTodos = () => {

    return(
    <div>
      
      <header>
        <SiteNavigation />
      </header>
      
      <main>
        <div className="task-header">
          <h1>Deres felles huskeliste!</h1>

          <button>Legg til gjøremål</button>
        </div>

        <div className="task-container">
          
        </div>
      </main>
      
    </div>
    )

};

export default sharedTodos;