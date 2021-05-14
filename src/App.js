import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';

import sharedTodos from './pages/sharedTodos';
import localTodos from './pages/localTodos';
import homeContainer from './pages/homeContainer';


//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/sharedtodos" component={sharedTodos} />
          <Route path="/localTodos" component={localTodos}/>
          <Route path="/" component={homeContainer} />
        </Switch>
      </Router>
    </>
  )
};

export default App;