import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greeting_container';
import Home from './home';

const App = () => {
  return (
    <div>
      <GreetingContainer/>
      <Route exact path="/" component={Home} />
    </div>
  );
};
export default App;
