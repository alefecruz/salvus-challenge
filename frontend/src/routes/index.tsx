import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../auth';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import UploadProfile from '../pages/UploadProfile';

const PrivateRoute: any = ({
  component: Component,
  ...rest
}: {
  component: any;
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register" exact component={Register} />
    <PrivateRoute path="/dashboard" exact component={Dashboard} />
    <PrivateRoute path="/uploads" exact component={UploadProfile} />
  </Switch>
);

export default Routes;
