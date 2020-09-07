import React from 'react';
import Home from '../components/Home';
import Page from '../components/Page';

function Initial({ colors }) {
  return (
    <Page title="React issues">
      <Home colors={colors} />
    </Page>
  );
}

export default Initial;
