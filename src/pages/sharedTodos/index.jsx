import React from 'react';
import SiteNavigation from '../../components/SiteNavigation';

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