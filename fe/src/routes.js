import React from 'react'; 
import BabelCore from 'babel-core/register';
import BabelPolyfill from 'babel-polyfill'; 

import { Route, IndexRoute } from 'react-router';

import App from './components/app';  
import NotFoundPage from './components/common/not-found-page';

import Login from './components/auth/login';
import Logout from './components/auth/logout';
import RequireAuth from './components/auth/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout} /> 
    <Route path="*" component={NotFoundPage} />
  </Route>
);