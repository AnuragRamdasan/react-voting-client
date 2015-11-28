
import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import { creatStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

import App from './components/app';
import { VotingContainer } from './components/voting';
import  { ResultsContainer } from './components/results';

const pair = ['Trainspotting', 'Sunshine'];

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', 'Trainspotting'],
      tally: { 'Sunshine': 2}
    }
  }
});

const routes = <Route component={App}>
  <Route path="/" component={VotingContainer} />
  <Route path="/results" component={ResultsContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
