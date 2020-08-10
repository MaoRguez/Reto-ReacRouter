import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import { Home } from './pages/Home';
import { Stats } from './pages/Stats';
import { Transactions } from './pages/Transactions';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/stats' component={Stats} />
            <Route exact path='/transactions' component={Transactions} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}