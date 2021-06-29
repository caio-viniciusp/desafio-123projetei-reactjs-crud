import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import List from './pages/listar';
import Main from './pages/main';
import View from './pages/visualizar';
import Store from './pages/cadastro'

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/pessoas" exact component={List}/>
        <Route path={`/pessoas/:cpf`}exact component={View}/>
        <Route path={`/cadastrar`}exact component={Store}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;