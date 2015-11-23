
import React from 'react';
import { List, Map } from 'immutable';

const pair = List.of('Trainspotting', 'Sunshine');
const tally = Map({'Trainspotting': 5, 'Sunshine': 4});

export default React.createClass({
  render() {
    return React.cloneElement(this.props.children, {
      pair: pair,
      tally: tally
    });
  }
});
