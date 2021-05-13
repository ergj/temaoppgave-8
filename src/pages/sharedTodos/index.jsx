import React, { useState } from 'react';
import SiteNavigation from '../../components/SiteNavigation';

const sharedTodos = () => {

    return(
    <div>
      
      <SiteNavigation />
      
      <h1>Deres felles huskeliste!</h1>

      <form>
        <input 
          placeholder="Hva skal du huske?"
        />
        <button type="submit">Legg til</button>
      </form>
      
    </div>
    )

};

export default sharedTodos;