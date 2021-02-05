import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/scss/styles.scss';

import { RouteBase } from 'constants/routeUrl';
import DefaultLayout from 'layout/DefaultLayout';
import ReviewPage from 'views/Review';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={RouteBase.Review} component={ReviewPage} />
        <Route path={RouteBase.Home} component={DefaultLayout} />
      </Switch>
    </Router>
  );
};

export default App;
