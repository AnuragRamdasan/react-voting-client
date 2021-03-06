
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { List, Map } from 'immutable';
import { expect } from 'chai';

import { Results } from '../../src/components/results.jsx';

const { renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate } = TestUtils;

describe('Results', () => {
  it('renders entries with vote counts', () => {
    const pair = List.of('Trainspotting', 'Sunshine');
    const tally = Map({'Trainspotting': 5});

    const component = renderIntoDocument(
      <Results pair={pair} tally={tally} />
    );

    const entries = scryRenderedDOMComponentsWithClass(component, 'entry');
    const [train, sun] = entries.map(e => e.textContent);

    expect(entries.length).to.equal(2);
    expect(train).to.contain('Trainspotting');
    expect(train).to.contain('5');
    expect(sun).to.contain('Sunshine');
    expect(sun).to.contain('0');
  });

  it('invokes the next callback when next button is clicked', () => {
    let nextInvoked = false;
    const next = () => nextInvoked = true;

    const pair = List.of('Trainspotting', 'Sunshine');
    const component = renderIntoDocument(
      <Results pair={pair}
        tally={Map()}
        next={next} />
    );

    Simulate.click(ReactDOM.findDOMNode(component.refs.next));

    expect(nextInvoked).to.equal(true);
  });

  it('renders the winner when there is one', () => {
    const component = renderIntoDocument(
      <Results winner='Trainspotting'
        pair={['Trainspotting', 'Sunshine']}
        tally={Map()} />
    );

    const winner = ReactDOM.findDOMNode(component.refs.winner);
    expect(winner).to.be.ok;
    expect(winner.textContent).to.contains('Trainspotting');
  });
});
