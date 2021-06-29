import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import List from './pages/listar';
import Main from './pages/main';


function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/pessoas" exact component={List}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;