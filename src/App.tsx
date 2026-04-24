// Main app component with layout and routing
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Orders from './pages/Orders';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/products' component={Products} />
        <Route path='/customers' component={Customers} />
        <Route path='/orders' component={Orders} />
        <Route path='/reports' component={Reports} />
        <Route path='/settings' component={Settings} />
      </Switch>
    </Router>
  );
};

export default App;