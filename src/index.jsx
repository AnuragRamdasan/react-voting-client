
import React from 'react';
import ReactDOM from 'react-dom';

import Voting from './components/voting';

const pair = ['Trainspotting', 'Sunshine'];

ReactDOM.render(
  <Voting pair={pair} winner='Trainspotting' />, document.getElementById('app')
);
