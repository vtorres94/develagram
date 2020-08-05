import React, { useEffect, useContext } from 'react';
import { useUser } from './context/user-context';

import {
    Link,
    NavLink,
    Route,
    Switch
} from 'react-router-dom';

import Index from './components/index';
import Login from './components/login';


const Routes = () => {
  const { user, setUser } = useUser();
  return (
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/login" component={Login} />
        <Route path="/registry">
          Registro
        </Route>
      </Switch>
  );
}

export default Routes;
