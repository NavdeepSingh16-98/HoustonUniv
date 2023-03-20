import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ApiProvider from './components/ApiProvider';
import Landing from './pages/landing';
import NewComponent from './components/NewComponent';

function App() {
  return (
    <ApiProvider>
      <Router>
          <Route exact path='/'>
              <Landing />
          </Route>

          <Route path='/newRoute'>
<NewComponent />

          </Route>
      </Router>
    </ApiProvider>
  );
}

export default App;
