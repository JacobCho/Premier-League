import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import Standings from './containers/standings';
import Players from './containers/players';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/:teamName" component={Players} />
          <Route path="/" component={Standings} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));

