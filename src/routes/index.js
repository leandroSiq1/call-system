import { Switch } from 'react-router-dom';

import { RouteWrapper } from './Route';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Dashboard } from '../pages/Dashboard';
import { Profile } from '../pages/Profile';

export function Routes() {
  return (
    <Switch>
      <RouteWrapper exact path="/" component={SignIn} />
      <RouteWrapper exact path="/register" component={SignUp} />
      
      <RouteWrapper exact path="/dashboard" component={Dashboard} isPrivate />
      <RouteWrapper exact path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}