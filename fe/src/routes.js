/* import React from 'react'; 
import BabelCore from 'babel-core/register';
import BabelPolyfill from 'babel-polyfill'; 

import { Route, IndexRoute } from 'react-router';

import App from './components/app';  
import NotFoundPage from './components/common/not-found-page';

import Login from './components/auth/login';
import Logout from './components/auth/logout';
import RequireAuth from './components/auth/requireAuth';
import Dashboard from './components/dashboard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={RequireAuth(Dashboard)} />
    <Route path="login" component={Login} />
    <Route path="dashboard" component={RequireAuth(Dashboard)} />
    <Route path="logout" component={Logout} /> 
    <Route path="*" component={NotFoundPage} />
  </Route>
); */


const routes = {
  '/': 'Home',
  '/dashboard': 'Dashboard',
  '/components': 'Components',
  '/charts': 'Charts',
  '/components/buttons': 'Buttons',
  '/components/social-buttons': 'Social Buttons',
  '/components/cards': 'Cards',
  '/components/forms': 'Forms',
  '/components/modals': 'Modals',
  '/components/switches': 'Switches',
  '/components/tables': 'Tables',
  '/components/tabs': 'Tabs',
  '/icons': 'Icons',
  '/icons/font-awesome': 'Font Awesome',
  '/icons/simple-line-icons': 'Simple Line Icons',
  '/widgets': 'Widgets'
};
export default routes;
