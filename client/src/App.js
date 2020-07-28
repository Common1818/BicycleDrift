import React, { useEffect } from 'react';
import Navbar from './components/layout/navbar/Navbar';
import { Route, Switch } from 'react-router-dom';

import LoginSignupForm from './components/auth/LoginSignupForm';
import Home from './components/home/Home';
import Alert from './components/layout/Alert';
import store from './store';
import { setAuthToken } from './utils/setAuthToken';
import { loadUser } from './actions/auth';

if (localStorage.token) {
   setAuthToken(localStorage.token);
}

const App = () => {
   useEffect(() => {
      store.dispatch(loadUser());
   }, []);
   return (
      <div>
         <Navbar />
         <Alert />
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={LoginSignupForm} />
         </Switch>
      </div>
   );
};

export default App;
